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

- Atomic desing to reuse compoents
- TypeScript to help with code organization and maintainability.
- using a fast and easy setup tool Vite to help in the get started.
- Unit tests with libraries: '@testing-library/react' vites and using Cypress for end-to-end testing to ensure that mercaldo_libre project is functioning as expected and catch any issues early on.
- Using Sass as a preprocessor for CSS can help make styling more modular and reusable
- Designing with a focus on desktop first to ensure that the project looks and functions well on larger screens before scaling down to smaller devices.

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
