import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

export default new Typography({
  ...bootstrapTheme,
  headerFontFamily: ['Raleway', 'Roboto', 'Arial', 'sans-serif'],
  headerWeight: '800',
  bodyFontFamily: ['Roboto Slab', 'Times New Roman', 'Times', 'serif'],
})
