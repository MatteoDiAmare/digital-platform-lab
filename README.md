# Digital Platform Lab

Digital Platform Lab is the practical workspace for the IHM course **Teknik för digitala plattformar**.

The lab follows data through a small web application: from a user action in the browser, through client-side code and a network request, to server-side handling and a response. The code is kept small enough to inspect, change, and debug during class.

## Scope

The repository will contain:

- a plain HTML, CSS, and JavaScript client
- a small Node.js server
- lesson-specific labs
- student instructions
- troubleshooting notes

Course plans, presentations, assessment instructions, and student submissions remain in itslearning.

## Structure

- `public/` - browser-facing files used by the application
- `labs/` - lesson-specific practical exercises
- `docs/` - guides shared across the course

## Working rules

- Repository documentation and code comments are written in English.
- Student-facing lesson material may be written in Swedish.
- Examples use synthetic data only.
- Do not add personal data, credentials, API keys, or production data.
- Each lab must state what to observe, what to change, and how to verify the result.

## Run the lab

The lab requires Node.js 20 or later. It has no external runtime dependencies.

```bash
npm start
```

Open <http://localhost:3000> and follow the instructions in `labs/01-dataflow/README.md`.

Run the automated checks with:

```bash
npm test
```

## StackBlitz

Open a fresh browser-based copy:

<https://stackblitz.com/fork/github/MatteoDiAmare/digital-platform-lab>

## Status

The pilot application implements one observable client-to-server event flow. The remaining labs currently document their intended scope and will be implemented as the lesson plans are finalised.
