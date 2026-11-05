Act as a Senior Frontend Developer and GSAP Animation Engineer specializing in Next.js, React, TypeScript, and interactive educational platforms.

Project: Learn English with Alaa
Directory: D:\Projects\learn-english-with-alaa

I want to implement four improvements directly into my existing website:

1. Interactive mouse effects.
2. GSAP parallax scrolling.
3. A floating Back-to-Top button at the bottom of the page.
4. English audio pronunciation for every word in the Level Vocabulary (500 Words) section.

Inspect the existing implementation before editing. Reuse existing components and preserve all current functionality.

# 1. Interactive Mouse Effects

Create a subtle, premium mouse interaction system using GSAP.

### Custom cursor / mouse follower

- Add a small, elegant cursor follower on desktop.
- The follower should smoothly track mouse movement.
- Add subtle scaling when hovering over interactive elements.
- Provide visual feedback when hovering over buttons, links, vocabulary cards, and level cards.
- Use smooth GSAP interpolation rather than directly updating React state on every mouse movement.
- Keep the normal cursor visible unless the custom cursor is fully functional.

### Interactive background

- Add a subtle mouse-responsive parallax effect to decorative background elements.
- The existing Tideglass Aura Gradient may respond very slightly to mouse movement.
- Avoid animating expensive blur filters continuously.
- Keep the effect subtle and elegant.

### Restrictions

- Disable custom cursor effects on touch devices.
- Respect prefers-reduced-motion.
- Do not interfere with text selection, links, buttons, or accessibility.
- Avoid excessive GPU usage.

# 2. GSAP Parallax Scrolling

Add meaningful parallax effects throughout the website.

### Homepage

- Hero decorative elements should move at different speeds while scrolling.
- Add subtle depth to the background.
- Level cards can have slight scroll-based movement.
- Avoid excessive movement of text and essential content.

### Level Pages

- Add subtle parallax to decorative elements and section backgrounds.
- Introduce smooth scroll-triggered content reveals.
- Maintain readability and avoid layout shifts.

### Lesson Pages

- Use subtle parallax for decorative elements.
- Reveal lesson sections smoothly as they enter the viewport.
- Animate vocabulary, grammar, and exercise sections with staggered entrances.

### Technical implementation

- Use GSAP ScrollTrigger.
- Register plugins correctly.
- Use useGSAP() from @gsap/react.
- Scope animations to their components.
- Clean up ScrollTriggers and animations correctly.
- Avoid duplicate triggers during React Strict Mode.
- Avoid animating large numbers of elements simultaneously.

Do not force smooth scrolling if it interferes with accessibility or browser navigation.

# 3. Back-to-Top Button

Create a reusable BackToTop component.

### Behavior

- The button should appear after the user scrolls down approximately 400–500 pixels.
- Position it in the bottom-right corner.
- Give it a circular, modern design.
- Use an elegant upward arrow icon.
- Use the existing website visual identity and Tideglass Aura Gradient colors.
- Add a subtle hover animation and click feedback.
- When clicked, smoothly scroll to the top of the page.
- Hide the button when the user is already near the top.
- Make it responsive on desktop and mobile.

### GSAP animation

- Fade and slide the button into view.
- Animate its entrance and disappearance.
- Use GSAP for the transitions.
- Avoid unnecessary React re-renders.

### Accessibility

- Add aria-label="Back to top".
- Support keyboard interaction.
- Respect prefers-reduced-motion.
- Ensure it does not cover important mobile content.

Place this component in the shared layout so it is available throughout the website.

# 4. English Word Pronunciation — Level Vocabulary (500 Words)

This is particularly important.

Inspect the existing Level Vocabulary (500 Words) component and its actual vocabulary data structure.

I want users to be able to listen to the correct English pronunciation of every vocabulary word.

### User experience

Add a small speaker button next to each English word.

When clicked:

- Play the English pronunciation of that word.
- Use a clear, natural English voice.
- Prefer a US English voice by default.
- If unavailable, use another suitable English voice.
- Prevent overlapping audio when a user clicks another word.
- Provide a visual indication while pronunciation is playing.
- Allow users to replay the pronunciation.

### Technology

First inspect whether the project already has a pronunciation or audio service.

If no external pronunciation service exists, implement the browser Web Speech API using:

`speechSynthesis`

Use:

- SpeechSynthesisUtterance.
- speechSynthesis.getVoices().
- An appropriate English voice.
- `en-US` as the default language.
- An appropriate natural speaking rate, around 0.85–0.95.

Do not require API keys or paid services.

Do not install unnecessary audio libraries.

### Important pronunciation requirements

- Pronounce the English vocabulary word, not its Arabic translation.
- Preserve the original spelling.
- Handle multi-word expressions.
- Handle punctuation appropriately.
- Do not pronounce definitions or examples when the speaker button is clicked.
- Ensure that clicking the speaker does not navigate to another page or trigger the vocabulary card's click event.
- Handle browsers where speech synthesis is unavailable.
- Handle voices loading asynchronously.
- Stop previous speech before starting a new word.

### UI design

The speaker button should:

- Be small and unobtrusive.
- Match the existing design.
- Have a subtle hover effect.
- Display an appropriate speaker icon.
- Show a playing state.
- Be keyboard accessible.

Add a tooltip such as "Listen to pronunciation".

Do not add audio buttons to unrelated interface elements.

### Data integrity

Do not modify or remove vocabulary entries.

Do not change CEFR classifications, translations, meanings, examples, or other educational information.

The pronunciation feature must work with the existing vocabulary records.

# 5. Shared Animation Architecture

Inspect the existing GSAP implementation before adding anything.

If GSAP and @gsap/react are already installed, reuse them.

Avoid:

- Installing duplicate packages.
- Registering plugins repeatedly.
- Creating multiple global mouse listeners.
- Duplicating animation components.
- Adding unnecessary client components.
- Animating expensive CSS filters continuously.

Create reusable components where appropriate, such as:

- MouseFollower
- BackToTop
- ParallaxSection
- VocabularyPronunciation

Use TypeScript with proper types.

Keep server components wherever possible.

Only use client components where browser interaction requires them.

# 6. Preserve Existing Website Design

Do not redesign the website.

Preserve:

- Tideglass Aura Gradient.
- Existing branding.
- Typography.
- Color palette.
- Theme functionality.
- Navigation.
- Curriculum.
- Vocabulary.
- Lesson pages.
- Quizzes.
- Progress tracking.
- Responsive layouts.

All new effects should complement the existing visual identity.

# 7. Testing

After implementation:

1. Run `npm.cmd run lint`.
2. Run `npm.cmd run build`.
3. Fix errors introduced by your changes.
4. Test mouse effects on desktop.
5. Verify touch-device behavior.
6. Test parallax scrolling.
7. Test Back-to-Top on homepage, level pages, and lesson pages.
8. Test pronunciation on multiple vocabulary entries.
9. Test multiple consecutive speaker clicks.
10. Test browsers without available speech synthesis.
11. Test keyboard accessibility.
12. Verify reduced-motion behavior.

If browser testing is available, inspect the actual pages and interactions.

Do not claim visual or audio testing was completed unless it actually was.

# 8. Final Report

Report:

- Files created.
- Files modified.
- Mouse effects implemented.
- Parallax sections implemented.
- Back-to-Top functionality.
- Pronunciation implementation and browser compatibility.
- Any limitations of browser-generated pronunciation.
- Accessibility considerations.
- Lint results.
- Build results.
- Remaining issues.

Implement everything directly in the existing project. Do not stop at a plan.
