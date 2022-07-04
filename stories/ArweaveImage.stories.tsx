import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IArweaveImageProps, ArweaveImage } from '../src';

const meta: Meta = {
  title: 'ArweaveImage',
  component: ArweaveImage,
  argTypes: {
    hash: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IArweaveImageProps> = args => <ArweaveImage {...args} style={{ width: "200px" }} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  hash: 'o-z1Ea6xXyERnujaFyMZwHlsr2SLwnVyDqjP88V2zeE',
};