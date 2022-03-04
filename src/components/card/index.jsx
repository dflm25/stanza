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

import PostDate from '../postDate';

// css
import './card.scss';

function View({ eventTime, title, image }) {
  return (
    <div className='card-container'>
      <PostDate eventTime={eventTime} />
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default View;
