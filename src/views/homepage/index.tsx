import React from 'react';

import List from './components/list';
import URLInput from './components/url-input';

function Homepage() {
  return (
    <>
      <div className="h-56 bg-black p-5 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-2">
            <h1 className=" mt-3 text-[38px] font-bold">
              Discover the Best Content
            </h1>
            <h2 className=" text-lg font-semibold text-white/40">
              Explore a curated collection of the latest and greatest articles,
              tutorials, and more.
            </h2>
            <URLInput />
          </div>
        </div>
      </div>

      <div className="container mx-auto my-10">
        <List />
      </div>
    </>
  );
}

export default Homepage;
