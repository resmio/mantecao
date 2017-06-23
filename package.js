// A commented version of package.json
// Since they don't allow comments there

{
  // We change the version through semantic-release so we
  // don't need to update this manually
  "version":	"0.0.0-semantically-released",
  // Npm will point to this file when the library is installed
  "main": "dist/index.js",
  "scripts": {
    // alias for comming through commitzen, that way
    // we don't need to add commitzen globally
    "commit": "git cz",
    // runs automatically before 'build' task
    "prebuild": "yarn run clean:build",
    "build": "yarn run build:icon-index && yarn run build:babel && yarn run build:copy-files",
    "build:babel": "NODE_ENV=release babel ./src --out-dir ./dist --ignore stories.js,spec.js,tape.js",
    "build:copy-files": "babel-node ./scripts/copy-files.js",
    "build:icon-index": "babel-node ./scripts/icon-index-generator.js",
    "clean:build": "rimraf dist",
    "precommit": "yarn run prettier && yarn run lint",
    "prepush": "yarn test",
    "lint": "eslint ./src",
    "semantic-release": "semantic-release pre && npm publish && semantic-release post",
    "start": "yarn run storybook:dev",
    "storybook:dev": "start-storybook -p 9001 -c .storybook",
    "storybook:build": "rimraf docs && build-storybook -c .storybook -o docs",
    "test": "jest",
    "prettier": "prettier --single-quote --no-semi \"src/**/*.js\" --write",
    "prettier:test": "prettier --single-quote --no-semi \"src/**/*.js\""
  },
  "devDependencies": {
    "@storybook/react": "^3.1.3",
    "babel-cli": "^6.24.1",
    "babel-core": "^6.25.0",
    "babel-eslint": "^7.2.3",
    "babel-plugin-polished": "^1.1.0",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-export-extensions": "^6.22.0",
    "babel-preset-env": "^1.5.2",
    "babel-preset-flow": "^6.23.0",
    "babel-preset-react": "^6.24.1",
    "eslint": "^4.0.0",
    "eslint-config-react-app": "^1.0.4",
    "eslint-plugin-flowtype": "^2.34.0",
    "eslint-plugin-import": "^2.3.0",
    "eslint-plugin-jsx-a11y": "^5.0.3",
    "eslint-plugin-react": "^7.1.0",
    "flow-bin": "^0.48.0",
    "husky": "^0.13.4",
    "jest": "^20.0.4",
    "lint-staged": "^4.0.0",
    "prettier": "^1.4.4",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-test-renderer": "^15.6.1",
    "recursive-readdir-sync": "^1.0.6",
    "rimraf": "^2.6.1",
    "semantic-release": "^6.3.6",
    "styled-components": "^2.1.0"
  },
}

// This plugin removes development warning from production code.
"babel-plugin-transform-dev-warning"

// Skipped
babel-plugin-transform-react-inline-elements // requires babel-polyfill
