# File Metadata Microservice

## Overview

This is a File Metadata Microservice API built as a freeCodeCamp project. The application provides a simple web interface for uploading files and returns metadata about the uploaded file including its name, MIME type, and size in bytes. It's designed as a lightweight microservice demonstrating file upload handling and metadata extraction.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**October 17, 2025 - Initial Setup for Replit Environment**
- Installed multer package for file upload handling
- Implemented /api/fileanalyse endpoint to process file uploads and return metadata
- Configured Express server to bind to 0.0.0.0:5000 for Replit environment
- Set up workflow to run the application on port 5000
- Configured deployment settings for autoscale deployment
- Added uploads/ directory to .gitignore

## System Architecture

### Backend Architecture

**Framework: Express.js**
- Chosen for its simplicity and minimal configuration requirements
- Provides straightforward routing and middleware support
- Well-suited for microservice architecture with single-purpose endpoints

**File Upload Handling: Multer**
- Middleware for handling multipart/form-data (file uploads)
- Configured to store uploaded files in the `uploads/` directory
- Provides access to file metadata without additional processing
- Alternative considered: Manual stream handling, but Multer offers better developer experience and built-in security

**CORS Configuration**
- Enabled for all origins to allow cross-origin requests
- Supports API consumption from different domains/frontends
- Configured at application level for simplicity

**Environment Configuration**
- Uses dotenv for environment variable management
- PORT configuration allows flexible deployment
- Defaults to port 3000 for local development

### Frontend Architecture

**Static HTML Interface**
- Single-page interface located in `views/index.html`
- Form-based file upload with multipart encoding
- Minimal CSS styling served from `public/style.css`
- No JavaScript framework - vanilla HTML for simplicity

**Static Asset Serving**
- Express static middleware serves public assets
- CSS and other static files served from `/public` route

### API Design

**Single Endpoint Architecture**
- POST `/api/fileanalyse` - Accepts file uploads via multipart form data
- Returns JSON response with file metadata: name, type (MIME), and size
- Error handling for missing file uploads

**Response Format**
```json
{
  "name": "filename.ext",
  "type": "mime/type",
  "size": 12345
}
```

### File Storage

**Temporary Storage Pattern**
- Files stored in `uploads/` directory
- No permanent storage or database integration
- Files serve temporary purpose for metadata extraction
- Consideration: In production, implement cleanup mechanism or streaming analysis to avoid disk space issues

### Error Handling

**Basic Validation**
- Checks for file presence in request
- Returns JSON error response when no file uploaded
- Additional validation could be added for file size limits or type restrictions

## External Dependencies

### NPM Packages

1. **express (^4.16.4)** - Web application framework
2. **multer (^2.0.2)** - File upload middleware
3. **cors (^2.8.5)** - Cross-Origin Resource Sharing enablement
4. **dotenv (^8.2.0)** - Environment variable management

### Runtime Environment

- **Node.js** - JavaScript runtime
- Server binds to `0.0.0.0` for accessibility in containerized/cloud environments
- No database or external API dependencies
- No authentication or external service integrations required