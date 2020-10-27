import React from 'react'
import { Row, Box, Divider, Typography } from '@committed/components'
import { Fixture } from '../types'

export interface FixtureProps {
  fixture: Fixture
}

export const FixtureLine: React.FC<FixtureProps> = ({fixture}) => {
  return (
    <Box border={1} borderRadius={16} borderColor="rgba(0, 0, 0, 0.12)">
      <Row>
        <Box p={3} width={0.1}>
          <Typography>{fixture.number}</Typography>
        </Box>
        <Divider orientation="vertical"/>
        <Box width={0.9}>
          <Row justifyContent="center">
            <Box p={3} width={0.45}>
              <Typography align="right">{fixture.home}</Typography>
            </Box>
            <Box paddingTop={3} paddingBottom={3} width={0.1}>
              <Typography align="center">vs</Typography>
            </Box>
            <Box p={3} width={0.45}>
              <Typography align="left">{fixture.away}</Typography>
            </Box>
          </Row>
        </Box>
      </Row>
    </Box>
  )
}
