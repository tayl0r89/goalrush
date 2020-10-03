import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FixtureLine, FixtureProps } from '../components/FixtureLine'

export default {
  title: 'Components/FixtureLine',
  component: FixtureLine,
} as Meta;

const Template: Story<FixtureProps> = (args) => <FixtureLine {...args} />;

export const DefaultFixture = Template.bind({});
DefaultFixture.args = {
  fixture:{
    homeTeam: "Bolton",
    awayTeam: "Newport",
    gameNumber: 1
  }
}