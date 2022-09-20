/* eslint-disable import/named */
// Types
import { ReactNode } from 'react'
import { CSSObject, SimpleInterpolation, FlattenSimpleInterpolation } from 'styled-components'

export type ChildrenTypes = {
  children: ReactNode | ReactNode[]
}

export type BreakpointsTypes = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export type BreakpointEntryTypes = [
  keyof BreakpointsTypes,
  BreakpointsTypes[keyof BreakpointsTypes]
]

export type Interpolation<T> = {
  [key in keyof T]:
    | ((
        first: CSSObject | TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation)
    | (() => string)
}

export interface ICustomObject extends ObjectConstructor {
  entries<K extends keyof BreakpointsTypes, T>(o: { [s in K]: T } | ArrayLike<T>): [K, T][]
}
