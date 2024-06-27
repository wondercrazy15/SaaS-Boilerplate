import React, { Fragment } from 'react'
import URLInput from './components/url-input'
import List from './components/list'

function Homepage() {
  return (
    <Fragment>
      <div className='bg-black text-white p-5 h-56'>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-2 items-center'>
            <h1 className=' text-[38px] font-bold mt-3'>Discover the Best Content</h1>
            <h2 className=' text-white/40 text-lg font-semibold'>Explore a curated collection of the latest and greatest articles, tutorials, and more.</h2>
            <URLInput />
          </div>
        </div>
      </div>

      <div className='container mx-auto my-10'>
        <List />
      </div>
    </Fragment>
  )
}

export default Homepage