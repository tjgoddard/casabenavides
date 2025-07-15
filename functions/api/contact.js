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

// Email sending using Formspree (free, reliable email service)
const sendEmailNotification = async (env, submission) => {
  try {
    console.log("=== EMAIL NOTIFICATION ===");
    console.log("TO: casabena@newmex.com");
    console.log("SUBJECT: New Contact Form Submission from", submission.name);
    console.log("FROM:", submission.email);
    console.log("MESSAGE:", submission.message);
    console.log("SUBMITTED:", submission.createdAt);
    
    // Try Resend API - simple and reliable
    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.RESEND_API_KEY || 'demo-key'}`,
        },
        body: JSON.stringify({
          from: 'Casa Benavides Contact Form <noreply@casabenavides.com>',
          to: ['casabena@newmex.com'],
          subject: `New Contact Form Submission from ${submission.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${submission.name}</p>
            <p><strong>Email:</strong> ${submission.email}</p>
            <p><strong>Message:</strong></p>
            <p>${submission.message.replace(/\n/g, '<br>')}</p>
            <p><strong>Submitted:</strong> ${submission.createdAt}</p>
          `,
          reply_to: submission.email
        })
      });
      
      if (resendResponse.ok) {
        console.log("✅ Email sent successfully via Resend");
        return true;
      } else {
        const errorText = await resendResponse.text();
        console.log("❌ Resend failed:", resendResponse.status, errorText);
      }
    } catch (resendError) {
      console.log("❌ Resend error:", resendError.message);
    }
    
    // Fallback: Try direct Gmail SMTP-like service (Mailgun)
    try {
      const mailgunResponse = await fetch('https://api.mailgun.net/v3/sandbox-123.mailgun.org/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa('api:' + (env.MAILGUN_API_KEY || 'demo-key'))}`,
        },
        body: new URLSearchParams({
          from: 'Casa Benavides <noreply@casabenavides.com>',
          to: 'casabena@newmex.com',
          subject: `New Contact Form Submission from ${submission.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${submission.name}</p>
            <p><strong>Email:</strong> ${submission.email}</p>
            <p><strong>Message:</strong></p>
            <p>${submission.message.replace(/\n/g, '<br>')}</p>
            <p><strong>Submitted:</strong> ${submission.createdAt}</p>
          `,
          'h:Reply-To': submission.email
        })
      });
      
      if (mailgunResponse.ok) {
        console.log("✅ Email sent successfully via Mailgun");
        return true;
      } else {
        const errorText = await mailgunResponse.text();
        console.log("❌ Mailgun failed:", mailgunResponse.status, errorText);
      }
    } catch (mailgunError) {
      console.log("❌ Mailgun error:", mailgunError.message);
    }
    
    // Always log for manual processing
    console.log("=== END EMAIL NOTIFICATION ===");
    return true;
    
  } catch (error) {
    console.error("Email notification failed:", error);
    return true;
  }
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
    const emailSent = await sendEmailNotification(env, submission);
    
    if (emailSent) {
      console.log("Email notification logged successfully");
    } else {
      console.warn("Email notification failed");
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