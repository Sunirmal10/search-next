/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import PaginationButtons from './PaginationButtons';

const ImageSearchResults = ({ results }) => {
  return (
    <div className='sm:pb-24 pb-40 px-4 mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
        {results.items.map((result) => (
          <div className='mb-8' key={result.link}>
            <div className='group'>
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className='h-60 group-hover:shadow-xl rounded-2xl w-full object-contain transition-shadow duration-300'
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className='group-hover:underline truncate text-md font-medium text-gray-700 tracking-tighter'>
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className='group-hover:underline truncate text-gray-500 text-sm tracking-tighter'>
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-[1.75rem]">
        <PaginationButtons />
      </div>
    </div>
  );
}

export default ImageSearchResults