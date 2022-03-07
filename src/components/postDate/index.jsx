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
import moment from 'moment';

// css
import './postDate.scss';

function View({ eventTime }) {
  return (
    <div className='postDateContainer'>
      <span>{moment(eventTime).format('dddd kA')}</span>
      <span>{moment(eventTime).format('D MMM')}</span>
    </div>
  );
}

View.propTypes = {
  eventTime: PropTypes.string.isRequired,
};

View.propTypes = {};

export default View;
