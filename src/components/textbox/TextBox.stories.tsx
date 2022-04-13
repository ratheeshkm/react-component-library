import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextBox from './TextBox';

export default {
  title: 'TextBox',
  component: TextBox,
  argTypes: {},
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args) => (
  <TextBox {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'First Name',
  name: 'textbox1',
};
