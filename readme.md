## Credits

This boilerplate has grown thanks to the work of:

- Jacopo Panzera (https://github.com/Sliver02)
- Andrea Caccia
- Sebastiano Edoardo Casella (https://github.com/EdoardoEntusiasta)
- Shant Sargsyan (https://github.com/Shant24


## Getting Started
The package is made of:

Webpack 5.68, Storybook, material-ui, Babel, React, Typescript, Redux gsap, styled-components, i18n, lingui

First, run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Storybook

First, run the development server:

```bash
npm run storybook
# or
yarn storybook
```

To learn more visit the official documentation: https://storybook.js.org/docs/react/get-started/introduction


## Lingui js and internazionalization
Configuration is based on the following guide
https://blog.logrocket.com/complete-guide-internationalization-nextjs/

TO ADD A LANGUAGE
1. Add new locale slug in next.config.js -> locales [...]
2. Add the same locale slug in .linguirc -> locales [...]

TO ADD A TRANSLATION
1. Add a `<Trans>`placeholder text`</Trans>` element
2. Execute: "npm run extract" to extract the placeholders and make them available for translation
3. Insert the relative translation in locales/{locale-slug}/messages.po
4. Execute "npm run compile & npm run dev"

LINKS

If you want to make sure that the links follow the current translation, use the TextLink component which automatically adds the prefix of the active language.

## Integrated fetch calls
The package contains a series of interceptors and classes useful for managing the REST API response data. Through some procedures shown as an example it will be possible to create your own services and the corresponding data models.
Note that these services are configured to work with a well-defined response structure, also exposed in the code. Obviously, no one prevents you from manipulating the algorithms to meet your needs.
To get an idea, look in the /models and /services folder.
