# Site Theme

This is a theme of a basic site template for Adobe Experience Manager (AEM).

This theme can be modified to customize the visual appearance.

## Structure

- `src/main/webpack/main.ts`: This is the main entry point of your JS & CSS theme.
- `src/main/webpack/site`: Files that are generic to the entire site.
- `src/main/webpack/components`: Files that are specific to components.

## Build

HINT: This project has to be build with Node 12

1. Initialize the project with following command executed at the theme root:

```
npm install
```

2. Run the local server while working to preview your changes with the content from the public directory.

```
npm run start
```

3. See the INSTRUCTIONS.md for the initial user story.

4. Check your changes into github and create a Pull Request
