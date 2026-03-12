# Aplus Marketing UI Starter

Next.js + Tailwind CSS (v4) starter for a pure UI marketing website using JavaScript and React Query-ready app providers.

## Stack

- Next.js App Router
- JavaScript (no TypeScript)
- Tailwind CSS v4
- React Query (`@tanstack/react-query`)

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```text
src/
  app/
    globals.css
    layout.js
    page.js
  components/
    layout/
      container.js
      site-footer.js
      site-header.js
    sections/
      cta-section.js
      features-section.js
      hero-section.js
      logo-strip.js
      process-section.js
      stats-section.js
      testimonials-section.js
    ui/
      button-link.js
      section-shell.js
  content/
    marketing-content.js
  lib/
    utils.js
  providers/
    app-providers.js
```

## Notes

- Content is centralized in `src/content/marketing-content.js`.
- React Query provider is wired at root in `src/providers/app-providers.js`.
- Homepage composition lives in `src/app/page.js` and is built from section components.
