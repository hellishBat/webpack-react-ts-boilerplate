// Constants
import { BreakpointsTypes } from '@/types'

const breakpoints: BreakpointsTypes = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

const mxWidth: Record<string, string> = {
  xs: 'auto',
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px',
}

export { breakpoints, mxWidth }
