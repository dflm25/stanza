import React from 'react';

import CardContainer from '../index';

import { parseInfoAndGroup } from '../../../utils';
import data from './constants';

export default {
  title: 'Stanza/Card container',
  component: CardContainer,
};

const Template = (args) => (
  <div style={{ width: '920px', margin: '0 auto' }}>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <CardContainer {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});

const parseData = parseInfoAndGroup(data);
Default.args = {
  month: 'August 2018',
  events: parseData['August 2018'],
};
