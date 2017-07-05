How does this work?

The problem with components is that depending on the context where they are used they can inherit properties, that cause them to not look the way they were designed.

One possible solution to this is to use normalize.css before importing the component and limit to only style using classes in your application. Normalize will provide sane defaults and levels the inconsistencies between browsers.

But we don't want to bundle normalize.css on every component, that would increase the size of every component, so we have included it only on the preview for storybook component (in .storybook/preview-head.html) as a link, to make the link work we pass it as an argument when we run storybook. We do that in our package.json in our storybook:dev task (since we don't want to bundle normalize.css in our production library) ("storybook:dev": "start-storybook -s node_modules/normalize.css -p 9001 -c .storybook",)

We still need to take care of some global styles, so we don't need to redefine them on every component, styled-component uses a theme provider for it, but I found this solution simpler. We define our defaults in `variables.js` and then on `styles.global.js` we create a body declaration using our 'theme' and return a function that injects this css into the global enviroment using 'injectGlobal' from styled-components. Then we need to remember to run this on every component (if someone has an idea on how not to include it on every component feel free to tell me :)


- We get the global styles from global.styles
- the size is set in variables
- Everything (except borders) will be relative to base-font-size
- For a base font-size of 16
    - Font sizes will be in rems (relative to the body font-size (ex:16)) this allows us to define sizes as relations between elements, we want to set this font-size in the main wrapper of the component (to explain later)
    - Margins, paddings, dimension will be in ems, this is relative to the font-size of the wrapper
    - This allows us to pass a size prop and set the font-size of the component to that and everything else
      will grow accordingly
