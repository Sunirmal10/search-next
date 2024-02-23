'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;

  return (
    <div className='text-slate-500 flex px-10 pb-4 font-semibold justify-between sm:justify-start sm:space-x-10 sm:px-0'>
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className='flex flex-col items-center text-xs hover:underline'>
            <BsChevronLeft className='h-10 w-10 rounded-full p-2 text-slate-500 bg-gray-200 hover:bg-gray-300' />
            <p>Back</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className='flex flex-col items-center text-xs hover:underline'>
            <BsChevronRight className='h-10 w-10 rounded-full p-2 text-slate-500 bg-gray-200 hover:bg-gray-300' />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}