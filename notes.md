How does this work?

The problem with components is that depending on the context where they are used they can inherit properties, that cause them to not look the way they were designed.

One possible solution to this is to use @resmio/rollico css before importing the component and limit to only style using classes in your application. Normalize will provide sane defaults and levels the inconsistencies between browsers.

But we don't want to bundle .css on every component, that would increase the size of every component, so we have included it only on the preview for storybook component (in .storybook/preview-head.html) as a link, to make the link work we pass it as an argument when we run storybook. We do that in our package.json in our storybook:dev task (since we don't want to bundle rollico in our production library, we will require it separatedly) ("storybook:dev": "start-storybook -s node_modules/@resmio/rollico/dist -p 9001 -c .storybook",)

- Everything (except borders) will be relative to base-font-size
- For a base font-size of 16
    - Font sizes will be in rems (relative to the body font-size (ex:16)) this allows us to define sizes as relations between elements, we want to set this font-size in the main wrapper of the component (to explain later)
    - Margins, paddings, dimension will be in ems, this is relative to the font-size of the wrapper
    - This allows us to pass a size prop and set the font-size of the component to that and everything else
      will grow accordingly

_deleteme
