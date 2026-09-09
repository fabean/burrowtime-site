# Small-screen audit

Audited September 9, 2026 using Chrome mobile viewport emulation.

## Findings and changes

- At 320px, long commands forced grid children wider than their columns. The
  hero was clipped and the document expanded to 394px. Grid tracks and their
  children now shrink to the available width. Terminal text wraps; installation
  commands and documentation code blocks scroll within their own containers.
- Mobile navigation hid Docs and GitHub. All links now remain visible in a
  second header row, with 44px-high targets.
- Every supported-client badge occupied a separate row. Only the label now
  spans the row; badges wrap at their natural widths.
- Headings and section spacing overwhelmed narrow screens. Both now scale
  down, while body text keeps its readable size.
- Terminal recordings become too small to read on phones. Every recording
  now has a link to the full-size GIF.

## Verification

Checked the landing page and all six documentation routes at 320, 375, 390,
768, and 1280px. No page-level horizontal overflow remained in those 35 checks.
Inspected mobile screenshots of the landing page and agent setup guide.
The original mascot proportions fix remains intact.

These checks used browser emulation, not physical phones. Animated GIFs still
scale to fit inline; their full-size links provide access to readable details.
