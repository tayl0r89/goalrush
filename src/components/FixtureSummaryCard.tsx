import React from 'react'
import { Avatar, Card, CardHeader, CardContent, Column, Row, Box, Typography } from '@committed/components'
import { FormIndicator } from './FormIndicator'
import { FixtureSummary } from '../types'

export interface FixtureSummaryProps {
    summary: FixtureSummary
}

interface TeamSideProps {
    team: string
    bttsForm: boolean[]
    bttsSideForm: boolean[]
    side: string
}

const TeamSide: React.FC<TeamSideProps> = ({team, bttsForm, bttsSideForm, side}) => {
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
                <Typography align="right">Last 6 Goal Rush</Typography>
            </Box>
            <Box width={0.6}>
                <FormIndicator form={bttsForm}/>
            </Box>
        </Row>
        <Row justifyContent="center">
            <Box width={0.4}>
                <Typography align="right">{"Last 6 " + side + " BTTS"}</Typography>
            </Box>
            <Box width={0.6}>
                <FormIndicator form={bttsSideForm}/>
            </Box>
        </Row>
    </Box>
}

export const FixtureSummaryList: React.FC<{summaries: FixtureSummary[]}> = ({summaries}) => (
    <Column>
        <Box m={2}>
            {summaries.map((summary, i) => <FixtureSummaryCard key={"s"+i} summary={summary}/>)}
        </Box>
    </Column>
)

export const FixtureSummaryCard: React.FC<FixtureSummaryProps> = ({
    summary
}) => {
    const {
        fixture, 
        homeTeamBTTS, 
        homeTeamHomeBTTS,         
        awayTeamBTTS,   
        awayTeamAwayBTTS
    } = summary
    return <Card>
        <CardHeader avatar={<Avatar>{fixture.number}</Avatar>}/>
        <CardContent>
            <Row justifyContent="center">
                <Box width={0.45}>
                    <TeamSide
                        team={fixture.home}
                        bttsForm={homeTeamBTTS}
                        bttsSideForm={homeTeamHomeBTTS}
                        side="home"
                    />
                </Box>
                <Box paddingTop={3} paddingBottom={3} width={0.1} alignSelf="center" alignContent="center">
                    <Typography align="center">vs</Typography>
                </Box>
                <Box width={0.45}>
                    <TeamSide 
                        team={fixture.away}
                        bttsForm={awayTeamBTTS}
                        bttsSideForm={awayTeamAwayBTTS}
                        side="away"
                    />
                </Box>
            </Row>
        </CardContent>
    </Card>
}