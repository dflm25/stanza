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
import { BsSearch } from 'react-icons/bs';

// css
import './searchBar.scss';

function View() {
  return (
    <div className='search-bar-container'>
      <BsSearch />
      <input type='text' placeholder='SEARCH EVENTS' name='search' />
    </div>
  );
}

export default View;
