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
            {fixtures.map(f => {
                return (
                    <Box key={f.gameNumber} p={1}>
                        <FixtureLine fixture={f}/>
                    </Box>
                )
            })}
        </Column>
    )
}