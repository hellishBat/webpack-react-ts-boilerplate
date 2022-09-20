import { css } from 'styled-components'
import { BreakpointsTypes, BreakpointEntryTypes, Interpolation, ICustomObject } from '@/types'
import { breakpoints } from '@/constants'

const initAcc: Interpolation<BreakpointsTypes> = {
  xs: () => '',
  sm: () => '',
  md: () => '',
  lg: () => '',
  xl: () => '',
  xxl: () => '',
}

const object: ICustomObject = Object

export const media = object
  .entries(breakpoints)
  .reduce<Interpolation<BreakpointsTypes>>((acc, cur: BreakpointEntryTypes) => {
    const [key, value] = cur
    acc[key] = (first, ...interpolations) =>
      css`
        @media (min-width: ${value}px) {
          ${css(first, ...interpolations)}
        }
      `

    return acc
  }, initAcc)
