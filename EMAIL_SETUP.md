# Email Setup Guide for Casa Benavides Contact Form

## Current Status
✅ **Deployment is working** - contact form submissions are being logged  
❌ **Email notifications not working** - need to set up email service

## Quick Solution: EmailJS (Recommended)

EmailJS is free, easy to set up, and works perfectly with Cloudflare Functions.

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service (Gmail, Outlook, etc.)

### Step 2: Set Up Email Template
1. In EmailJS dashboard, go to **Email Templates**
2. Create a new template with these variables:
   - `{{from_name}}` - Contact person's name
   - `{{from_email}}` - Contact person's email
   - `{{message}}` - Contact message
   - `{{reply_to}}` - Reply-to email address

### Step 3: Get Your Keys
From your EmailJS dashboard, get:
- **Service ID** (e.g., service_abc123)
- **Template ID** (e.g., template_xyz456)
- **Public Key** (e.g., user_789def)

### Step 4: Add to Cloudflare Environment Variables
In your Cloudflare Pages dashboard, add these environment variables:
- `EMAILJS_SERVICE_ID` = your service ID
- `EMAILJS_TEMPLATE_ID` = your template ID  
- `EMAILJS_PUBLIC_KEY` = your public key

### Step 5: Test
1. Push your code to trigger a deployment
2. Submit a test message through your contact form
3. Check your email inbox for the notification

## Alternative: Use Cloudflare Functions Logs

If you prefer not to set up EmailJS immediately, you can:

1. Go to **Cloudflare Dashboard** → **Workers & Pages** → **Your Site** → **Functions** → **Logs**
2. Look for entries with "EMAIL NOTIFICATION" - these contain full contact form details
3. Set up email notifications later when convenient

## Current Contact Form Features
- ✅ Form validation
- ✅ Success/error messages
- ✅ CORS headers for security
- ✅ Logged submissions in Cloudflare Functions
- 🔄 Email notifications (ready to activate with EmailJS)

The contact form is fully functional - just add EmailJS configuration to get email notifications!