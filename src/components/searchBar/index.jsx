/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

// css
import './searchBar.scss';

function View({ filter }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => filter(data);

  return (
    <form className='search-bar-container' onSubmit={handleSubmit(onSubmit)}>
      <BsSearch />
      <input
        type='text'
        placeholder='SEARCH EVENTS'
        {...register('query', { minLength: 3 })}
      />
      {errors.query && errors.query.type === 'minLength' && (
        <span className='error'>Min length 3</span>
      )}
    </form>
  );
}

export default View;
