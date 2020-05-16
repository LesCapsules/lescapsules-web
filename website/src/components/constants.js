import { rhythm } from '../typography'

export const gridBreakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}
// Not: all the keys in the below object should exist above
export const containersMaxWidth = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
}

export const gutterWidth = '15px'

export const spacings = [
  rhythm(1 / 6),
  rhythm(1 / 3),
  rhythm(2 / 3),
  rhythm(1),
  rhythm(2),
]

export const colors = {
  primary: '#0054c7',
  primaryDark: '#00347b',
  secondary: '#f4d62e',
  secondaryDark: '#e3c20c',
}

export const boxShadow = 'rgba(30, 30, 30, 0.15) 0px 2px 40px 0px'
