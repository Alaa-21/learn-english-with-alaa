# Supabase Authentication & Backend Setup Guide

This guide details how to set up the Supabase backend, database migrations, Google OAuth, and Vercel environment variables for **Learn English with Alaa**.

---

## 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign in.
2. Click **New Project**.
3. Fill in your project details (Name, Database Password, Region).
4. Wait for the database provisioning to complete.

---

## 2. Get API Credentials

1. In your Supabase Dashboard, go to **Project Settings** > **API**.
2. Copy your:
   - **Project URL** (`NEXT_PUBLIC_SUPABASE_URL`)
   - **Anon / Public key** (`NEXT_PUBLIC_SUPABASE_ANON_KEY`)
3. Create a `.env.local` file in the root of your project:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

---

## 3. Run Database Migrations

1. Go to your Supabase Dashboard > **SQL Editor**.
2. Open the migration script located at `supabase/migrations/01_init.sql` in your project repository.
3. Copy its contents and paste them into the Supabase SQL Editor.
4. Click **Run** to create the tables (`profiles`, `user_progress`, `lesson_progress`), RLS policies, and the automatic profile creation trigger.

---

## 4. Configure Google OAuth (Google Cloud Console)

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (e.g., `Learn English with Alaa`).
3. Navigate to **APIs & Services** > **OAuth consent screen**:
   - Choose **External** and fill in your app name, support email, and developer contact info.
4. Navigate to **Credentials** > **Create Credentials** > **OAuth client ID**:
   - Application type: **Web application**.
   - Authorized JavaScript origins: `https://your-project-id.supabase.co`
   - Authorized redirect URIs: `https://your-project-id.supabase.co/auth/v1/callback`
5. Copy your **Client ID** and **Client Secret**.

---

## 5. Configure Google Provider in Supabase

1. Go to Supabase Dashboard > **Authentication** > **Providers** > **Google**.
2. Enable Google.
3. Enter your Google **Client ID** and **Client Secret**.
4. Copy the **Redirect URL (Callback URL)** provided by Supabase and ensure it matches Google Cloud Console.
5. Click **Save**.

---

## 6. Configure Supabase Redirect URLs

1. In Supabase Dashboard > **Authentication** > **URL Configuration**:
   - **Site URL**: `https://your-vercel-domain.vercel.app` (or `http://localhost:3000` for local dev).
   - **Redirect URLs**: Add your production and local callback URLs:
     - `http://localhost:3000/auth/callback`
     - `https://your-vercel-domain.vercel.app/auth/callback`

---

## 7. Add Environment Variables to Vercel

1. Go to your Vercel Project Dashboard > **Settings** > **Environment Variables**.
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anon Key
3. Redeploy your project.

---

## 8. Testing Local Development

1. Run `npm run dev` (or `cmd /c npm run dev`).
2. Navigate to `http://localhost:3000/signup` to register a new account or sign in with Google.
3. Verify that your profile is created and you are redirected to the `/dashboard`.
