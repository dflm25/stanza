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

function NoFound() {
  return (
    <div
      className='mainbox'
      style={{ backgroundColor: '#20c997', height: '100vh' }}
    >
      <div className='err'>4</div>
      <div className='err2'>4</div>
      <div className='msg'>
        Pagina no encontrada
        <p>
          Ir al <Link to='/'>Inicio</Link>...
        </p>
      </div>
    </div>
  );
}

export default NoFound;
