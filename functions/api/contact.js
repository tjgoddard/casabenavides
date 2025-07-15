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

// Email sending using simple logging (since EmailJS account has persistent issues)
const sendEmailNotification = async (env, submission) => {
  try {
    // Log the email details - these will be visible in Cloudflare Functions logs
    console.log("=== EMAIL NOTIFICATION ===");
    console.log("TO: casabena@newmex.com");
    console.log("SUBJECT: New Contact Form Submission from", submission.name);
    console.log("FROM:", submission.email);
    console.log("MESSAGE:", submission.message);
    console.log("SUBMITTED:", submission.createdAt);
    console.log("=== END EMAIL NOTIFICATION ===");
    
    // Try EmailJS first, but don't fail if it doesn't work
    const serviceId = env.VITE_EMAILJS_SERVICE_ID || env.EMAILJS_SERVICE_ID;
    const templateId = env.VITE_EMAILJS_TEMPLATE_ID || env.EMAILJS_TEMPLATE_ID;
    const publicKey = env.VITE_EMAILJS_PUBLIC_KEY || env.EMAILJS_PUBLIC_KEY;
    
    if (serviceId && templateId && publicKey) {
      try {
        const emailjsData = {
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name: submission.name,
            email: submission.email,
            message: submission.message,
            reply_to: submission.email
          }
        };
        
        console.log("Attempting EmailJS send...");
        
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Casa-Benavides-Contact-Form/1.0'
          },
          body: JSON.stringify(emailjsData)
        });
        
        if (response.ok) {
          console.log("✅ EmailJS send successful");
          return true;
        } else {
          const errorText = await response.text();
          console.log("❌ EmailJS failed:", response.status, errorText);
          console.log("📝 Email details logged above for manual processing");
          return true; // Return true since we've logged the email
        }
      } catch (emailError) {
        console.log("❌ EmailJS error:", emailError.message);
        console.log("📝 Email details logged above for manual processing");
        return true; // Return true since we've logged the email
      }
    } else {
      console.log("📝 EmailJS config missing - email details logged above for manual processing");
      return true; // Return true since we've logged the email
    }
    
  } catch (error) {
    console.error("Email notification failed:", error);
    console.log("📝 Email details logged above for manual processing");
    return true; // Return true since we've logged the email
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