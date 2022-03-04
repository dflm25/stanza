import React from 'react';

import SearchBar from '../index';

export default {
  title: 'Stanza/Search Bar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});

Default.args = {};
