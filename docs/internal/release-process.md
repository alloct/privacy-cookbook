# Release Process

There are no versioned releases: **`main` is the site.** Every merge to
main deploys automatically (see `deployment.md`). "Release process"
therefore means merge discipline plus periodic maintenance.

## Merge discipline

- All changes land via PR with green CI; no direct pushes to main
  (enforce with branch protection).
- Batch related content into one PR; don't merge half of a restructuring.
- Drafts (`status: draft`) may merge — they render with a DRAFT badge and
  that's fine. What must not merge is wrong information without a badge.

## Rollback

`git revert` the offending commit(s) on main; CI redeploys the corrected
site within minutes. For a bad deploy of a good commit, re-run the deploy
job from the Actions tab. Details in `deployment.md`.

## Periodic maintenance (quarterly is a good cadence)

1. **Stale content:** `npm run find-stale` → re-verify or mark
   `needs-review` (see `editing-a-page.md`).
2. **External links:** `npm run check-links -- --list-external` → spot-check
   or run a local `lychee` pass; fix dead links, prefer archived versions
   (archive.org) for sources that vanished.
3. **Dependencies:** `npm outdated` / merge pending Dependabot PRs
   (`dependencies.md`).
4. **Recommendations sanity pass:** skim the recommendations pages for
   ownership changes, security incidents, or license changes among the
   named tools. This is the content most likely to rot dangerously.
5. **Repo settings drift:** confirm Pages source, HTTPS enforcement, and
   branch protection are still as documented.

## Milestone housekeeping (optional)

For significant milestones (major restructuring, new sections), tag the
commit (`git tag content-2026-q3 && git push --tags`) so there's a named
point to diff or roll back to. Tags are cheap; use them when a change would
be annoying to bisect.
