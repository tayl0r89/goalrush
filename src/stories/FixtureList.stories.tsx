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
    {home: "Bolton", away: "Newport", number: 1},
    {home: "Northampton", away: "Hull", number: 2},
    {home: "Milwall", away: "Gillingham", number: 3}
  ]
}