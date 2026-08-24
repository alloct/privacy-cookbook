---
title: "w0rmer: GPS in a Photo"
description: A hacker taunted police with a photo of his girlfriend. The photo's EXIF data contained GPS coordinates of her house.
tags:
  - darwin-awards
  - metadata
  - exif
status: published
last_reviewed: 2026-08-24
---

## Incident

Higinio Ochoa III ("w0rmer"), of the Anonymous-affiliated group CabinCr3w,
defaced US law-enforcement websites in early 2012 and published officers'
personal data. He was arrested in March 2012 and served two years in
federal prison.

## What happened

As a signature, Ochoa posted a photo of his girlfriend holding a taunting
sign ("PwNd by w0rmer & CabinCr3w"). The photo was taken with her iPhone,
which — with location services on — embedded GPS coordinates in the image's
EXIF metadata. Per the FBI affidavit, the coordinates resolved to a
suburb of Melbourne, Australia.

The rest was routine: the @Anonw0rmer Twitter handle led to older posts
linking "w0rmer" with the name Higinio Ochoa; his Facebook profile said he
was in a relationship with an Australian woman; her profile matched the
photo's location. The taunt was the evidence.

## The OPSEC mistake

Publishing a file without knowing what was in it. The image was cropped to
hide the subject's face — conscious anonymization of the *visible* content —
while the invisible metadata carried precise coordinates. A secondary
mistake compounded it: the handle "w0rmer" had a searchable history
already attached to his real name, and his public social media supplied
the final join.

## Why it mattered

EXIF metadata is embedded by default by every smartphone with location
enabled, survives most casual copying, and is readable by anyone with the
file. The photo didn't just deanonymize Ochoa — it exposed a third party
(his girlfriend) who hadn't taken any operational risk herself. Metadata
leaks routinely implicate people around the leaker.

## How it could have been avoided

Stripping metadata from every published file, verified rather than
assumed; disabling camera geotagging on any device whose photos might be
shared; and treating "what does this file contain besides the picture?" as
a mandatory pre-publication question.

## Defensive lesson

You don't need to be taunting the FBI for this to bite: photos posted to
marketplaces, forums, and dating apps have walked strangers to people's
front doors. Check your phone's camera location setting today, and strip
metadata from anything shared outside your trust circle — tools and
platform behaviors are covered in [File Metadata](/data/file-metadata/).

## Sources

- [FBI affidavit, criminal complaint against Higinio O. Ochoa III (W.D. Tex. 2012)](https://www.eff.org/files/w0rmer_complaint.pdf)
- [Ars Technica: "Feds charge confessed Anon member after tracking his digital footprints"](https://arstechnica.com/tech-policy/2012/04/feds-charge-self-confessed-anonymous-member-after-tracking-his-digital-footprints/) (2012)
