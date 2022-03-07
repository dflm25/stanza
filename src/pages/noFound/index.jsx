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
import { Link } from 'react-router-dom';

// components
import Layout from '../../components/layout';

// Style
import './noFound.scss';

function NoFound() {
  return (
    <Layout>
      <div className='nofound-container'>
        <div className='err'>404</div>
        <div className='msg'>
          Page no Found
          <p>
            Go to <Link to='/'>home</Link>...
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default NoFound;
