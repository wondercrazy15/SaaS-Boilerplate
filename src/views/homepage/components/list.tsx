import React from 'react';

import type { ListObj } from '../types';
import fetchList from '../utils/fetchList';
import Card from './card';
import Tag from './tag';

async function List() {
  const { list } = (await fetchList()) || [];

  return (
    <>
      <div className="my-4 flex flex-wrap justify-start gap-3">
        {list &&
          Array.isArray(list) &&
          list.map((item: ListObj) => (
            <Tag
              key={`_tag-${item.id}`}
              title={item.channel}
              className="px-5 py-2"
            />
          ))}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {list &&
          Array.isArray(list) &&
          list.map((item: ListObj) => (
            <Card data={item} key={`_list-card-${item.id}`} />
          ))}
      </div>
    </>
  );
}

export default List;
