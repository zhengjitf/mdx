const heading = {
  fontFamily: 'sans',
  color: 'heading',
  a: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

const fontSizes = [14, 16, 18, 20, 24, 28, 32, 48]

const colors = {
  text: '#1f2631',
  body: '#1f2631',
  heading: '#000',
  background: '#fff',
  primary: '#ff9500',
  secondary: '#11a',
  gray: '#ccc',
  lightgray: '#f9fafc',
  yellow: '#ffc',
  muted: '#444',
  dark: {
    text: '#fff',
    background: '#111122',
    primary: '#3af',
    secondary: '#18d',
    gray: '#223',
    lightgray: '#161628',
    yellow: '#ff0',
    muted: '#ccc'
  }
}

export default {
  colors,
  fonts: {
    sans: 'system-ui, sans-serif',
    monospace: '"Roboto Mono", Menlo, monospace'
  },
  fontSizes,
  mediaQueries: {
    big: '@media screen and (min-width: 40em)'
  },
  styles: {
    h1: {
      ...heading,
      fontSize: [5, 6, 7]
    },
    h2: {
      ...heading,
      fontSize: [4, 5]
    },
    h3: {
      ...heading,
      fontSize: [3, 4]
    },
    h4: {
      ...heading,
      fontSize: 3
    },
    h5: {
      ...heading,
      fontSize: 2
    },
    h6: {
      ...heading,
      fontSize: 1
    },
    p: {
      color: 'body',
      lineHeight: 1.9,
      fontFamily: 'sans',
      fontSize: [1, 2, 2]
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      verticalAlign: 'bottom',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingRight: '4px',
      paddingLeft: 0,
      borderColor: 'inherit',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      verticalAlign: 'top',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingRight: '4px',
      paddingLeft: 0,
      borderColor: 'inherit',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid'
    },
    inlineCode: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
      bg: 'lightgray'
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1,
      overflowX: 'auto'
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      my: 4,
      color: 'lightgray'
    },
    ul: {
      pl: 3
    }
  },
  prism: {
    plain: {
      color: '#282a2e',
      backgroundColor: colors.lightgray
    },
    styles: [
      {
        types: ['comment'],
        style: {
          color: '#666'
        }
      },
      {
        types: ['string', 'number', 'builtin', 'variable'],
        style: {
          color: '#444'
        }
      },
      {
        types: ['class-name', 'function', 'tag', 'attr-name'],
        style: {
          color: 'rgb(40, 42, 46)'
        }
      }
    ],
    dark: {
      plain: {
        color: '#eee',
        backgroundColor: colors.dark.lightgray
      },
      styles: [
        {
          types: ['comment'],
          style: {
            color: '#999'
          }
        },
        {
          types: ['string', 'number', 'builtin', 'variable'],
          style: {
            color: '#fff'
          }
        },
        {
          types: ['class-name', 'function', 'tag', 'attr-name'],
          style: {
            color: '#eee'
          }
        }
      ]
    }
  }
}
