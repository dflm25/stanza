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

import '../../assets/scss/style.scss';

function Layout({ children }) {
  return <div className='app-layout'>{children}</div>;
}

export default Layout;
