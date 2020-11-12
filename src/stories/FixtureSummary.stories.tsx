import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FixtureSummaryCard, FixtureSummaryProps } from '../components/FixtureSummaryCard'

export default {
  title: 'Components/FixtureSummaryCard ',
  component: FixtureSummaryCard,
} as Meta

const Template: Story<FixtureSummaryProps> = (args) => <FixtureSummaryCard {...args} />;

export const DefaultFixture = Template.bind({})

DefaultFixture.args = {
  summary:{
    fixture:{
        home: "Bolton",
        away: "Bury",
        number: 1
    },
    homeTeamBTTS: [true, true, true, false, false, false],
    awayTeamBTTS: [true, true, true, false, false, false],
    homeTeamHomeBTTS: [true, true, true, false, false, false],
    awayTeamAwayBTTS: [true, true, true, false, false, false]
  }
}