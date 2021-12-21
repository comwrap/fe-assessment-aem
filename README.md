# Site Theme

This is the theme of the basic site template for Adobe Experience Manager (AEM).

This theme can be modified to customize the visual appearance of sites created from the basic site template.

## Structure

- `src/main.ts`: This is the main entry point of your JS & CSS theme.
- `src/site`: Files that are generic to the entire site.
- `src/components`: Files that are specific to components.
- `src/resources`: Associated files, like icons, logos, fonts.

## Build
HINT: This project has to be build with Node 12

1. Initialize the project with following command executed at the theme root:

```
npm install
```

2. Run the local proxy server while working to preview your changes with the content from the production environment.

```
npm run live
```

3. See the INSTRUCTIONS.md for the initial user story.

4. Check your changes into github and create a Pull Request
