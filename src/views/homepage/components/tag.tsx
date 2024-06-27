import React from 'react'

function Tag({ title, className }: { title: string, className?: string }) {
  return (
    <div className={`${className} bg-[#f0f0f5] text-[#767680] rounded-3xl max-w-40 w-auto flex items-center`}>
      <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1H9.75736C10.8182 1 11.8356 1.42143 12.5858 2.17157L21.5858 11.1716C23.1479 12.7337 23.1479 15.2663 21.5858 16.8284L16.8284 21.5858C15.2663 23.1479 12.7337 23.1479 11.1716 21.5858L2.17157 12.5858C1.42143 11.8356 1 10.8182 1 9.75736V5ZM5 3C3.89543 3 3 3.89543 3 5V9.75736C3 10.2878 3.21071 10.7965 3.58579 11.1716L12.5858 20.1716C13.3668 20.9526 14.6332 20.9526 15.4142 20.1716L20.1716 15.4142C20.9526 14.6332 20.9526 13.3668 20.1716 12.5858L11.1716 3.58579C10.7965 3.21071 10.2878 3 9.75736 3H5Z" fill="#767680" /> <path d="M9 7.5C9 8.32843 8.32843 9 7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5Z" fill="#767680" /> </g></svg>
      <span className='font-medium capitalize text-xs'>{title}</span>
    </div>
  )
}

export default Tag