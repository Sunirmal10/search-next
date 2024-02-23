'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';
import { GoChevronLeft } from "react-icons/go";
import { useState } from 'react';

const SearchHeaderOptions = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const pathname = usePathname();
  const [showAllTab, setShowAllTab] = useState(false)

  const selectTab = (tab) => {
    tab === "Images" && setShowAllTab(true)
    tab === "All" && setShowAllTab(false)
    router.push(
      `/search/${tab === 'Images' ? 'image' : 'web'}?searchTerm=${searchTerm}`
    );
  };
  return (
    <div className='flex flex-wrap scale-75 sm:scale-100 space-x-2 select-none border-b pb-2 sm:pb-4 justify-center md:justify-start lg:justify-start lg:pl-48 text-gray-700 text-sm'>
      { showAllTab && <div onClick={()=>selectTab("All")} className={`flex items-center justify-center space-x-1 text-xs hover:bg-gray-200 rounded-3xl active:text-blue-50 cursor-pointer px-3 py-[10px] text-black ${pathname === '/search/web' && '!text-blue-600 !border-0 !bg-blue-100'}`}>
       <GoChevronLeft className="text-lg m-0 p-0 font-semibold"/>
        <p className="!ml-0">All</p>
      </div>}
      <div onClick={()=>selectTab("Images")} className={`flex items-center justify-center space-x-1 border-[1.5px] text-xs border-slate-300 hover:bg-gray-200 rounded-3xl active:text-blue-500 cursor-pointer px-3 py-[10px] text-black ${pathname === '/search/image' && '!text-blue-600 !border-0 !bg-blue-100 cursor-text'}`}>
        <p>Images</p>
      </div>
      <div className={`flex items-center justify-center space-x-1 border-[1.5px] text-xs border-slate-300 hover:bg-gray-200 rounded-3xl active:text-blue-500 cursor-pointer px-3 py-[10px] text-black ${pathname === '/search/video' && '!text-blue-600 !border-0 !bg-blue-100 cursor-text'}`}>
        <p>Videos</p>
      </div>
      <div className={`flex items-center justify-center space-x-1 border-[1.5px] text-xs border-slate-300 hover:bg-gray-200 rounded-3xl active:text-blue-500 cursor-pointer px-3 py-[10px] text-black ${pathname === '/search/shopping' && '!text-blue-600 !border-0 !bg-blue-100 cursor-text'}`}>
        <p>Shopping</p>
      </div>
      <div className={`flex items-center justify-center space-x-1 border-[1.5px] text-xs border-slate-300 hover:bg-gray-200 rounded-3xl active:text-blue-500 cursor-pointer px-3 py-[10px] text-black ${pathname === '/search/news' && '!text-blue-600 !border-0 !bg-blue-100 cursor-text'}`}>
        <p>News</p>
      </div>
   
    </div>
  );
}

export default SearchHeaderOptions