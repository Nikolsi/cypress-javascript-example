# The example repository about how to set up Cypress E2E tests in JavaScript.

## How to Run

1. Install dependencies (make sure Node and NPM installed)

   ```
   npm install
   ```

2. Run Cypress with Test Runner

   **Prerequisite for Cypress against localhost**:
   Boot your server first, then run Cypress (e.g. in two separate terminals) (see [Setup CI](https://docs.cypress.io/guides/continuous-integration/introduction#Basics))

   ```
   npm run cypress:open
   ```

   NOTE:
   Cypress watches the `./cypress/integration` folder. Hence, new e2e integration tests can be added without relaunch with the existing `support/*`.

## How to Write Tests

Cypress relies on [Mocha](https://mochajs.org/) syntax for writing tests and provides additional [Cypress API & Concepts](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Cypress-Can-Be-Simple-Sometimes) for writing methods and test the web application.

```js
// cypress/integration/sample.spec.js

describe("My First Test", () => {
  it("does not do much!", () => {
    expect(true).to.equal(true);
  });
});
```

## Continuous Integration (CI) [Documentation](https://docs.cypress.io/guides/continuous-integration/introduction)

1. Run Cypress via CLI in Headless mode.

   ```
   npm run cypress:ci
   ```

   NOTE:

   - Cypress is capable to do video recording (by default) of the processed E2E integration tests and stores them into `./cypress/videos`, rewriting files on every run. Path is in `.gitignore` for now.
   - Cypress is capable to do screenshot comparison if the precessed E2E integration tests called specific cypress command to take a screenshot, which would be stored into `./cypress/screenshots` and would be compared with the previous version of the screenshot (with the same name). Path is in `.gitignore` for now.
