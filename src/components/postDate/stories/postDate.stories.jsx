import React from 'react';

import PostDate from '../index';

export default {
  title: 'Stanza/Post Date',
  component: PostDate,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <PostDate {...args} />;

export const Default = Template.bind({});

Default.args = {
  eventTime: '2022-08-08 15:00',
};
