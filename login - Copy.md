Act as a senior full-stack engineer, Next.js architect, Supabase database administrator, and authentication specialist.

I want you to take ownership of completing the entire backend and authentication integration for my project, Learn English with Alaa.

Do not just explain what needs to be done. Inspect the project, implement everything possible, configure the integration, test it, and guide me through any external authorization steps that require my intervention.

## 1. Existing project information

Project directory:
D:\Projects\learn-english-with-alaa

Technology:

- Next.js 16.4.3
- React 19
- TypeScript
- Tailwind CSS v4
- Supabase

Supabase Project Reference:
dmwopcmhsmaztfshhlbb

Supabase Project URL:
https://dmwopcmhsmaztfshhlbb.supabase.co

Supabase API key:
I have created a modern Supabase publishable key beginning with sb*publishable*.

IMPORTANT:
Never request, display, log, or expose my Supabase secret key.
Never hardcode credentials in source code.

## 2. First: Audit the existing project

Before changing anything:

- Inspect the complete project structure.
- Inspect existing authentication components.
- Inspect Supabase configuration.
- Inspect environment variables.
- Inspect middleware.ts or proxy.ts.
- Inspect existing database types and migrations.
- Inspect existing login and signup pages.
- Identify all broken or incomplete implementations.

Do not overwrite working functionality unnecessarily.

## 3. Supabase connection

Complete the Supabase integration.

- Configure the correct project URL.
- Support modern Supabase publishable keys.
- Use @supabase/ssr and @supabase/supabase-js appropriately.
- Create reusable browser and server Supabase clients.
- Implement secure session management using the conventions supported by my installed Next.js version.
- Implement cookie handling and session refresh.
- Remove every placeholder URL and configuration.
- Validate environment variables.
- Ensure .env.local is excluded from Git.

If credentials are missing, identify exactly which ones and ask me to enter them securely through the appropriate local configuration or dashboard. Never fabricate credentials.

## 4. Complete database implementation

Create and apply the necessary Supabase database migrations.

Create a profiles table connected to auth.users.

Include:

- id
- full_name
- email
- avatar_url
- preferred_language
- current_cefr_level
- created_at
- updated_at

Create the necessary tables for:

- User learning progress.
- Lesson completion.
- Quiz attempts and results.
- Learning statistics.
- User preferences.

Inspect the existing curriculum and data structure before designing relationships.

Requirements:

- UUID primary keys.
- Foreign keys.
- Appropriate indexes.
- Timestamps.
- Data integrity constraints.
- Row Level Security.
- Policies that prevent users from accessing other users' private data.

Make migrations repeatable and maintainable.

If database access requires authorization, guide me through the minimum necessary step.

## 5. Complete authentication

Implement fully working:

### Signup

- Full name.
- Email.
- Password.
- Confirm password.
- Password visibility toggle.
- Password validation.
- Email verification.
- Google signup.
- Useful error messages.

### Login

- Email.
- Password.
- Remember session.
- Forgot password.
- Google login.
- Persistent authentication.

### Google OAuth

Implement the complete OAuth flow using Supabase Auth.

Handle:

- OAuth initiation.
- Google consent screen.
- Callback route.
- Session exchange.
- Profile creation and updates.
- Redirect after successful authentication.
- Cancelled authentication.
- Failed authentication.
- Missing configuration.

Do not create fake Google login functionality.

If Google Cloud Console requires my Client ID or Client Secret, guide me through obtaining and entering them. Never invent credentials.

## 6. Route protection

Protect all learning features that require authentication.

Unauthenticated users should be redirected to login.

Preserve the requested destination and return users to it after successful login.

Implement server-side authorization and database RLS.

Do not rely exclusively on client-side route protection.

Keep the public landing page accessible if that matches the existing application design.

## 7. User dashboard

Build a functional dashboard using actual database information.

Display:

- User profile.
- Current CEFR level.
- Completed lessons.
- Quiz results.
- Learning progress.
- Statistics.

Do not use fake statistics or hardcoded user information.

## 8. Account management

Implement:

- Profile editing.
- Avatar updates.
- Password reset.
- Sign out.
- Session expiration handling.
- Secure account deletion.

## 9. Preserve my existing website

This is extremely important.

Do not redesign or remove existing features.

Preserve:

- Tideglass Aura Gradient background.
- Existing GSAP animations.
- Custom cursor.
- Mouse interaction effects.
- Parallax.
- Back-to-top button.
- Vocabulary pronunciation.
- CEFR curriculum from A1 to C2.
- Vocabulary content.
- Arabic translations.
- Lessons and quizzes.
- Responsive design.
- Existing visual identity.

The English interface must remain English and LTR, while educational translations must remain intact.

## 10. Testing

After implementation:

Run:

npm.cmd run lint

npm.cmd run build

Fix all errors.

Verify:

- Supabase connection.
- Signup.
- Login.
- Google OAuth.
- Callback handling.
- Session persistence.
- Sign out.
- Protected routes.
- Database writes.
- RLS policies.

Do not claim something works unless you have actually tested it.

## 11. Vercel preparation

Prepare the project for deployment.

- Identify required production environment variables.
- Create or update .env.example without real credentials.
- Verify production build.
- Explain the necessary Vercel environment configuration.
- Identify OAuth redirect URLs for production and local development.

## 12. Final report

When finished, provide:

1. What you inspected.
2. What you implemented.
3. Database tables and policies created.
4. Authentication features completed.
5. Files created or modified.
6. Tests performed and their results.
7. Any remaining external configuration.
8. Exact steps I need to complete manually, if any.

IMPORTANT WORKING RULES:

- Do the actual implementation, not just provide instructions.
- Do not skip tasks silently.
- Do not break existing functionality.
- Do not remove existing features to make the build pass.
- Do not expose secrets.
- Ask me for authorization only when an external action genuinely requires it.
- Work systematically until the integration is complete.

## 13. Google OAuth – Complete Setup

Google authentication has NOT been configured in my Supabase project yet.

I want you to handle the entire setup process as far as technically possible.

### Supabase configuration

1. Inspect my existing Supabase authentication configuration.
2. Identify the correct Google OAuth provider settings.
3. Prepare the required callback URL.
4. Enable Google authentication once the required credentials are available.
5. Configure the correct local and production redirect URLs.

### Google Cloud Console

Guide me through creating:

- A Google Cloud project, if necessary.
- OAuth consent screen.
- OAuth Client ID.
- OAuth Client Secret.
- Authorized redirect URI.

Use the exact callback URL provided by my Supabase project.

### Security

- Never invent OAuth credentials.
- Never expose the Client Secret.
- Never commit credentials to GitHub.
- Store credentials securely.
- Never claim Google login is operational until it has been tested successfully.

### Important

If you can access the required external services through an authorized integration, complete the configuration yourself.

Otherwise, pause only when my authorization or manual input is required. Give me one clear step at a time, then continue the configuration.

My goal is a fully functional Google login and signup system, not a demonstration or mockup.
