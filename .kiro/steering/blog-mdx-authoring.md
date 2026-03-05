---
inclusion: fileMatch
fileMatchPattern: 'data/blog/*.mdx'
---

# Blog MDX Authoring Rules

Follow these rules every time you create or edit a `.mdx` file under `data/blog/`.

## Frontmatter

- The `summary` field MUST always use double quotes `"..."` — never single quotes, because long summaries often end with a word that looks like a closing quote and breaks YAML parsing
- Other string fields (`title`, `date`) may use single quotes `'...'` as long as the value contains no single quotes
- Every opened quote MUST have a matching closing quote — double-check before finishing
- Avoid special characters inside quoted frontmatter values: no em dashes `—`, no curly apostrophes `'`
- Use a plain hyphen `-` or comma instead of an em dash inside frontmatter strings
- Required frontmatter fields: `title`, `date`, `tags`, `draft`, `summary`

```yaml
# Correct
title: 'My Article Title'
date: '2026-03-05'
tags: ['frontend', 'career']
draft: false
summary: "A short description without special characters."

# Wrong — single quotes on summary, missing closing quote
summary: 'A description that ends here and breaks YAML parsing
```

## Body Content

- Avoid raw apostrophes in possessive forms that could confuse the MDX parser — prefer rephrasing (e.g. `engineers growth` instead of `engineers' growth`)
- Do not use curly/smart quotes `" " ' '` — use straight quotes only
- Em dashes `—` are fine in body text but not inside frontmatter strings
- Horizontal rules use exactly `---` on their own line with a blank line above and below

## Structure

- Use a single `# H1` at the top matching the article title
- Section headings use `## H2`
- Sub-sections use `### H3`
- End the article with an italicised closing note: `_One sentence summary._`

## Checklist Before Saving

- [ ] `summary` field has both opening and closing single quotes
- [ ] No unescaped apostrophes inside frontmatter string values
- [ ] All frontmatter fields are present
- [ ] `# H1` title exists at the top of the body
- [ ] File ends with a newline
