import React from 'react'
import {
  Root,
  Header,
  Nav,
  NavListItem,
  Content,
  LayoutConfig,
} from '@committed/layout'
import { Typography, List } from '@committed/components'
import { TableChart, SportsSoccer } from '@material-ui/icons'

const config: Partial<LayoutConfig> = {
  // Only permanently show nav drawer at higher resolutions
  navVariant: {
    sm: 'temporary',
    lg: 'permanent',
  },
}

export const AppFrame: React.FC<{}> = ({children}) => {
  return (
    <Root config={config}>
      <Header>
        <Typography variant="h5">Goal Rush</Typography>
      </Header>
      <Nav>
        <List>
          <NavListItem text="Gameweek" icon={<SportsSoccer />} />
          <NavListItem text="League Table" icon={<TableChart />} />
        </List>
      </Nav>
      <Content>
        {children}
      </Content>
    </Root>
  )
}

export default AppFrame
