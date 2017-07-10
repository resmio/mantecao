[![CircleCI](https://circleci.com/gh/resmio/mantecao.svg?style=svg)](https://circleci.com/gh/resmio/mantecao)
[![codecov](https://codecov.io/gh/resmio/mantecao/branch/master/graph/badge.svg)](https://codecov.io/gh/resmio/mantecao)

#mantecao
resmio UI Library powered by react components :muscle:

##Cool, how does it work?
Do you really care? This is what you need to know

###Create dev environment
 - From the root folder, run `npm start` (takes a while the first time)
 - In your browser go to http://localhost:3002
 - :boom: Elements can be live edited in the browser (props, children, etc.)

###Coding components
 - Code the element (you can mimic `src/components/TextField`)
 - Require and export the react element in `src/index.js`
  - (so it is available with `import {YourElement} from '@resmio/mantecao'`)

###Coding Icons
 - Insert the optimized svg innards into an <Icon> component
 - Require and export the icon in `src/icons/index.js`

###To run the tests:
  - Write the tests inside the component folder (i.e. `src/components/TestComponent`)
  - Add `.spec.js` to the test so it is recognized by the testing scripts
  - Now you have two options:
    - `npm test` -> runs the js linter and the tests
    - `npm test:only` -> runs only the tests

###To publish:
  - Run the tests, if they fail fix the code
  - Once the tests are passing commit your code with appropriate comment
  - Create a pull request and have your changes reviewed
  - Bump the version in `package.json` manually (or check [this](https://docs.npmjs.com/cli/version) for version types)
  - If you haven't do so, ask someone to add you to the npm publisher list for @resmio/mantecao
  - Run `npm publish`
   - (this will build the library, push it to npm and create the styleguide)
  - `git add -A` and make a new commit with the version number (i.e. `git commit -m '1.0.0'`) and push to github


###I hate those linting errors, I want to express myself with my code. :trollface:
We are all artists, I know. You can run `npm run lint:fix` to have the linter fix the errors automatically
