/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

import React, { useState, useEffect } from 'react';

// components
import Layout from '../../components/layout';
import SearchBar from '../../components/searchBar';
import Card from '../../components/card';
import CardContainer from '../../components/cardContainer';

// Utils
import { parseInfoAndGroup, filterData } from '../../utils';

function View({ eventActions: { getEvents } }) {
  const [events, setEvents] = useState(false);
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    getEvents(async (type, response) => {
      if (type === 'success') {
        setEvents(parseInfoAndGroup(response));
        setCopy(response);
      }
    });
  }, []);

  const filterQuery = (query) => {
    const filtered = filterData(copy, query);
    setEvents(filtered);
  };

  return (
    <Layout>
      <SearchBar filter={filterQuery} />
      <div className='cards-container'>
        {Object.keys(events).map((keyName, i) => (
          <CardContainer
            key={`item-container${keyName}`}
            month={keyName}
            events={events[keyName]}
          />
        ))}
      </div>
    </Layout>
  );
}

export default View;
