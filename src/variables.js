// Putting this here cause don't know where else to put it
// Rule of thumb for defining sizes:
// - Font-sizes in rems
// - Borders in pixels
// - Everything else in ems

export const colors = { // http://veli.ee/colorpedia/
  // blues
  pacificBlue: '#00A7C4',
  deepCerulean: '#018EA6',
  blueBayoux: '#556285',
  oxfordBlue: '#333B4F',
  ebonyClay: '#293140',
  midnightExpress: '#1E2532',
  // greens
  java: '#22CCAA',
  mountainMeadow: '#21B498',
  // purples
  royalPurple: '#543EAC',
  // pinks
  wispPink: '#FCE9ED',
  // reds
  amaranth: '#E62C4F',
  maroonFlush: '#BC213F',
  // yellows
  goldenTainoi: '#F8C150',
  metallicGold: '#D7A43B',
  // oranges
  darkOrange: '#FF910A',
  mangoTango: '#D97B08',
  // grayscale
  black: '#000000',
  mineShaft: '#222222',
  emperor: '#555555',
  dustyGray: '#999999',
  silver: '#CCCCCC',
  alto: '#DDDDDD',
  gallery: '#EEEEEE',
  whiteSand: '#F7F7F7',
  white: '#FFFFFF'
}

export const breakpoints = {
  medium: '480px',
  mediumHigh: '680px',
  mediumDesktop: '1100px'
}

export const iconSizes = {
  xsmall: '1.6rem',
  small: '2.1rem',
  medium: '2.75rem', // default
  large: '3.5rem'
}

export const theme = (function() {
  const borderColor = colors.alto
  const borderRadius = '4px'
  return {
    buttonPadding: '0.6em 2.4em',
    fontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif',
    fontSize: '1rem',
    backgroundColor: colors.white,
    border: `1px solid ${borderColor}`,
    borderColor,
    borderRadius,
    baseSpace: '0.625em',
    transitionDuration: '150ms',
    transitionTiming: 'ease'
  }
})()
