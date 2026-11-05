You are a Senior Next.js Developer and TypeScript Engineer working on my existing project:

`D:\Projects\learn-english-with-alaa`

I want you to implement the following changes directly in my existing codebase.

## IMPORTANT: PRESERVE THE EXISTING WORK

Before editing anything:

1. Inspect the current project structure and implementation.
2. Inspect the existing Tideglass Aura Gradient implementation, if already applied.
3. Inspect the current curriculum data layer, pages, components, and routes.
4. Inspect the actual JSON source files completely before making assumptions.

Do not recreate the website or replace existing components unnecessarily.

**Preserve the existing Tideglass Aura Gradient, branding, styling, responsive layouts, and working functionality.** Do not remove or overwrite the gradient while implementing these changes.

# 1. Update the Curriculum

Locate and inspect:

`src/data/english_course_all_levels.json`

If it is located elsewhere, find the correct existing file.

Use this file as the source of truth for the website's course curriculum.

Requirements:

* Integrate the complete available curriculum for CEFR levels A1, A2, B1, B2, C1, and C2.
* Include all available units, lessons, topics, subtopics, grammar explanations, vocabulary, translations, examples, exercises, phrasal verbs, and other educational fields.
* Inspect and update `src/data/curriculum.ts`, its TypeScript types, and all related data-loading logic.
* Preserve the source content and structure as much as possible.
* Do not summarize, shorten, invent, or silently skip curriculum content.
* Resolve incompatible structures, duplicate IDs, and missing values carefully.
* Do not delete existing useful grammar lessons or other curriculum content.

# 2. Integrate All Vocabulary

Use this file as the source of truth for vocabulary:

`src/data/vocab.json`

If the file is elsewhere, locate it.

Read and inspect the complete file before modifying the integration.

Import all vocabulary entries into the curriculum data layer.

## CEFR assignment

Assign vocabulary using the CEFR information explicitly provided in the source.

* A1
* A2
* B1
* B2
* C1
* C2

Do not guess missing levels.

If a level is missing, invalid, or ambiguous, place the entry in a clearly identified unassigned collection and explain why.

Preserve any existing vocabulary classification and metadata.

## Preserve all vocabulary fields

Preserve all available information, including:

* Words and expressions.
* Translations.
* Definitions.
* Parts of speech.
* Examples.
* Pronunciation and phonetic transcription.
* Synonyms and antonyms.
* Word forms.
* Topics and categories.
* Units and lesson associations.
* CEFR levels.
* Other educational fields present in the source.

Do not discard unknown fields.

If the same word appears with different meanings, parts of speech, examples, or classifications, preserve the distinct records.

Do not merge different senses incorrectly.

Avoid duplicate imports and ensure that running the integration process again does not multiply entries.

Do not modify the original `vocab.json`.

# 3. Curriculum Data Architecture

Inspect the existing data structures and decide on the safest maintainable approach.

Prefer a strongly typed data layer that allows the website to consume the existing JSON sources without unnecessary duplication.

Update:

* `curriculum.ts`
* Curriculum interfaces and types.
* Vocabulary types.
* Data-loading utilities.
* Level and lesson data access functions.
* Any related components that depend on the old structures.

Preserve compatibility with the existing Next.js App Router implementation.

Do not weaken TypeScript or disable lint rules.

If the website cannot represent some source fields, extend its data model instead of dropping them.

# 4. Display the Curriculum and Vocabulary

Ensure the website actually consumes the updated data.

## Level pages

Display the correct units and lessons for each available CEFR level.

Make vocabulary accessible from its corresponding level.

Preserve the current design and layout.

## Lesson pages

Display the actual content associated with the selected lesson.

Where applicable, display:

* Vocabulary.
* Grammar.
* Syntax.
* Translations.
* Examples.
* Exercises.
* Lesson quizzes.
* Other educational material available in the source.

Use actual lesson associations when provided.

Do not invent lesson associations for vocabulary without them.

Vocabulary without lesson associations should remain accessible from the appropriate level's vocabulary section.

## Preserve existing functionality

Maintain:

* Lesson navigation.
* Quiz functionality.
* Quiz scoring and feedback.
* Progress tracking.
* Existing routing.
* Responsive layouts.
* Existing useful components.

Ensure all available levels and lessons can be accessed through the existing routing system.

# 5. English-Only Website Interface

Keep the entire website interface English-only and LTR.

Check:

* Navigation.
* Buttons.
* Headings.
* Menus.
* Forms.
* Error messages.
* Notifications.
* Accessibility labels.
* System messages.

Remove language-switching functionality and Arabic interface elements if present.

Set the appropriate English document language and LTR direction.

**Critical:** Do not delete Arabic translations or any other educational translation data. English-only applies to the website interface, not the learning content.

Keep translations available wherever they are part of lessons or vocabulary.

# 6. Preserve the Tideglass Aura Gradient

The gradient implementation must remain intact.

Preserve its existing:

* Colors.
* Gradient layers.
* Blur values.
* Blend modes.
* Grain texture.
* Opacity.
* Layering.
* Responsive behavior.

Do not add duplicate background components or apply the gradient multiple times.

Check the shared layout and ensure that the gradient remains visible consistently on:

* Homepage.
* Level pages.
* Lesson pages.
* Vocabulary sections.
* Other existing routes.

Ensure content appears above the background layers and remains readable.

Do not change the gradient specification unnecessarily.

# 7. Data Integrity and Verification

Create or update a repeatable validation script if appropriate.

Compare the original source files with the integrated data.

For vocabulary, report:

* Total source records.
* Successfully integrated records.
* Counts for A1, A2, B1, B2, C1, and C2.
* Unassigned records.
* Unresolved records.
* Duplicate records.
* Distinct meanings preserved.
* Missing or invalid classifications.
* Entries that could not be integrated.

For the curriculum, report:

* Available CEFR levels.
* Units per level.
* Lessons per level.
* Total integrated lessons.
* Missing entries.
* Duplicate IDs.
* Unresolved structural problems.

Use actual data and measured counts.

Compare records using appropriate identifiers or deterministic keys, not word counts alone.

Verify that:

1. No source vocabulary entry was silently lost.
2. Translation data remains preserved.
3. Existing grammar lessons remain available.
4. No duplicate entries were introduced.
5. Repeating the import or normalization process does not create duplicates.
6. The updated pages actually display the integrated content.

# 8. Testing

Run:

`npm.cmd run lint`

Then:

`npm.cmd run build`

Fix issues introduced by your changes.

Do not suppress errors, disable lint rules, or weaken type safety.

Distinguish pre-existing failures from new failures.

Test representative lessons from different CEFR levels and inspect their actual content.

Verify:

* Level navigation.
* Lesson navigation.
* Vocabulary display.
* Translation display.
* Quizzes.
* Progress tracking.
* Responsive layouts.
* English-only interface.
* Tideglass Aura Gradient appearance.

If browser testing is unavailable, state that clearly instead of claiming visual verification.

# 9. Final Report

When finished, report:

1. Files created.
2. Files modified.
3. Files removed, if any, and why.
4. How curriculum data is loaded.
5. How vocabulary is organized and displayed.
6. Vocabulary counts by CEFR level.
7. Total source and imported vocabulary entries.
8. Unassigned and unresolved entries.
9. Curriculum units and lessons per level.
10. Whether source content and translations were preserved.
11. Whether the English-only interface was verified.
12. Whether the gradient was preserved.
13. Lint results.
14. Build results.
15. Actual functionality test results.
16. Remaining issues.

Do not report unverified success.

Start by inspecting the existing project and source files. Implement the changes directly, preserve the current design and gradient, run the checks, and finish with the report.
