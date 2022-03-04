/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

import { RENDER_EVENTS, ADD_MESSAGE } from './constants';

const initialState = [];

const Messages = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case RENDER_EVENTS:
      return payload;
    case ADD_MESSAGE:
      return state.concat(payload);
    default:
      return state;
  }
};

export default Messages;
