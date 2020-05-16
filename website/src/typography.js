import Typography from 'typography'
import gray from 'gray-percentage'

const bootstrapTheme = {
  title: 'Bootstrap',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  bodyFontFamily: ['Roboto Slab', 'Times New Roman', 'Times', 'serif'],
  headerFontFamily: ['Raleway', 'Roboto', 'Arial', 'sans-serif'],
  scaleRatio: 2.25,
  bodyWeight: 400,
  headerWeight: 800,
  boldWeight: 'bold',
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    body: {
      color: gray(23, 204),
    },
    h1: scale(7 / 6),
    h2: scale(5 / 6),
    h3: scale(4 / 6),
    h4: scale(3 / 6),
    h5: scale(-1 / 6),
    h6: scale(-2 / 6),
    blockquote: {
      ...scale(1 / 4),
      borderLeft: `${rhythm(1 / 6)} solid #eceeef`,
      paddingTop: rhythm(1 / 3),
      paddingBottom: rhythm(1 / 3),
      paddingLeft: rhythm(2 / 3),
      paddingRight: rhythm(2 / 3),
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(54, 204),
      fontWeight: options.bodyWeight,
      fontStyle: 'normal',
    },
  }),
}

const typography = new Typography(bootstrapTheme)

export const { scale, rhythm, options } = typography
export default typography
