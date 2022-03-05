/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

import React from 'react';

// Components
import Card from '../card';

// css
import './cardContainer.scss';

function View({ events, month }) {
  return (
    <div className='card-container-month'>
      <h2>{month}</h2>
      <div className='card-container-group'>
        {events &&
          events
            .slice(0, 6)
            .map((item, i) => <Card key={`item-card-${i}`} {...item} />)}
      </div>
    </div>
  );
}

export default View;
