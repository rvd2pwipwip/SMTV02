import React from 'react';
import ChannelCard from './ChannelCard';

export default {
  title: 'Components/ChannelCard',
  component: ChannelCard,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onSelect: { action: 'selected' },
  },
};

const Template = (args) => (
  <div style={{ padding: '2rem', background: 'var(--color-background)' }}>
    <ChannelCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Jazz Radio',
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  title: 'Classical Music & Opera - Live from Vienna',
};

export const Focused = Template.bind({});
Focused.args = {
  title: 'Blues Station',
};
Focused.parameters = {
  pseudo: { focus: true },
};

// Example of how it looks in a swimlane
export const InSwimlane = Template.bind({});
InSwimlane.decorators = [
  (Story) => (
    <div style={{ 
      padding: '2rem', 
      background: 'var(--color-background)',
      display: 'flex',
      gap: '1rem',
      overflowX: 'auto',
      width: '100%'
    }}>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  ),
];
InSwimlane.args = {
  title: 'World Music',
}; 