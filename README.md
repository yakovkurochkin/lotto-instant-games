# Lotto24 Instant Games E2E Tests

Playwright-based end-to-end test suite for [lotto24.de](https://games.lotto24.de) instant games, targeting mobile browsers.

## Development Browser

Tests were developed and verified using **Chrome** and **Safari**.

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

## Configuration

Key settings in `playwright.config.ts`:

| Setting        | Value                          |
|----------------|--------------------------------|
| Base URL       | `https://games.lotto24.de`    |
| Retries (CI)   | 2                              |
| Workers (CI)   | 1                              |
| Trace          | Retained on failure            |

Cookie consent is pre-accepted via `global.setup.ts` so tests skip the consent dialog.

---

## Case Study Notes

### Preface

- Thank you for taking the time to implement this case study.
- If you have questions, please reach out to our recruiting manager. He will forward your questions to an engineer.
- Please refrain from making this case study or your implementation publicly available, e.g. on a public GitHub repository, or a blog.

### Features

Create end-to-end tests which verify the following conditions on our LOTTO24 games area (https://games.lotto24.de):

- Open the games area on a mobile viewport
- Verify that the "ZEAL Instant Games" teaser section is present on the page
- Swipe twice to the left within the "ZEAL Instant Games" teaser section
- Click on the product teaser for the first game in the list
- Verify that the correct game page is opened / loaded
- Verify that the correct help link "Zur [game name] Hilfe" is on the page
- Click on the help link
- Verify that the correct help page is opened
- Verify that the correct game is selected in the combo box on the help page
- Verify that the button on the help page links to the correct game

### Prerequisites

- Create a local git repository and include your commit history when submitting the case study
- Use Playwright to implement the tests using TypeScript
- Make sure to prefer framework provided APIs and features, unless you have a good reason not to
- Apply common patterns to implement your solution
- Add a `README`-file to your project and include these notes as well as your own
