/** @jsx jsx */

import {jsx} from 'theme-ui'

export default props => (
  <div
    sx={{
      ul: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyleType: 'none',
        p: 0,
        mt: -3,
        mx: -4
      },
      li: {
        m: 4,
        fontWeight: 'bold',
        width: ['50%', '33%', '25%'],
        img: {
          boxShadow: '10px 7px 10px 1px hsla(0, 0%, 0%, 0.23)',
          borderRadius: 8,
          mb: 2,
          '&:hover': {
            boxShadow: '12px 6px 15px 2px hsla(0, 0%, 0%, 0.3)'
          }
        }
      }
    }}
    {...props}
  />
)
