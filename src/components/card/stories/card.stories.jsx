import React from 'react';

import Card from '../index';

export default {
  title: 'Stanza/Card',
  component: Card,
};

const Template = (args) => (
  <div style={{ width: '330px' }}>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  eventTime: '2022-08-08 15:00',
  title: 'Lakers at Timberwolves',
  image:
    'https://estaticos-cdn.sport.es/clip/acc8d41e-e09c-41a2-b3f7-81758ce59ab2_alta-libre-aspect-ratio_default_0.jpg',
};
