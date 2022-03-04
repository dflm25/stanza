/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

import swal from 'sweetalert';

// Utils
import { HOST } from './enviroment';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const errorResponse = await parseJSON(response);
  const error = new Error(errorResponse.message);

  if (response.status === 500 || response.status === 401) {
    swal(errorResponse.error, errorResponse.message);
  }

  throw error;
}

async function handleError(err) {
  const error = new Error(err.message);

  throw error;
}

export default async function request(url, receivedOptions) {
  const options = { ...receivedOptions };
  let baseURL = HOST;

  // In case of use external URL
  if (options.externalUrl) {
    baseURL = '';
  } else {
    // Default headers
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // Add Headers for request
    if (typeof options.headers !== 'undefined' && options.headers) {
      headers = { ...headers, ...options.headers };
    }

    options.headers = headers;
  }

  // Execute request
  return fetch(baseURL.concat(url), options)
    .catch(handleError)
    .then(checkStatus)
    .then(parseJSON);
}
