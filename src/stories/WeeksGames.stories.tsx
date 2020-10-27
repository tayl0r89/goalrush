import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { WeeksGames, WeeksGamesProps } from '../components/WeeksGames';
import { FixtureChoice } from '../types';

export default {
  title: 'Components/WeeksGames',
  components: WeeksGames,
} as Meta;

const createChoice = (user: string): FixtureChoice => ({
    username: user,
    fixture:{
        home: "Bolton",
        away: "Newport",
        number: 1
    }
})

const Template: Story<WeeksGamesProps> = (args) => <WeeksGames {...args} />;

export const DefaultFixture = Template.bind({});
DefaultFixture.args = {
    choices:[
        createChoice('Ste'),
        createChoice('Ste'),
        createChoice('Mum'),
        createChoice('Mum'),
        createChoice('Suzi'),
        createChoice('Suzi'),
        createChoice('Iain'),
        createChoice('Iain')
    ]
}