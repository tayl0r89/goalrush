import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FixtureList, FixtureListProps } from '../components/FixtureList'

export default {
  title: 'Components/FixtureList',
  component: FixtureList,
} as Meta;

const Template: Story<FixtureListProps> = (args) => <FixtureList {...args} />;

export const DefaultFixture = Template.bind({});
DefaultFixture.args = {
  fixtures:[
    {homeTeam: "Bolton", awayTeam: "Newport", gameNumber: 1},
    {homeTeam: "Northampton", awayTeam: "Hull", gameNumber: 2},
    {homeTeam: "Milwall", awayTeam: "Gillingham", gameNumber: 3}
  ]
}