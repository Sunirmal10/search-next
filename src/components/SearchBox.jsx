'use client';
import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { IoMdSearch } from "react-icons/io";
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex border border-slate-100 rounded-full gap-2 shadow-lg  px-3 sm:px-4 py-1 w-auto md:w-[42rem] sm:ml-10 sm:mr-5 flex-grow max-w-3xl items-center'
    >
      <input
        type='text'
        className='w-full pl-2 focus:outline-none'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className='text-sm sm:text-2xl text-gray-500 cursor-pointer sm:mr-2'
        onClick={() => setTerm('')}
      />
      <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 border-l-[1px] cursor-pointer border-gray-300 mr-3 pl-4' />
      <IoMdSearch
        className='text-2xl hidden sm:inline-flex font-bold text-blue-500 cursor-pointer'
        onClick={handleSubmit}
      />
    </form>
  );
}

export default SearchBox