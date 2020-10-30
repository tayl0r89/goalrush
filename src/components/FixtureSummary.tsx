import React from 'react'
import { Avatar, Card, CardHeader, CardContent, Row, Box, Typography } from '@committed/components'
import { FormIndicator } from './FormIndicator'

interface TeamSideProps {
    team: string
}

const TeamSide: React.FC<TeamSideProps> = ({team}) => {
    return <Box>
        <Typography 
            align="center" 
            variant="h3"
            marginBottom={3}
        >
            {team}
        </Typography>
        <Row justifyContent="center">
            <Box width={0.4}>
                <Typography align="right">Last 6 Goal Rush:</Typography>
            </Box>
            <Box width={0.6}>
                <FormIndicator form={[true, false, true, false, true, false]}/>
            </Box>
        </Row>
        <Row justifyContent="center">
            <Box width={0.4}>
                <Typography align="right">Last 6 BTTS:</Typography>
            </Box>
            <Box width={0.6}>
                <FormIndicator form={[true, false, true, false, true, false]}/>
            </Box>
        </Row>
    </Box>
}

export const FixtureSummary: React.FC<{}> = ({}) => {
    return <Card>
        <CardHeader avatar={<Avatar>1</Avatar>}/>
        <CardContent>
            <Row justifyContent="center">
                <Box width={0.45}>
                    <TeamSide
                        team="Bolton"
                    />
                </Box>
                <Box paddingTop={3} paddingBottom={3} width={0.1} alignSelf="center" alignContent="center">
                    <Typography align="center">vs</Typography>
                </Box>
                <Box width={0.45}>
                    <TeamSide 
                        team="Bury"
                    />
                </Box>
            </Row>
        </CardContent>
    </Card>
}