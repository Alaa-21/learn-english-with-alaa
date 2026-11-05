Act as a Senior Frontend Animation Engineer specializing in GSAP, React, Next.js, and premium interactive web experiences.

Project: Learn English with Alaa

Directory: D:\Projects\learn-english-with-alaa

I want you to implement a cohesive, premium animation system using GSAP throughout my existing website.

IMPORTANT: Inspect the actual project before making changes. Implement animations directly into the existing components. Do not create a separate demo or redesign the website.

## 1. Animation Direction

The animation style should feel:

- Premium.
- Smooth.
- Modern.
- Elegant.
- Subtle.
- Responsive.
- Professional.

Take inspiration from modern SaaS websites and premium educational platforms.

Avoid excessive movement, distracting effects, unnecessary bouncing, and animations that make the website feel slow.

The existing Tideglass Aura Gradient must remain intact.

## 2. GSAP Installation

Inspect package.json first.

If GSAP is not installed, install:

- gsap
- @gsap/react

Use the official useGSAP() hook for React components.

Register plugins correctly.

Use scoped animations and proper cleanup.

Do not install unnecessary animation libraries.

## 3. Homepage Animations

Implement a coordinated entrance timeline:

- Main heading: smooth fade and upward reveal.
- Subtitle: fade in with a slight delay.
- Primary and secondary buttons: staggered entrance.
- Hero decorative elements: subtle movement.
- Level cards: staggered reveal when entering the viewport.

The animation should feel smooth and intentional.

## 4. Level Cards

Apply:

- Staggered entrance using ScrollTrigger where appropriate.
- Slight upward movement on hover.
- Subtle scale transition.
- Border and shadow transitions.
- Smooth interaction feedback.

Do not interfere with card navigation or click events.

## 5. Lesson Pages

Animate:

- Lesson title.
- Lesson description.
- Vocabulary sections.
- Grammar sections.
- Syntax sections.
- Exercise sections.
- Quiz sections.

Use staggered reveals for lists and cards.

Use ScrollTrigger for content that enters the viewport.

Avoid triggering animations repeatedly when unnecessary.

## 6. Vocabulary and Grammar

Vocabulary entries should appear with a subtle staggered animation.

Grammar sections should reveal smoothly.

Preserve translations and all educational content.

Do not delay access to important learning information.

## 7. Quiz Animations

Implement subtle transitions for:

- Question changes.
- Answer selection.
- Correct and incorrect feedback.
- Score updates.
- Quiz completion.

Preserve all existing quiz logic, scoring, and progress tracking.

Animations must never interfere with answering questions.

## 8. Navigation and Buttons

Add subtle transitions to:

- Navigation menus.
- Dropdowns.
- Mobile navigation.
- Buttons.
- Interactive cards.

Preserve keyboard accessibility and existing navigation functionality.

## 9. Tideglass Aura Gradient

Preserve the existing gradient exactly.

You may introduce extremely subtle ambient movement if it improves the appearance.

Do not continuously animate expensive blur filters or create unnecessary GPU load.

Do not duplicate the gradient background.

## 10. Technical Requirements

This project uses Next.js App Router, React, and TypeScript.

Follow these requirements:

- Keep GSAP browser-only.
- Never access window or document during server rendering.
- Use useGSAP() with scoped refs.
- Clean up animations and ScrollTriggers properly.
- Avoid duplicate animations during React Strict Mode.
- Avoid unnecessary client components.
- Avoid layout shifts.
- Do not hide essential content before JavaScript loads.
- Respect prefers-reduced-motion.
- Ensure mobile performance.
- Avoid animating large amounts of DOM elements simultaneously.

Use transform and opacity for most animations.

Use ScrollTrigger only where it adds meaningful value.

## 11. Preserve Existing Functionality

Do not break:

- Curriculum loading.
- CEFR level pages.
- Lesson routes.
- Vocabulary.
- Grammar.
- Translations.
- Quizzes.
- Progress tracking.
- Responsive layouts.
- Theme functionality.
- Existing gradient implementation.

Do not change educational content.

## 12. Verification

After implementation:

1. Run npm.cmd run lint.
2. Run npm.cmd run build.
3. Fix errors introduced by the animations.
4. Verify dynamic routes.
5. Verify animation cleanup.
6. Verify reduced-motion behavior.
7. Check desktop and mobile layouts.
8. Confirm that animations do not interfere with navigation, quizzes, or learning.

## Final Report

Report:

- Packages installed.
- Files created or modified.
- Animations implemented by page and component.
- ScrollTrigger usage.
- Accessibility and reduced-motion implementation.
- Performance considerations.
- Lint results.
- Build results.
- Any remaining issues.

Implement the animations directly into the existing project. Do not stop at a plan.
