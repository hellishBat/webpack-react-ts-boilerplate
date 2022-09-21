/* eslint-disable import/named */
// Types
import { ReactNode } from 'react'
import { CSSObject, SimpleInterpolation, FlattenSimpleInterpolation } from 'styled-components'

type ChildrenTypes = {
  children: ReactNode | ReactNode[]
}

type BreakpointTypes = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

type BreakpointEntryTypes = [keyof BreakpointTypes, BreakpointTypes[keyof BreakpointTypes]]

type InterpolationTypes<T> = {
  [key in keyof T]:
    | ((
        first: CSSObject | TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation)
    | (() => string)
}

interface ICustomObject extends ObjectConstructor {
  entries<K extends keyof BreakpointTypes, T>(o: { [s in K]: T } | ArrayLike<T>): [K, T][]
}

export { ChildrenTypes, BreakpointTypes, BreakpointEntryTypes, InterpolationTypes, ICustomObject }
