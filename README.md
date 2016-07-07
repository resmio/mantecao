#mantecao
resmio UI Library powered by react components

##Cool, how does it work?
Do you really care? This is what you need to know

###To develop:
 - from the root folder run `npm install` (takes a while the first time)
 - Code the element (you can mimic `src/TestComponent`)
 - Require and instantiate the react element in `src/index.dev.js`
 - Then run `npm start` to start the dev server
 - In your browser go to http://localhost:3000

###To run the tests:
  - Write the tests inside the component folder (check src/TestComponent)
  - Import the test in `src/tests.js`
  - Now you have two options:
    - `npm test` -> runs the js linter and the tests
    - `npm test:only` -> runs only the tests

###To publish:
  - Run the tests, if they fail fix the code
  - Once the tests are passing commit your code
  - From the root folder run `npm version patch` (or check [this](https://docs.npmjs.com/cli/version) for version types)
  - If you haven't do `npm adduser resmio` and ask someone for the password
  - Run `npm publish` it will build the lib and push it to npm

###I hate those linting errors, I want to express myself with my code.
We are all artists, I know. You can run `npm run lint:fix` to have the linter fix the errors automatically
