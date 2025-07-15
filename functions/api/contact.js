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

// Email sending using EmailJS API (compatible with Cloudflare Functions)
const sendEmailNotification = async (env, submission) => {
  try {
    // Log the email details
    console.log("=== EMAIL NOTIFICATION ===");
    console.log("To: casabena@newmex.com");
    console.log("Subject: New Contact Form Submission from", submission.name);
    console.log("From:", submission.email);
    console.log("Message:", submission.message);
    console.log("Submitted:", submission.createdAt);
    
    // Send email using EmailJS API
    // Check for environment variables with VITE_ prefix (as shown in screenshot)
    const serviceId = env.VITE_EMAILJS_SERVICE_ID || env.EMAILJS_SERVICE_ID;
    const templateId = env.VITE_EMAILJS_TEMPLATE_ID || env.EMAILJS_TEMPLATE_ID;
    const publicKey = env.VITE_EMAILJS_PUBLIC_KEY || env.EMAILJS_PUBLIC_KEY;
    
    console.log('EmailJS Config Check:');
    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey);
    console.log('Request origin:', context.request.headers.get('origin'));
    console.log('Request host:', context.request.headers.get('host'));
    
    if (serviceId && templateId && publicKey) {
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
      
      console.log("Sending email via EmailJS...");
      
      console.log("Sending to EmailJS API with data:", JSON.stringify(emailjsData, null, 2));
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailjsData)
      });
      
      if (response.ok) {
        console.log("Email sent successfully via EmailJS");
        return true;
      } else {
        const errorText = await response.text();
        console.error("EmailJS API error:", response.status, response.statusText);
        console.error("EmailJS error response:", errorText);
        return false;
      }
    } else {
      console.warn("EmailJS configuration missing - email will not be sent");
      console.log("Available env vars:", Object.keys(env));
      console.log("=== END EMAIL ===");
      return true;
    }
    
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