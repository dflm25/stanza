/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

import { put, call, takeLatest } from 'redux-saga/effects';

// Redux
import { setResponse } from '../app/actions';
import { renderEvents } from './actions';

// Utils
import request from '../../../utils/request';

// Constants
import { GET_EVENTS } from './constants';

function* getEvents(action) {
  const { cb } = action;

  const url = `/message/paginate`;
  const requestOptions = { method: 'GET' };

  try {
    const response = yield call(request, url, requestOptions);
    yield put(renderEvents(response));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

/**
 * Declare all component sagas
 */
export default function* rootSaga() {
  yield takeLatest(GET_EVENTS, getEvents);
}
