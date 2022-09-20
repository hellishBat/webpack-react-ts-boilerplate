// Container
import { FC } from 'react'
import { StyledContainer } from './styles'
import { ChildrenTypes } from '@/types'

const Container: FC<ChildrenTypes> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
