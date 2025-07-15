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
  
  return nodemailer.createTransport({
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
  console.log("Registering routes...");
  console.log("NODE_ENV:", process.env.NODE_ENV);
  
  // Test route to verify routes are working
  app.get("/api/health", (req, res) => {
    console.log("Health check endpoint hit");
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });
  
  // Debug middleware to log all API requests
  app.use('/api/*', (req, res, next) => {
    console.log(`API Request: ${req.method} ${req.originalUrl}`);
    next();
  });
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Contact form request received:", req.body);
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      console.log("Validation successful:", validatedData);
      const submission = await storage.createContactSubmission(validatedData);
      console.log("Submission created:", submission);
      
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
      console.error("Contact form error:", error);
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
