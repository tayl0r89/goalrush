import { Avatar, Column, Typography, Box, Card, CardHeader, CardContent } from '@committed/components'
import React from 'react'
import { FixtureChoice } from '../types'
import { FixtureLine } from './FixtureLine'

export interface WeeksGamesProps {
    choices: FixtureChoice[]
}

export const WeeksGames: React.FC<WeeksGamesProps> = ({choices}) => {
    const users = choices.map(c => c.username)
                    .filter((val, ind, self) => self.indexOf(val) === ind)
    return (
    <>
        <Typography 
            variant='h1'
            marginBottom={2}>
                Current Selections
        </Typography>
        {users.length == 0 ?
            <Typography>
                Nobody has selected any games this week.
            </Typography>
            :
            <Column>
                {users.map(user => 
                    <Card m={2} key={user}>
                        <CardHeader 
                            avatar={<Avatar>{user.charAt(0)}</Avatar>}
                            title={user}/>
                        <CardContent>
                            {choices.filter(c => c.username === user)
                                .map(c => (
                                    <Box key={c.fixture.gameNumber} m={1}>
                                        <FixtureLine fixture={c.fixture}/>
                                    </Box>)
                                )}
                        </CardContent>
                    </Card>
                )}
            </Column>
        } 
    </>
    )
}