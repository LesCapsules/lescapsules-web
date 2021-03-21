// @ts-ignore
import Typography from 'typography'
import { typographyTheme } from '@browniebroke/react-ui-components'

const bootstrapTheme = {
  ...typographyTheme,
  bodyFontFamily: ['Roboto Slab', 'Times New Roman', 'Times', 'serif'],
  headerFontFamily: ['Raleway', 'Roboto', 'Arial', 'sans-serif'],
}

const typography = new Typography(bootstrapTheme)

export const { scale, rhythm, options } = typography
export default typography
