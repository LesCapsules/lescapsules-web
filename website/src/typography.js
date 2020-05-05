import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

const typography = new Typography({
  ...bootstrapTheme,
  headerFontFamily: ['Raleway', 'Roboto', 'Arial', 'sans-serif'],
  headerWeight: '800',
  bodyFontFamily: ['Roboto Slab', 'Times New Roman', 'Times', 'serif'],
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
