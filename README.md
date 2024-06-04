# React + TypeScript + Vite

This template provides a minimal setup to work with React in Vite with HMR and some ESLint rules.

## Expanding ESLint Configuration

For a production application, it's recommended to update the ESLint configuration to enable type-aware lint rules.

## Application Architecture

In this application, we follow a React-based architecture including the use of custom hooks and the creation of a React context to share data between components.

### Custom Hooks

Custom hooks are functions that encapsulate specific logic for a particular feature or behavior, allowing for reuse across multiple components in the application.

- `useTopPodcasts`: Retrieves the top podcasts from an external API.
- `usePodcastDetail`: Fetches details of a specific podcast, including associated episodes.

### React Context

React context is used to share data between components without the need to manually pass props through multiple levels of the component hierarchy.

## How to Use

To use this template, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the development server with `npm run dev`.
4. Build the application for production with `npm run build`.

## Deployment

This application is deployed on Netlify, and you can access it at [https://podcaster-gerard-albajar.netlify.app/](https://podcaster-gerard-albajar.netlify.app/).

Repository URL: [https://github.com/GerardAlbajar/podcaster](https://github.com/GerardAlbajar/podcaster)
