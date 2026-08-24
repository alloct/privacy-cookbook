---
title: File Metadata
description: Photos carry GPS coordinates, documents carry author names and edit histories. What's inside common files and how to strip it.
tags:
  - metadata
  - files
status: published
last_reviewed: 2026-08-24
---

Files carry hidden passengers. A photo can include the exact GPS coordinates
where it was taken; a Word document can include the author's name, employer,
and tracked deletions; a PDF can name the machine that produced it. People
who would never post their address have posted it inside a JPEG.

This is not theoretical. John McAfee's location in Guatemala was exposed in
2012 by GPS coordinates in a photo published by journalists traveling with
him, and an Anonymous-affiliated hacker was identified after posting a photo
whose EXIF data pointed to his girlfriend's house — that one has its own
[Darwin Award entry](/darwin-awards/w0rmer-exif/).

## What lives in common formats

- **Photos (JPEG/HEIC):** EXIF data — GPS coordinates, timestamp, camera or
  phone model, serial numbers on some cameras, and editing-software traces.
- **Office documents (DOCX, ODT, XLSX):** author and organization names,
  total editing time, revision history, comments, and sometimes tracked
  changes you thought were resolved.
- **PDFs:** producer application, author fields, creation timestamps;
  "redactions" drawn as black rectangles over selectable text remain
  copy-pasteable — a mistake that recurs in court filings yearly.
- **Video and audio:** device identifiers, timestamps, location on some
  devices.
- **Screenshots:** cleaner than photos (no GPS EXIF), but check *visible*
  metadata — usernames, tabs, notification previews, Wi-Fi names — which is
  leaked more often than the invisible kind.

Beyond per-file fields, the content itself fingerprints: printer tracking
dots have identified the source of leaked documents, and stylometry (writing
style analysis) links texts across identities. Those are worth knowing about
even though tooling can't scrub them.

## When it matters

Match the effort to the [threat model](/start-here/threat-modeling/). For
everyday photo sharing, the major social platforms already strip EXIF on
upload (while, of course, reading it first — and messaging apps vary:
sending a photo "as a file" typically preserves everything). For anything
where the audience shouldn't learn where you live or who wrote a document —
listings, forums, leaks, activism, anything posted pseudonymously —
stripping metadata is mandatory, and it must happen **before** the file
leaves your machine.

## How to strip it

- **Phones:** iOS shares photos with location removable at the share sheet
  (tap Options → Location off); Android's default Photos app can remove
  location on share. Third-party keyboards and apps vary — verify, don't
  assume.
- **Windows:** file Properties → Details → "Remove Properties and Personal
  Information" covers the basics.
- **Cross-platform, thorough:** [ExifTool](https://exiftool.org/) is the
  reference implementation — `exiftool -all= file.jpg` strips everything
  strippable. [mat2](https://0xacab.org/jvoisin/mat2) handles many formats
  and is packaged in most Linux distributions.
- **Documents:** use the application's own inspector (Word's "Inspect
  Document," LibreOffice's redaction tools), or export to PDF and strip the
  PDF — after redacting *content* with a tool that deletes text rather than
  covering it.
- **The blunt instrument:** a screenshot of the sensitive thing, cropped, is
  often the fastest reliable strip for images — at some quality cost.

## Habit, not heroics

The workable practice is one habit: **before any file leaves your custody
for an audience you don't fully trust, ask what's riding inside it.** For
recurring workflows (posting listings, publishing documents), make the strip
step part of the pipeline so it doesn't depend on remembering — the person
in the Darwin Award remembered hundreds of times, and it's the one time he
didn't that anyone knows his name.
