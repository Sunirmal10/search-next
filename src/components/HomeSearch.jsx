"use client";

import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { BsFillMicFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    setRandomSearchLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex w-full mt-3 sm:mt-5 mx-auto max-w-[80%] border border-zinc-200 px-5 py-2 sm:py-3 rounded-full shadow-md transition-shadow sm:max-w-xl h-full lg:max-w-2xl'
      >
        <IoMdSearch className='text-2xl text-gray-500 my-1 mr-3'/>
        <input
          type='text'
          className='flex-grow text-zinc-400 focus:text-slate-800 w-36 sm:w-auto text-xs sm:text-sm tracking-tighter focus:outline-none'
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search a topic or type a URL"
        />
        <BsFillMicFill className='text-lg text-blue-500  hover:cursor-pointer mt-2' />
      </form>
      <div className='flex space-y-2 sm:space-y-0 justify-center flex-row mt-8 sm:space-x-4 scale-75 sm:scale-100 font-medium'>
        <button
          className='bg-[#f8f9fa] rounded-lg text-sm text-gray-500 hover:ring-gray-200 focus:outline-none hover:bg-gray-200 active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
        disabled={randomSearchLoading}
          className='bg-[#f8f9fa] rounded-lg text-sm !mt-0 text-gray-500 hover:ring-gray-200 focus:outline-none hover:bg-gray-200 active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm'
          onClick={randomSearch}
        >
          {randomSearchLoading ? 'Loading...' : 'I am feeling lucky'}
        </button>
      </div>
    </>
  );
}