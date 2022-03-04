/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

import { combineReducers } from 'redux';
import Global from './stores/app/reducer';

const RootReducer = combineReducers({
  Global,
});

export default RootReducer;
