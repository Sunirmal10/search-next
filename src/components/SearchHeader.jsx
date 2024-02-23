import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import { transform } from 'next/dist/build/swc';

const SearchHeader = () => {
  return (
    <header className='sticky top-0 bg-white p-0'>
      <div className='flex w-full px-5 pb-5 pt-4 items-center justify-between tracking-tight text-sm '>
        <Link href='/'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
            alt='Google Logo'
            width={100}
            height={35}
            priority
            style={{ width: 'auto' }}
          />
        </Link>
        <div className='flex-1'>
          <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-3 mr-3'>
          <RiSettings3Line className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
          <TbGridDots className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
        </div>
        <button className='bg-red-500 text-white px-6 py-2 font-medium rounded hover:brightness-105 hover:shadow-md transition-shadow ml-2'>
          Sign in
        </button>
      </div>
    </header>
  )
}

export default SearchHeader