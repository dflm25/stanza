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

// Style
import '../../assets/scss/style.scss';

function Layout({ children }) {
  return <div className='app-layout'>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
