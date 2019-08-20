import React from 'react'
import {ThemeProvider, Styled} from 'theme-ui'

import theme from '../components/theme'

export default () => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <Styled.h1>Hello, world!</Styled.h1>
      <Styled.p>
        MDX is a language and library for writing immersive and interactive
        content. It lets you seamlessly use components in your Markdown
        documents.
      </Styled.p>
    </Styled.root>
  </ThemeProvider>
)
