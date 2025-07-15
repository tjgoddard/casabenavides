import nodemailer from 'nodemailer';

// Email configuration
const createTransporter = () => {
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) {
    console.warn("Email configuration missing. Contact form emails will not be sent.");
    return null;
  }
  
  return nodemailer.createTransporter({
    host: env.SMTP_HOST,
    port: parseInt(env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });
};

// Simple validation function
const validateContactData = (data) => {
  const errors = [];
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 1) {
    errors.push('Name is required');
  }
  
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    errors.push('Valid email is required');
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 1) {
    errors.push('Message is required');
  }
  
  return errors;
};

export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    // Parse JSON body
    const body = await request.json();
    console.log("Contact form request received:", body);
    
    // Validate the data
    const validationErrors = validateContactData(body);
    if (validationErrors.length > 0) {
      return new Response(JSON.stringify({
        message: `Validation error: ${validationErrors.join(', ')}`,
        success: false
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }
    
    const { name, email, message } = body;
    
    // Create submission object
    const submission = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };
    
    console.log("Validation successful:", submission);
    
    // Send email notification
    const transporter = createTransporter();
    if (transporter) {
      try {
        console.log("Attempting to send email...");
        console.log("From:", env.EMAIL_FROM || env.SMTP_USER);
        console.log("To: casabena@taosnet.com");
        
        await transporter.sendMail({
          from: env.EMAIL_FROM || env.SMTP_USER,
          to: "casabena@taosnet.com",
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
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        console.error("Email error details:", emailError.message);
        // Don't fail the request if email fails
      }
    } else {
      console.warn("Email transporter not configured - email will not be sent");
    }
    
    return new Response(JSON.stringify({
      message: "Thank you for your message! We will get back to you soon.",
      success: true
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
    
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({
      message: "An error occurred while processing your request.",
      success: false
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }
}

// Handle CORS preflight requests
export async function onRequestOptions(context) {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}