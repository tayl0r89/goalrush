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
            {home: "Bolton", away: "Newport", number: 1},
            {home: "Northampton", away: "Hull", number: 2},
            {home: "Milwall", away: "Gillingham", number: 3}
        ]}
    />
]

export const DefaultAppFrame = Template.bind({});
DefaultAppFrame.args = {
    children: content
}