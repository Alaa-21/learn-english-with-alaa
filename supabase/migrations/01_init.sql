-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles Table
create table public.profiles (
  id uuid references auth.users on delete cascade not primary key,
  full_name text,
  email text,
  avatar_url text,
  preferred_language text default 'en',
  current_cefr_level text default 'A1',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add primary key constraint explicitly
alter table public.profiles add constraint profiles_pkey primary key (id);

-- 2. User Progress Table
create table public.user_progress (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  completed_lessons text[] default '{}'::text[],
  completed_quizzes text[] default '{}'::text[],
  total_points integer default 0,
  current_level text default 'A1',
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Lesson Progress Table
create table public.lesson_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  lesson_id text not null,
  completion_status text default 'in_progress',
  quiz_score integer default 0,
  completed_at timestamp with time zone,
  unique(user_id, lesson_id)
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.lesson_progress enable row level security;

-- RLS Policies for Profiles
create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can insert their own profile." on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on public.profiles
  for update using (auth.uid() = id);

-- RLS Policies for User Progress
create policy "Users can view own progress." on public.user_progress
  for select using (auth.uid() = user_id);

create policy "Users can insert own progress." on public.user_progress
  for insert with check (auth.uid() = user_id);

create policy "Users can update own progress." on public.user_progress
  for update using (auth.uid() = user_id);

-- RLS Policies for Lesson Progress
create policy "Users can view own lesson progress." on public.lesson_progress
  for select using (auth.uid() = user_id);

create policy "Users can insert own lesson progress." on public.lesson_progress
  for insert with check (auth.uid() = user_id);

create policy "Users can update own lesson progress." on public.lesson_progress
  for update using (auth.uid() = user_id);

-- Function and Trigger to automatically create profile and user_progress on signup
create or function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, email, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.email,
    new.raw_user_meta_data ->> 'avatar_url'
  );

  insert into public.user_progress (user_id, completed_lessons, completed_quizzes, total_points, current_level)
  values (new.id, '{}', '{}', 0, 'A1');

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
