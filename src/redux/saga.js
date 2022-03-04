/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

import { all, fork } from 'redux-saga/effects';

// Sagas
import eventsSaga from './stores/events/saga';

export default function* root() {
  yield all([fork(eventsSaga)]);
}
