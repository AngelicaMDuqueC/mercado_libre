# Code Challenge Mercado libre

## Description

This is a sample project created using Vite, a build tool for modern web applications. The project is a simple web application that displays a list of items from an API.

## Prerequisites

Before you can run the project, you need to have Node.js and npm installed on your machine.

## Installation

To install the dependencies, run the following command in the terminal:
`npm install`

## Usage

To start the development server, run the following command in the terminal:
`npm run dev`

This will start the Vite server and launch the web application in your default browser. Any changes you make to the code will be automatically reloaded in the browser.

## Build

To build the production version of the application, run the following command in the terminal:
`npm run build`
This will create a dist directory with the optimized files ready for deployment.

## Testing

To run the tests, run the following command in the terminal:
`npm run test`
`npm run coverage`

### E2E

run first `npm run dev`
run` npx cypress open`

## Determined architecture

- Atomic desing to resue compoents
- typesCripte to help whit documentation and project scalability
- Used vite to inital and esay setup
- uniti testing with vite library and '@testing-library/react and cypress as E2E
- Sass as preprocess of css and Destoks first desagin

## ISSUES

### Time to reload with vite

[Page reload on dev server is very slow in large codebase](https://github.com/vitejs/vite/issues/7608)

### Use Pick ister of Partial

in some componets I used Partial to not complicate my work but should be Pick

## added img for search btn

I didn't have the time to add the img to the btn

## created more unit testing

some componet didn't have unit testing

## use RenderList component into Search List

I didn't have the time to make the changes

## add documentation into componets

I didn't have the time to implent it into all componets but I use typeScript that help with it
