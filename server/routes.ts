import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

// Email configuration
const createTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("Email configuration missing. Contact form emails will not be sent.");
    return null;
  }
  
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      const transporter = createTransporter();
      if (transporter) {
        try {
          await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.SMTP_USER,
            to: "info@casabenavides.com",
            subject: `New Contact Form Submission from ${submission.name}`,
            html: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${submission.name}</p>
              <p><strong>Email:</strong> ${submission.email}</p>
              <p><strong>Message:</strong></p>
              <p>${submission.message.replace(/\n/g, '<br>')}</p>
              <p><strong>Submitted:</strong> ${submission.createdAt}</p>
            `,
          });
          console.log("Email sent successfully for submission:", submission.id);
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
          // Don't fail the request if email fails
        }
      }
      
      res.json({ 
        message: "Thank you for your message! We will get back to you soon.",
        success: true 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error: " + validationError.message,
          success: false 
        });
      } else {
        res.status(500).json({ 
          message: "An error occurred while processing your request.",
          success: false 
        });
      }
    }
  });

  // Get all contact submissions (for admin use)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
