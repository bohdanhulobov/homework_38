# React + TypeScript + Vite with Material UI and Zod

This project is a React application built with TypeScript and Vite, featuring:

- Material UI components for enhanced UI
- Zod for form validation
- Path aliases for cleaner imports
- Component structure for reusability

## Features

- **Material UI Integration**: Utilizes Material UI components for a modern look and feel
- **Form Validation**: Implements email validation using Zod schema
- **Custom Components**: Features reusable Button and Input components
- **Path Aliases**: Uses configured path aliases (`@/` and `@components/`) for cleaner imports

## Getting Started

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build
```

## Project Structure

- `src/components/` - Reusable components (Button, Input)
- `src/App.tsx` - Main application with Material UI and Zod validation

## Technology Stack

- React 19
- TypeScript
- Vite
- Material UI 6
- Zod for validation

## Path Aliases

This project uses path aliases for cleaner imports:

- `@/` points to the `src/` directory
- `@components/` points to the `src/components/` directory

## Additional Information

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
