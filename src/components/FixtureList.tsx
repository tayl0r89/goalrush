import React from 'react'
import { Fixture } from '../types'
import { Column, Box } from '@committed/components'
import { FixtureLine } from './FixtureLine'

export interface FixtureListProps {
    fixtures: Fixture[]
}

export const FixtureList: React.FC<FixtureListProps> = ({fixtures}) => {
    return (
        <Column>
            {fixtures
                .sort((a,b) => a.number > b.number ? 1 : -1)
                .map(f => {
                    return (
                        <Box key={f.number} p={1}>
                            <FixtureLine fixture={f}/>
                        </Box>
                    )
            })}
        </Column>
    )
}