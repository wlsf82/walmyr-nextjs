# walmyr-nextjs

My website created using [Next.js](https://nextjs.org).

## Pre-requirements

This project was developed and tested with the following versions of Node.js and Yarn. It's recommended that you use the same or greater versions.

```
$ node -v
v12.18.2
$ yarn -v
1.22.4
````

## Installation

Run `yarn` to install the project dependencies.

## Starting the application

Run `yarn dev` to run the application in development mode.

## Tests

This project uses [backstop-config](https://github.com/wlsf82/backstop-config) as a screenshot comparison testing tool.

**Note: Google Chrome browser is required for running the tests.**

**Note 2: The app needs to be up and running for the tests to be executed.**

Run `yarn test` to run the tests.

After the tests are executed, a test report is automatically opened.

> From time to time, it's recommended to delete the directory `test/backstop_data/bitmaps_test`.

In case of test failures due to expected visual changes in the website, run `yarn backstop:approve` to replace the reference bitmaps by the new ones.

___

Made with 💚 by [Walmyr Filho](https://walmyr-nextjs.vercel.app).
