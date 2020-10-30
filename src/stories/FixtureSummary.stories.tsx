import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FixtureSummary } from '../components/FixtureSummary'

export default {
  title: 'Components/FixtureSummary',
  component: FixtureSummary,
} as Meta;

const Template: Story<{}> = (args) => <FixtureSummary {...args} />;

export const DefaultFixture = Template.bind({});