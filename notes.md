- We get the global styles from global.styles
- the size is set in variables
- Everything (except borders) will be relative to base-font-size
- For a base font-size of 16
    - Font sizes will be in rems (relative to the body font-size (ex:16)) this allows us to define sizes as relations between elements, we want to set this font-size in the main wrapper of the component (to explain later)
    - Margins, paddings, dimension will be in ems, this is relative to the font-size of the wrapper
    - This allows us to pass a size prop and set the font-size of the component to that and everything else
      will grow accordingly
