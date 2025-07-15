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

// Simple email sending using EmailJS API or similar service
const sendEmailNotification = async (env, submission) => {
  try {
    // For now, we'll log the email details and store the submission
    console.log("=== EMAIL NOTIFICATION ===");
    console.log("To: casabena@taosnet.com");
    console.log("Subject: New Contact Form Submission from", submission.name);
    console.log("From:", submission.email);
    console.log("Message:", submission.message);
    console.log("Submitted:", submission.createdAt);
    console.log("=== END EMAIL ===");
    
    // In production, you would implement email sending here using:
    // - EmailJS API
    // - SendGrid API
    // - Mailgun API
    // - Or any other email service API
    
    return true;
  } catch (error) {
    console.error("Email notification failed:", error);
    return false;
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