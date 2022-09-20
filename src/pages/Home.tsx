// Home
import ContextProviders from '@/context/ContextProviders'
import Layout from '@/layouts/Layout'
import LogoWebpack from '@/assets/images/svg/webpack.svg'
import LogoReact from '@/assets/images/svg/react.svg'
import LogoStyledComp from '@/assets/images/svg/styled.svg'
import LogoTS from '@/assets/images/svg/ts.svg'
import Container from '@/components/Container'
import { inlineFlexAlignCenter } from '@/styles'

const Home = () => {
  return (
    <ContextProviders>
      <Layout>
        <Container>
          <div
            css={`
              text-align: center;
            `}
          >
            <h1>
              <span
                css={`
                  ${inlineFlexAlignCenter} gap: 0.3em;
                `}
              >
                <LogoWebpack /> Webpack Boilerplate
              </span>
            </h1>
            <h2>
              <span
                css={`
                  ${inlineFlexAlignCenter} gap: 0.3em;
                `}
              >
                <LogoReact /> React <LogoTS /> TypeScript +<LogoStyledComp /> Styled Components
              </span>
            </h2>
          </div>
        </Container>
      </Layout>
    </ContextProviders>
  )
}

export default Home
