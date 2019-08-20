/** @jsx jsx */
import {ThemeProvider, Styled, jsx} from 'theme-ui'
import {Link} from 'gatsby'
import {Global} from '@emotion/core'

import MDXExample from '../components/mdx-example'
import theme from '../components/theme'

const Container = props => (
  <div
    sx={{
      maxWidth: 1200,
      margin: 'auto'
    }}
    {...props}
  />
)

export default () => (
  <ThemeProvider theme={theme}>
    <Global
      styles={{
        body: {
          margin: 0
        },
        '*': {
          boxSizing: 'border-box'
        }
      }}
    />
    <Styled.root>
      <div
        sx={{
          backgroundColor: 'lightgray'
        }}
      >
        <Container>
          <div
            sx={{
              pt: [3, 4, 5],
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}
          >
            <div
              sx={{
                pr: [0, 4, 4],
                pb: [3, 4, 5],
                width: ['100%', '50%', '50%']
              }}
            >
              <Styled.h1>
                Markdown for the
                <span
                  sx={{
                    display: 'block',
                    color: 'primary'
                  }}
                >
                  component era
                </span>
              </Styled.h1>
              <Styled.p
                sx={{
                  fontSize: 3,
                  mb: 5
                }}
              >
                MDX is a language and library for writing immersive and
                interactive content. It lets you seamlessly use components in
                your Markdown documents.
              </Styled.p>
              <Link
                to={'/getting-started'}
                sx={{
                  backgroundColor: '#FF9500',
                  color: 'background',
                  borderRadius: 10,
                  fontFamily: 'sans',
                  fontWeight: 600,
                  boxShadow: '0 15px 45px -10px rgba(31,38,49,0.15)',
                  textDecoration: 'none',
                  py: 3,
                  px: 4,
                  border: 'none'
                }}
              >
                Get Started
              </Link>
            </div>
            <div
              sx={{
                pl: [0, 3, 4],
                position: 'relative',
                width: ['100%', '50%', '50%']
              }}
            >
              <MDXExample />
            </div>
          </div>
        </Container>
      </div>
    </Styled.root>
  </ThemeProvider>
)
