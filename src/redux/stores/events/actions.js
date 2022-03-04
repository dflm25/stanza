/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

import { GET_EVENTS, RENDER_EVENTS } from './constants';

export const getMessages = (page, room) => ({
  type: GET_EVENTS,
});

export const renderEvents = (messages) => ({
  type: RENDER_EVENTS,
  payload: messages,
});
