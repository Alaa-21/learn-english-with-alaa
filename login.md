Act as a Senior Full-Stack Engineer, Backend Architect, Database Engineer, and Application Security Specialist.

I want you to implement a complete backend authentication system for my existing project:

**Project:** Learn English with Alaa  
**Framework:** Next.js App Router, TypeScript, Tailwind CSS  
**Deployment:** Vercel  
**Backend recommendation:** Supabase (PostgreSQL + Supabase Authentication)

Your task is to inspect the existing project and implement a production-ready authentication system.

Do not create a separate demo project. Work directly inside the existing application.

# 1. Inspect the Existing Project

Before making changes:

- Inspect the complete project structure.
- Identify the current Next.js version and architecture.
- Review existing routes, layouts, components, and styling.
- Identify how user progress and learning data are currently stored.
- Check whether authentication or database packages are already installed.
- Identify any existing environment variables.

Do not overwrite existing functionality.

# 2. Backend and Database

Use Supabase as the primary backend unless the project already has a suitable backend that should be retained.

Set up:

- Supabase PostgreSQL database.
- Supabase Authentication.
- Secure session management.
- Server-side authentication utilities.
- Database migrations.
- Row Level Security (RLS).

Create an appropriate database structure.

### Users / Profiles Table

Create a profiles table connected to Supabase Auth users.

Suggested fields:

- id (UUID, linked to auth.users)
- full_name
- email
- avatar_url
- preferred_language
- current_cefr_level
- created_at
- updated_at

The authentication provider should manage passwords and authentication credentials. Never store plaintext passwords or create your own password storage system.

### Learning Progress Tables

Prepare a database structure for personalized learning.

Consider:

**user_progress**
- user_id
- completed_lessons
- completed_quizzes
- total_points
- current_level
- updated_at

**lesson_progress**
- id
- user_id
- lesson_id
- completion_status
- quiz_score
- completed_at

Adapt the schema to the existing curriculum and progress-tracking architecture. Avoid duplicating existing data unnecessarily.

### Database Security

Implement Row Level Security.

Requirements:

- Users can only read their own private profile and learning progress.
- Users can only modify their own permitted records.
- Users cannot access another user's private information.
- Never expose Supabase service-role credentials in browser code.
- Validate data on both client and server where appropriate.

# 3. Registration Page

Create a professional registration page.

Route:

`/signup`

Include:

- Full name.
- Email address.
- Password.
- Confirm password.
- Show/hide password.
- Password strength indicator.
- Terms and Privacy Policy acceptance.
- Create Account button.
- Continue with Google button.
- Link to the login page.

Validation:

- Validate email format.
- Enforce reasonable password requirements.
- Ensure both passwords match.
- Display clear validation messages.
- Prevent duplicate submissions.
- Show loading states.

After registration:

- Create the Supabase Auth account.
- Create the user's profile using a secure server-side or database-triggered process.
- Support email verification.
- Display a clear verification message.
- Redirect the user appropriately after successful verification.

# 4. Login Page

Create a professional login page.

Route:

`/login`

Include:

- Email address.
- Password.
- Show/hide password.
- Remember session functionality.
- Forgot password link.
- Login button.
- Continue with Google button.
- Link to registration.

Requirements:

- Authenticate using Supabase Auth.
- Display meaningful error messages.
- Handle invalid credentials.
- Handle unverified email accounts.
- Prevent repeated submissions.
- Persist authenticated sessions securely.
- Redirect authenticated users to the application.

# 5. Google Authentication

Google authentication is mandatory as an additional sign-in method.

Implement:

**Continue with Google**

Use Supabase OAuth with Google.

Requirements:

1. Integrate Google OAuth with Supabase.
2. Implement the OAuth authorization flow.
3. Handle the authentication callback.
4. Create or update the user's profile after successful Google authentication.
5. Retrieve the user's name, email, and profile picture where available.
6. Handle cancellation and authentication errors.
7. Maintain the authenticated session after redirect.
8. Support both new Google registrations and returning Google users.

Do not implement a fake Google button.

Do not use hardcoded credentials.

Prepare the application for real Google OAuth configuration through Google Cloud Console and Supabase.

# 6. Mandatory Authentication

Login or registration must be required before accessing the learning platform.

Unauthenticated visitors must not be able to access protected application routes.

Implement protection for:

- CEFR level pages.
- Individual lesson pages.
- Vocabulary learning pages.
- Quizzes.
- User progress.
- Personalized learning features.
- Any other private learning routes.

Requirements:

- Redirect unauthenticated visitors to `/login`.
- Preserve the originally requested URL so users can return to it after logging in.
- Prevent authenticated users from repeatedly accessing login and registration pages unnecessarily.
- Validate authentication on the server, not just by hiding frontend components.
- Protect sensitive database operations independently using RLS.

Keep authentication pages accessible without requiring an existing session.

The public landing page may remain accessible if appropriate, but all actual learning functionality must require authentication.

# 7. User Dashboard

Create or prepare a personalized dashboard.

Display:

- Welcome message using the user's name.
- Profile picture.
- Current CEFR level.
- Learning progress.
- Completed lessons.
- Quiz results.
- Total points, if supported by the existing application.

Use real authenticated user data.

Do not use hardcoded sample statistics.

Connect existing learning progress to the database where appropriate.

# 8. User Profile and Account Management

Create a profile/settings page.

Allow users to:

- View their account information.
- Update their name.
- Update their profile picture if supported.
- View their email address.
- Sign out.
- Change their password through a secure supported flow.
- Request account deletion.

Account deletion must be handled securely on the server.

# 9. Authentication Design

The authentication pages must feel like part of Learn English with Alaa.

Design requirements:

- Premium, modern, educational design.
- Preserve the existing Tideglass Aura Gradient.
- Preserve the existing typography and design system.
- Responsive on desktop, tablet, and mobile.
- Consistent buttons, forms, borders, and spacing.
- Elegant focus and hover states.
- Subtle GSAP animations where appropriate.
- Respect reduced-motion preferences.

The pages should look professional, not like generic authentication templates.

# 10. Technical Architecture

Use the appropriate Supabase integration for the installed Next.js version.

Prefer:

- `@supabase/supabase-js`
- `@supabase/ssr`

Implement reusable utilities for:

- Browser Supabase client.
- Server Supabase client.
- Authentication checks.
- Session handling.
- Protected route access.

Use secure cookies and the currently recommended Next.js server-side authentication pattern.

Avoid deprecated authentication implementations.

Keep server and client components separated appropriately.

Use TypeScript strictly. Avoid `any`.

# 11. Environment Variables

Prepare `.env.example` containing the required variable names.

For example:

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

Use the appropriate publishable key format recommended by the installed Supabase setup.

Never commit actual credentials.

Update `.gitignore` to protect environment files.

Create a detailed setup guide explaining:

1. How to create a Supabase project.
2. Where to find the project URL and public key.
3. How to run database migrations.
4. How to configure Google OAuth.
5. How to configure Google Cloud Console.
6. How to configure Supabase redirect URLs.
7. How to add environment variables to Vercel.
8. How to test registration and login locally.
9. How to test Google authentication in production.

Do not pretend that Google OAuth is operational until the actual credentials and redirect URLs have been configured and tested.

# 12. Preserve Existing Application

This is extremely important.

Do not remove or damage:

- CEFR curriculum A1–C2.
- Existing vocabulary.
- Arabic translations.
- Grammar and syntax lessons.
- Quizzes.
- Pronunciation functionality.
- GSAP animations.
- Mouse effects.
- Parallax effects.
- Back-to-top button.
- Tideglass Aura Gradient.
- Existing navigation and responsive layouts.

Do not modify unrelated functionality.

If existing learning progress is stored locally, investigate how to migrate or synchronize it safely without losing existing user data.

# 13. Testing and Production Readiness

After implementation:

- Test registration.
- Test email verification.
- Test email/password login.
- Test Google OAuth flow.
- Test logout.
- Test protected routes.
- Test session persistence after refresh.
- Test expired sessions.
- Test database permissions.
- Test profile creation.
- Test responsive authentication pages.

Run:

`npm.cmd run lint`

`npm.cmd run build`

Fix all errors introduced by your changes.

# 14. Final Report

When finished, provide:

1. Complete list of created files.
2. Complete list of modified files.
3. Database schema and relationships.
4. Authentication architecture.
5. Google OAuth configuration instructions.
6. Environment variables required.
7. Supabase setup instructions.
8. Vercel configuration instructions.
9. Features fully implemented.
10. Features requiring my external credentials or manual configuration.
11. Lint and production build results.

IMPORTANT:

Implement the actual backend, database integration, and authentication functionality.

Do not stop after designing the login and registration interfaces.

Do not use mock authentication or fake user data.

Do not claim that Google authentication works until it has been configured with real credentials and tested.

Work carefully and preserve the existing project.