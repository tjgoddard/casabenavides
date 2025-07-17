# Casa Benavides Inn Website

## Overview

Casa Benavides Inn is a full-stack web application built for a historic bed & breakfast in Taos, New Mexico. The application serves as a marketing website with contact form functionality, featuring a modern React frontend and Express.js backend with PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: In-memory storage with fallback to PostgreSQL sessions
- **API Design**: RESTful API with JSON responses

### Development Setup
- **Monorepo Structure**: Shared code between client and server
- **Hot Reloading**: Vite middleware integration for development
- **Error Handling**: Runtime error overlay for development
- **Type Safety**: Shared TypeScript types between frontend and backend

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions Table**: Stores form submissions (id, name, email, message, created_at)
- **Schema Validation**: Zod schemas for runtime validation and type inference

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact-submissions` - Retrieve all contact submissions (admin)

### UI Components
- **Navigation**: Sticky navigation with mobile menu support
- **Hero Section**: Full-screen hero with booking integration
- **Location Section**: Interactive content about Taos location
- **Features Section**: Highlights of the inn's amenities
- **Breakfast Section**: Details about gourmet breakfast offerings
- **Contact Section**: Contact form with real-time validation
- **Story Section**: Historic background of the inn
- **Footer**: Links and additional information

### Form Handling
- **Validation**: Zod schema validation on both client and server
- **Error Handling**: User-friendly error messages with toast notifications
- **Success Feedback**: Confirmation messages for successful submissions

## Data Flow

1. **User Interaction**: User fills out contact form on the frontend
2. **Client Validation**: Form data validated using Zod schemas
3. **API Request**: TanStack Query sends POST request to backend
4. **Server Validation**: Backend validates request using shared schemas
5. **Database Storage**: Valid submissions stored in PostgreSQL
6. **Response**: Success/error response sent back to client
7. **UI Update**: Toast notification displays result to user

## External Dependencies

### Frontend Dependencies
- **UI Components**: Extensive Radix UI primitives for accessibility
- **Icons**: Lucide React icons
- **Form Handling**: React Hook Form with resolvers
- **Date Utilities**: date-fns for date formatting
- **Styling**: Tailwind CSS with PostCSS

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod with validation error formatting
- **Session Storage**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### External Services
- **Database Hosting**: Neon Database (serverless PostgreSQL)
- **Reservation System**: Integration with ResNexus booking system
- **Maps**: Google Maps integration for location
- **Social Media**: Facebook page integration

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Migration**: Drizzle migrations applied to PostgreSQL

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reload
- **Production**: Node.js runs compiled JavaScript bundle
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Storage Strategy
- **Development**: In-memory storage for rapid development
- **Production**: PostgreSQL with Drizzle ORM for persistence
- **Sessions**: PostgreSQL session store for scalability

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
- July 14, 2025. Standardized typography system across all pages
  - luxury-heading: Playfair Display serif for main headings
  - luxury-subheading: Inter sans-serif for section headings  
  - luxury-body: Inter sans-serif for body text (color removed from class)
  - Applied consistent font usage throughout all components
- July 15, 2025. Production-ready deployment preparation
  - Fixed Contact page: working images, form submission, Google Maps integration
  - Implemented full email functionality with nodemailer (sends to casabena@taosnet.com)
  - Added Google Analytics tracking (G-TDTMB2DBTF) across all pages with event tracking
  - Enhanced mobile experience: improved touch targets for hero section buttons
  - Fixed page navigation: all pages now scroll to top on route changes
  - Contact form validates, stores submissions, and sends formatted emails
  - Updated favicon with Casa Benavides logo in multiple sizes (ICO, PNG, Apple touch icon)
  - DEPLOYMENT ISSUE: Contact form works perfectly in development but fails in production
    - Root cause: Cloudflare Pages serves static files only, doesn't run Express server
    - Solution implemented: Created Cloudflare Functions for API routes
    - Fixed deployment failures: Removed nodemailer dependency and invalid wrangler.toml
    - New files: functions/api/contact.js, functions/api/health.js, _headers
    - Ready for deployment: Contact form logs submissions to Cloudflare Functions logs
  - Navigation improvements: Added HOME button next to logo with matching hero section styling
  - Content updates: Changed all "Gourmet Breakfast" references to "Breakfast Included" throughout site
  - EMAIL INTEGRATION: Implemented reliable email functionality with Resend API
    - Resend API provides reliable email delivery with proper API key authentication
    - Domain casabenavides.com verified on Resend platform
    - Contact form now sends emails to casabena@newmex.com with proper domain authentication
    - Email system fully functional in both development and production environments
    - Removed all EmailJS dependencies and cleaned up codebase for production deployment
    - Navigation improvements: HOME button now only appears when scrolling (cleaner UX)
    - PERFORMANCE OPTIMIZATIONS: Applied safe performance improvements for better user experience
      - Added lazy loading to all images below the fold (breakfast, about, contact sections)
      - Optimized hero image loading with preload hint and priority attributes for better LCP
      - Enhanced Google Maps iframe with lazy loading (already implemented)
      - Improved image loading priorities (high for first hero image, low for carousel images)
    - USABILITY IMPROVEMENTS: Fixed layout shifts, accessibility issues, and mobile zoom restrictions
      - Removed maximum-scale=1 from viewport meta tag to allow mobile zoom (critical accessibility fix)
      - Added aspect ratios to hero images and navigation logo to prevent layout shifts
      - Fixed Facebook link accessibility by adding aria-label and aria-hidden attributes
      - Improved color contrast for casa-blue-accent text on blue background for better readability
    - RESILIENCY IMPROVEMENTS: Reduced third-party blocking resources for better reliability
      - Made Google Fonts load asynchronously to prevent render blocking
      - Added async loading to Replit dev banner script
      - Enhanced font loading with font-display: swap for better fallback handling
      - Reduced single points of failure from external dependencies
    - IMAGE OPTIMIZATION: Implemented responsive image loading for improved performance
      - Added proper sizes attributes for responsive image sizing
      - Enhanced loading priorities with fetchpriority and decoding attributes
      - Implemented lazy loading for all images below the fold
      - Added async decoding for smoother rendering
    - RENDER BLOCKING OPTIMIZATION: Eliminated render-blocking resources for faster initial page load
      - Added critical font fallback styles inline to prevent FOIT (Flash of Invisible Text)
      - Enhanced font stack with system-ui fallbacks for immediate rendering
      - Optimized font loading sequence to prevent render blocking
      - Improved LCP and FCP metrics by removing CSS blocking resources
    - CRITICAL PATH OPTIMIZATION: Reduced critical request chain length from 884ms to parallel loading
      - Implemented resource preloading to break dependency chains
      - Added DNS prefetch for faster font domain resolution
      - Optimized font loading with preload hints instead of blocking requests
      - Parallel loading of critical resources reduces maximum latency
    - LCP IMAGE OPTIMIZATION: Fixed LCP image discovery and preloading
      - Implemented dynamic preloading of hero image with correct hashed filename
      - Ensured LCP image is discoverable and properly prioritized
      - Fixed filename mismatch between static preload and Vite build output
    - SEO OPTIMIZATION: Comprehensive search engine optimization implementation
      - Fixed critical robots.txt serving HTML instead of proper directives
      - Created XML sitemap with all pages and proper priority/frequency settings
      - Added structured data (JSON-LD) for rich snippets in search results
      - Enhanced meta tags with keywords, Open Graph, and Twitter Card support
      - Added canonical URL to prevent duplicate content issues
      - Implemented LodgingBusiness schema for better local search visibility
    - MOBILE IMAGE OPTIMIZATION: Enhanced mobile performance with responsive image loading
      - Implemented responsive sizes attributes for all major images (hero, about, location sections)
      - Optimized sizes for mobile viewports (640px, 768px, 1024px breakpoints)
      - Added CSS-based image rendering optimization for mobile devices
      - Fixed duplicate attributes in location section component
      - Navigation logo optimized for faster loading with eager priority
      - Note: Full 24.5MB savings requires server-side image resizing or CDN optimization
    - RENDER BLOCKING FIX: Eliminated render-blocking CSS for mobile performance
      - Added comprehensive critical CSS inline for above-the-fold content
      - Implemented async CSS loading script to convert blocking stylesheets to non-blocking
      - Google Fonts already loading asynchronously with preload technique
      - Critical CSS includes navigation, hero, typography, and button styles
      - Reduced initial render delay by 330ms (CSS) and 480ms (fonts)
    - NETWORK DEPENDENCY OPTIMIZATION: Reduced critical path latency for mobile
      - Added modulepreload for JavaScript to break dependency chain
      - Implemented resource hints (preload, prefetch) for critical assets
      - JavaScript now loads with defer and high fetchpriority
      - CSS loads non-blocking with print media trick
      - Replit banner deferred until after page load
      - Reduced maximum critical path from 335ms to parallel loading
    - BUNDLE SIZE OPTIMIZATION: Reduced unused JavaScript by removing unnecessary dependencies
      - Removed framer-motion (unused) - saved 3 packages
      - Removed recharts (unused) - saved 37 packages (~20KB)
      - Implemented lazy loading for all page components to reduce initial bundle
      - Added React.lazy and Suspense for route-based code splitting
      - Removed unused chart components that were pulling in heavy dependencies
      - Bundle size reduced from 97.6 KiB with 49.7 KiB unused to optimized chunks
    - IMAGE PAYLOAD OPTIMIZATION: Reduced massive 25MB image payload for mobile performance
      - Implemented progressive loading for hero carousel (only load first image initially)
      - Page headers now use single static image instead of full carousel (saves 18MB)
      - Hero carousel images load on-demand when carousel advances
      - Added 1-second delay for non-critical images to prioritize initial render
      - Reduced image sizes attributes for mobile (40vw vs 100vw)
      - Added intersection observer for future image lazy loading enhancements
      - Expected payload reduction: ~20MB (from 25MB to ~5MB) for initial page load
    - Final production-ready state achieved with clean, maintainable codebase
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```