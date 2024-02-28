# open-API-rick-and-morty

This Next.js application leverages Rick and Morty's open API to fetch and display character and episode details. It prioritizes production quality by incorporating various features. The page is rendered with first API call on the server and the subsequest calls are made from client when next/prev is clicked.

## Authors

- [Rohit kumar](https://github.com/kumar111222rohit)

## Demo

The project is live here:

https://open-api-rick-and-morty.vercel.app/

## Environment Settings

To run this project, node version required
` v18.17.0`

## Local Installation

Clone the project

```bash
  git clone  https://github.com/kumar111222rohit/open-API-rick-and-morty.git
```

Go to the project directory

```bash
  cd open-API-rick-and-morty
```

Install dependencies

```bash
  npm install
```

Build the app

```bash
  npm run build
```

Start the app

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Features

- Built on Next.js
- Responsive for mobile and desktop
- Accessibility: Built with WCAG support for inclusive user experience.

- Type Safety: Ensured by TypeScript for enhanced code maintainability.

- React Framework: Utilizes React for efficient component-based development.

- Reusable Components: Promotes modularity and code reusability.
- Localization Ready: Supports potential internationalization efforts.
- Server-Side Rendering (SSR): Improves initial page load performance.
- Client-Side Rendering (CSR): Enables dynamic updates and interactivity.
- Code Splitting: Optimizes bundle size and loading time.
- Linting and Prettier: Enforces consistent code style and formatting.
- React Context: Provides centralized state management for shared data.
- Functional Components and Hooks: Leverages modern React features for component composition.
- API Integration: Seamlessly fetches data from the Rick and Morty API.
- Generic makeAPICall Service: Simplifies API interactions.
- SCSS Styling: Employs SCSS for maintainable and scalable styling.
- Code Modularization: Organizes code into logical modules for better readability.
- Error Handling: Implements robust error handling mechanisms.
- Unit test for components and APIs

## API Reference

#### Get character

```http
  GET /api/character
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | **Optional**. Gives character data for an id   |
| `page`    | `string` | **Optional**. Gives character data from a page |

#### Get episode

```http
  GET /api/episode/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get all locations of a character

```http
  GET /api/location/
```

| Parameter | Type     | Description                                         |
| :-------- | :------- | :-------------------------------------------------- |
| `id`      | `string` | **Required**. Id of character to fetch all location |

## 🚀 About Me

Learning, Unlearning and Re-learning everyday.
