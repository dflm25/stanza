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
import PropTypes from 'prop-types';

// components
import PostDate from '../postDate';

// css
import './card.scss';

function View({ when, name, image }) {
  return (
    <div className='card-container'>
      <PostDate eventTime={when} />
      <img className='' src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

View.propTypes = {
  when: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

View.propTypes = {};

export default View;
