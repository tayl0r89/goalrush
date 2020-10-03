import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ResultsTable, ResultsTableProps } from '../components/ResultsTable';

export default {
  title: 'Components/ResultsTable',
  component: ResultsTable,
} as Meta;

const Template: Story<ResultsTableProps> = (args) => <ResultsTable {...args} />;

export const DefaultResultsTable = Template.bind({});
DefaultResultsTable.args = {
  results:[
      {player: "Mum", points: 1, goals: 4},
      {player: "Suzi", points: 1, goals: 3},
      {player: "Random", points: 1, goals: 3},
      {player: "Iain", points: 1, goals: 3},
      {player: "Ste", points: 0, goals: 0}
  ]
}