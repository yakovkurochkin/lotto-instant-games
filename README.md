# Lotto24 Instant Games E2E Tests

Playwright-based end-to-end test suite for [lotto24.de](https://games.lotto24.de) instant games, targeting mobile browsers.

## Stack

- [Playwright](https://playwright.dev/) — test runner and browser automation
- TypeScript
- Docker — for CI / isolated runs

## Project Structure

```
tests/                   # Test specs
pages/                   # Page Object Models
  index.page.ts          # Home page
  game.page.ts           # Game detail page
  game-help.page.ts      # Game help page
  base.page.ts           # Shared base class
support/
  fixtures/fixtures.ts   # Custom Playwright fixtures
  helpers/locator.helper.ts  # Swipe / gesture helpers
  setup/global.setup.ts  # Cookie consent setup (runs before tests)
```

## Prerequisites

- Node.js 18+
- `npm install`
- `npx playwright install` (installs browser binaries)

## Running Tests

```bash
# Run all tests
npm test

# Open HTML report after a run
npm run test:report
```

## Docker

```bash
# Build image
npm run docker:build

# Run tests in container
npm run docker:run
```

## Test Targets

Tests run on two mobile emulated devices:

| Project       | Device              |
|---------------|---------------------|
| Mobile Chrome | Pixel 7             |
| Mobile Safari | iPhone 15 Pro Max   |
