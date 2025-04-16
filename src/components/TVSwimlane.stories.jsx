import React from 'react';
import TVSwimlane from './TVSwimlane';

export default {
  title: 'Components/TVSwimlane',
  component: TVSwimlane,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <TVSwimlane {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Featured Channels',
  items: [
    { id: 1, title: 'Jazz Radio' },
    { id: 2, title: 'Classical FM' },
    { id: 3, title: 'Blues Station' },
    { id: 4, title: 'Smooth Jazz' },
    { id: 5, title: 'World Music' },
  ],
  onItemSelect: (item) => console.log('Selected channel:', item),
};

export const Empty = Template.bind({});
Empty.args = {
  title: 'No Channels',
  items: [],
  onItemSelect: (item) => console.log('Selected channel:', item),
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  title: 'Single Channel',
  items: [
    { id: 1, title: 'Jazz Radio' },
  ],
  onItemSelect: (item) => console.log('Selected channel:', item),
}; 