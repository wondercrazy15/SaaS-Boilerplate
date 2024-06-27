import React, { Fragment } from 'react'
import fetchList from '../utils/fetchList'
import Card from './card'
import type { ListObj } from '../types'
import Tag from './tag'

async function List() {
  const { list } = await fetchList() || []

  return (
    <Fragment>
      <div className='flex justify-start gap-3 my-4 flex-wrap'>
        {
          (list && Array.isArray(list)) &&
          (list).map((item: ListObj, index: number) => (
            <Tag key={`${index}_tag-${item.id}`} title={item.channel} className='py-2 px-5' />
          ))
        }
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {
          (list && Array.isArray(list)) &&
          (list).map((item: ListObj, index: number) => (
            <Card data={item} key={`${index}_list-card-${item.id}`} />
          ))
        }
      </div>
    </Fragment>
  )
}

export default List