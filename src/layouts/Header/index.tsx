// Header
import { useEffect, useState, useRef } from 'react'
import Container from '@/components/Container'
import { useThemeContext } from '@/context/ThemeContext'
import { StyledHeader } from './styles'
import { Mode } from '@/types/theme'

const Header = () => {
  const { mode, changeMode } = useThemeContext()

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light)
  }

  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)

  const handleScroll = () => {
    const offsetY = window.scrollY
    if (offsetY >= 80) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <StyledHeader ref={headerRef}>
      <Container>
        <div
          css={`
            display: flex;
            justify-content: space-between;
          `}
        >
          <a href="/">Link</a>
          <button
            onClick={toggleMode}
            css={`
              padding: 0.5em 1em;
              background-color: #93c5fd;
              border-radius: 0.25em;
              font-weight: bold;
            `}
          >
            Light/Dark Mode
          </button>
        </div>
      </Container>
    </StyledHeader>
  )
}

export default Header
