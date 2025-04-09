# Chizek UI

A React-based user interface for the Chizek application, built with modern web technologies and best practices.

## Tech Stack

- React 19
- TypeScript
- Apollo Client for GraphQL
- Material-UI (MUI) v6
- React Router DOM v7
- GraphQL Code Generator
- Jest & React Testing Library

### Package Groups

#### Core Framework

- React and React DOM (v19)
- React Router DOM (v7)
- TypeScript

#### UI Components

- Material-UI (MUI v6)
- Emotion (Styling)
- Roboto Font

#### GraphQL

- Apollo Client
- GraphQL Code Generator
- GraphQL Core

#### Testing

- Jest
- React Testing Library
- Testing Library DOM
- Testing Library User Event
- Testing Library React Hooks

#### Development Tools

- ESLint
- Prettier
- TypeScript ESLint
- Babel
- Parcel Watcher
- React Scripts (Create React App)

#### Utilities

- LocalForage (Offline Storage)
- Match Sorter
- Sort By
- Web Vitals
- Dotenv

## Prerequisites

- Node.js (LTS version recommended)
- Yarn package manager
- A running instance of the Chizek backend server

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd chizek-ui
```

2. Install dependencies:

```bash
yarn install
```

3. Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=
GRAPHQL_SCHEMA_URL=
```

4. Start the development server:

```bash
yarn start
```

## Available Scripts

- `yarn start` - Runs the app in development mode
- `yarn test` - Launches the test runner in interactive watch mode
- `yarn build` - Builds the app for production to the `build` folder
- `yarn lint` - Runs ESLint to check for code issues
- `yarn format` - Formats code using Prettier
- `yarn codegen` - Generates TypeScript types from GraphQL schema

## Development

### GraphQL Code Generation

This project uses GraphQL Code Generator to create TypeScript types from your GraphQL schema. To generate types:

1. Ensure your GraphQL backend is running
2. Run:

```bash
yarn codegen
```

Generated files will be placed in `src/gql/`.

### Testing

Tests are written using Jest and React Testing Library. To run tests:

```bash
yarn test
```

To run tests with coverage:

```bash
yarn test --coverage
```

### Code Style

This project uses:

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking

Configuration files:

- `.prettierrc` - Prettier configuration
- `tsconfig.json` - TypeScript configuration
