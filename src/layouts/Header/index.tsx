// Header
import { useEffect, useState, useRef } from 'react'
import Container from '@/components/Container'
import { StyledHeader } from './styles'

const Header = () => {
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
        <div>
          <a href="/">Link</a>
        </div>
      </Container>
    </StyledHeader>
  )
}

export default Header
