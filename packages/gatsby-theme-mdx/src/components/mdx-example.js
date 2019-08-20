/** @jsx jsx */
import {jsx, Styled, useThemeUI} from 'theme-ui'
import CodeBlock from '@theme-ui/prism'
import {VictoryBar} from 'victory'

const MDX_CODE = `
import SnowfallChart from 'snowfall-chart'

# Last year's snowfall

In 2018, the snowfall was above average. It was followed by a warm Spring which caused flood conditions in many of the nearby rivers.

<SnowfallChart year="2018" color="orange" />
`

export default () => {
  const {
    theme: {colors}
  } = useThemeUI()

  return (
    <div
      sx={{
        userSelect: 'none',
        position: 'relative'
      }}
    >
      <div
        sx={{
          zIndex: -1,
          width: '100%',
          pre: {
            mb: 0,
            height: 500,
            whiteSpace: 'pre-wrap',
            boxShadow: '0 15px 45px -10px rgba(31,38,49,0.15)',
            backgroundColor: '#1f2631',
            color: '#C9CDD3',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            overflowX: 'scroll',
            fontSize: [0, 1, 2],
            p: 4,
            '.operator': {
              color: '#C9CDD3'
            },
            '.string': {
              color: '#99A4E7'
            },
            '.token-line:first-of-type .maybe-class-name': {
              color: '#F1C76A'
            },
            '.token-line:first-of-type .plain': {
              color: '#FF5A52'
            },
            '.token-line:nth-of-type(3)': {
              color: '#FF5A52'
            },
            '.token-line:first-of-type .keyword': {
              color: '#FF5A52'
            },
            '.token-line:last-of-type .maybe-class-name': {
              color: '#F1C76A'
            },
            '.token-line:last-of-type .plain': {
              color: '#FF5A52'
            },
            '.token-line:last-of-type .operator:nth-of-type(5)': {
              color: '#FF5A52'
            },
            '.token-line:last-of-type .operator:nth-of-type(8)': {
              color: '#FF5A52'
            }
          }
        }}
      >
        <CodeBlock className="language-js">{MDX_CODE}</CodeBlock>
      </div>
      <div
        sx={{
          position: 'absolute',
          zIndex: 1000,
          left: -48,
          bottom: -80,
          width: '100%',
          boxShadow: '0 15px 45px -10px rgba(31,38,49,0.15)',
          border: '1px solid #EDF2F7',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: 8,
          overflow: 'hidden',
          fontSize: 2,
          px: 48,
          pt: 4,
          pb: 0,
          h1: {
            mt: 0,
            fontSize: 3
          },
          '.VictoryContainer': {
            width: '118% !important',
            mt: -32,
            mb: -24,
            ml: -48,
            mr: 0
          }
        }}
      >
        <Styled.h1
          sx={{
            fontSize: 24,
            color: '#1F2631',
            letterSpacing: -0.44
          }}
        >
          Last year&apos;s snowfall
        </Styled.h1>
        <Styled.p
          sx={{
            mb: -20,
            lineHeight: 1.8,
            color: '#1F2631',
            fontSize: 15
          }}
        >
          In 2018, the snowfall was above average. It was followed by a warm
          Spring which caused flood conditions in many of the nearby rivers.
        </Styled.p>
        <VictoryBar
          height={140}
          style={{data: {fill: colors.primary}}}
          data={[
            {x: 1, y: 18},
            {x: 2, y: 8},
            {x: 3, y: 16},
            {x: 4, y: 6},
            {x: 5, y: 10},
            {x: 6, y: 8},
            {x: 7, y: 16},
            {x: 8, y: 20},
            {x: 9, y: 10},
            {x: 10, y: 6},
            {x: 11, y: 10},
            {x: 12, y: 8},
            {x: 13, y: 16},
            {x: 14, y: 20},
            {x: 15, y: 6},
            {x: 16, y: 10},
            {x: 17, y: 8},
            {x: 18, y: 16},
            {x: 19, y: 4}
          ]}
        />
      </div>
    </div>
  )
}
