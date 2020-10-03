import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FixtureList } from '../components/FixtureList'
import AppFrame from '../AppFrame';

export default {
  title: 'Components/AppFrame',
  component: AppFrame,
} as Meta;

const Template: Story<{}> = (args) => <AppFrame {...args} />

const content: JSX.Element[] = [
    <FixtureList
        fixtures={[
            {homeTeam: "Bolton", awayTeam: "Newport", gameNumber: 1},
            {homeTeam: "Northampton", awayTeam: "Hull", gameNumber: 2},
            {homeTeam: "Milwall", awayTeam: "Gillingham", gameNumber: 3}
        ]}
    />
]

export const DefaultAppFrame = Template.bind({});
DefaultAppFrame.args = {
    children: content
}