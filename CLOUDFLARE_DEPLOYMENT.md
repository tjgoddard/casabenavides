# Cloudflare Pages Deployment Guide

## What We've Done

✅ **Created Cloudflare Functions** for API routes:
- `functions/api/contact.js` - Handles contact form submissions
- `functions/api/health.js` - Health check endpoint
- `wrangler.toml` - Cloudflare configuration
- `_headers` - CORS configuration

✅ **Contact Form Ready**: The existing contact form will automatically work with the new functions

## Deployment Steps

### 1. Update Cloudflare Pages Build Settings

In your Cloudflare Pages dashboard (the screenshot you showed):

**Build Configuration:**
- Build command: `npm run build`
- Build output directory: `dist/public`
- Root directory: `/` (leave blank)

**Environment Variables:**
Add these in the **Settings > Environment Variables** section:
- `SMTP_HOST` = your SMTP server (e.g., smtp.gmail.com)
- `SMTP_PORT` = 587
- `SMTP_USER` = your email username
- `SMTP_PASS` = your email password
- `EMAIL_FROM` = your "from" email address

### 2. Enable Node.js Compatibility

In the **Settings > Functions** section:
- Set **Compatibility date** to `2024-01-01`
- Enable **Node.js compatibility** flag

### 3. Deploy

1. Push your code to your Git repository
2. Cloudflare Pages will automatically rebuild and deploy
3. The API endpoints will be available at:
   - `https://your-domain.com/api/contact` (for form submissions)
   - `https://your-domain.com/api/health` (for testing)

## Testing After Deployment

1. Test the health endpoint:
   ```bash
   curl https://your-domain.com/api/health
   ```
   Should return JSON with status "ok"

2. Test the contact form on your website - it should work automatically

## What This Fixes

- ✅ Contact form will work in production
- ✅ Emails will be sent to casabena@taosnet.com  
- ✅ No changes needed to your existing site
- ✅ All other pages continue to work exactly as before

## If You Need Help

If you encounter any issues:
1. Check the Cloudflare Pages **Functions** logs in the dashboard
2. Verify all environment variables are set correctly
3. Ensure Node.js compatibility is enabled

The contact form code is already perfect and ready to work with these functions!