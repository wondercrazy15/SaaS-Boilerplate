import React from 'react';

import type { ListObj } from '../types';
import Tag from './tag';

interface Props {
  data: ListObj;
}

function Card({ data }: Props) {
  const imgId = Math.floor(Math.random() * 100);
  return (
    <div className="min-h-[180px] max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
      <div className="h-[180px] w-full bg-[#767680]">
        <img
          className="rounded-t-lg"
          src={`https://picsum.photos/id/${imgId}/382/180`}
          alt={data.owner}
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-1 overflow-hidden text-ellipsis text-nowrap text-base font-bold tracking-tight text-gray-900">
            {data.title}
          </h5>
        </a>
        <div className="mb-2 flex items-center justify-start gap-3">
          <div className="flex items-center justify-start">
            <svg
              className="mr-1 size-4"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#767680"
                  d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
                />
              </g>
            </svg>
            <span className="text-sm font-medium text-[#767680]">
              {data.owner}
            </span>
          </div>

          <div className="flex items-center justify-start">
            <svg
              className="mr-1 size-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                  stroke="#767680"
                  strokeWidth="1.5"
                />{' '}
                <path
                  d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  stroke="#767680"
                  strokeWidth="1.5"
                />{' '}
              </g>
            </svg>
            <span className="text-sm font-medium text-[#767680]">
              {data.id}
            </span>
          </div>
        </div>
        <p className="mb-3 text-sm font-normal text-gray-700 ">{data.title}</p>

        <div className="flex flex-wrap items-end justify-start gap-2">
          <Tag
            key={`${1}_tag-${data.id}`}
            title={data.channel}
            className="px-3 py-1"
          />
          <Tag
            key={`${2}_tag-${data.id}`}
            title={data.channel}
            className="px-3 py-1"
          />
          <Tag
            key={`${3}_tag-${data.id}`}
            title={data.channel}
            className="px-3 py-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
