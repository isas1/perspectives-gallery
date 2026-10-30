---
name: Perspectives gallery
description: Paper, green ink, playable source-informed studies.
colors:
  paper: "#f6f3ea"
  ink: "#223a32"
  muted: "#506259"
  rule: "#bcc7ba"
  soft: "#e8eadd"
  sand: "#eadbc4"
  leaf: "#dce5d0"
  blush: "#f0dfd1"
  hover: "#8c482e"
  focus: "#93431c"
  selection: "#c6d8aa"
typography:
  display:
    fontFamily: "Headline, sans-serif"
    fontSize: "clamp(44px, 6vw, 82px)"
    fontWeight: 550
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Text, sans-serif"
    fontSize: "17px"
    lineHeight: 1.6
rounded:
  control: "6px"
  scene: "12px"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  control-gap: "8px"
  section: "54px"
components:
  button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
  button-hover:
    backgroundColor: "{colors.soft}"
---

## Overview

Quiet editorial desk. Preserve inherited Perspectives paper, green ink, Mozilla type. Artifact leads; source context stays close. Public gallery extends established brand; no new identity.

## Colors

Paper supports long reading. Green ink anchors text and controls; muted green marks metadata; pale rules divide sections. Archive uses a muted sage slab fill. Clay marks link hover and focus. Study data supplies bounded scene palettes. Country labels use restrained color fields; no flags or sacred imagery.

## Typography

Self-host Mozilla Headline as Headline; Mozilla Text as Text. Included OFL licenses travel with fonts. Balanced headings, restrained weight, readable body. Section heading uses 30px; scene title 30px; context subheading 21px; metadata and control labels 12–14px; compact title bar 25px; card headings 25–36px. ExportText embeds the same Mozilla Text font in downloaded SVGs. Body measure stays within 70ch. No remote font service.

## Layout

Archive contains only a centered list of published study links. Folded-slab reference informs weighted hover expansion, sweeping muted fill and shifting title/arrow. Native links remain clickable; keyboard focus has the same reveal. No invented entries or autonomous demo motion.

Study uses a 68px top bar and four edge-to-edge blocks filling the remaining viewport. Below 800px, a two-by-two grid keeps all four visible without page scrolling. Each block shows only its country name at top. Muted rose, ochre and blue tones distinguish countries as editorial color choices, not cultural claims. Scene artwork is hidden at rest. Hover/focus reveals a pointer-tracked circle; tap/click/Enter expands the scene. Arrow keys move the lens.

Sources, original scoped accounts, comparison and exports remain inside the top-bar Sources drawer. Long source text scrolls within that drawer; the study grid stays fixed.

## Elevation & Depth

Flat paper, soft scene fields, thin rules. No decorative shadow, glass or floating panel.

## Shapes

Controls use small rounded corners; full-screen blocks have square edges. Geometric vessels remain abstract prototypes, never authentic object claims.

## Components

Archive link opens study. Each scene has action, Reset, Download SVG, live status and native context disclosure. Control minimum height 44px; focus uses 3px clay outline with 5px offset. Hover animates vessel positions for 850ms; reduced motion removes animation. Lens transition lasts 500ms and stops when pointer rests. No autonomous animation loop. Source links and SVG/JSON downloads stay inside the Sources drawer.

## Do's and Don'ts

- Keep keyboard access, native links, buttons and disclosure semantics.
- Keep documented account, design interpretation and uncertainty distinct.
- Keep scene palettes data-bound; text stays outside SVG where practical.
- Preserve paper, green ink and Mozilla font family.
- Avoid decorative cultural symbols, whole-culture claims, implied endorsement and private review controls.

## Archived run template

All run.html entries share the full-viewport four-block grid. Method runs display four
original proposals, with a top-bar Result selector for both saved outputs. Proposal title
and action sit at top; hover, tap or native summary keyboard interaction reveals details.
Escape closes details. Long content scrolls within its block. About retains original task,
notice, cover and both syntheses. No imagined countries or working prototypes added.
New run JSON automatically uses this template. Cultural account exports also require four
blocks; the existing playable cultural sample keeps its loupe renderer.
