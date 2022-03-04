/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

import { SET_LOADING, SET_RESPONSE } from './constants';

const initialState = {
  loading: false,
  error: false,
};

const Global = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    case SET_RESPONSE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default Global;
