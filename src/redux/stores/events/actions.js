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

export const getEvents = (cb) => ({
  type: GET_EVENTS,
  cb,
});

export const renderEvents = (messages) => ({
  type: RENDER_EVENTS,
  payload: messages,
});
