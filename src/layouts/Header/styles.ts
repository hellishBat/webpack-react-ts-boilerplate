// Header Styles
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`

const StyledButton = styled.button`
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 0.25em;
  font-weight: bold;
  color: #fff;
`
export { StyledHeader, StyledButton }
