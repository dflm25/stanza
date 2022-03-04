/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

// Constants
import { SET_LOADING, SET_RESPONSE } from './constants';

/**
 * Show/hide loading general to all app
 * @param  { bool } loading - Indcate if show/hide loading
 * @return { object } An action object with a type of SET_LOADING
 */
export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: { loading },
});

/**
 * Set response state
 * @param  { String } type - Response type
 * @param  { String } title - Response title to display
 * @param  { String } message - Response message to display
 * @param  { String } response - Response data
 * @param  { cb } message - Callback to send response
 * @return { object } An action object with a type of SET_RESPONSE
 */
export const setResponse = (type, title, message, response, cb) => {
  if (cb) {
    cb(type, response);
  }
  return { type: SET_RESPONSE, payload: { type, title, message } };
};
