'use client';
import { useEffect } from 'react';
import { TbReload } from "react-icons/tb";

const  Error = ({ error, reset }) => {

  useEffect(() => {
    console.log('error', error);
  }, [error]);

  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl font-semibol text-center text-slate-400 mb-3'>Something went wrong!</h1>
      <button className=' flex flex-row gap-1 items-center font-semibold text-slate-400 text-xl'>
      <TbReload className="font-semibold" />
        Try again</button>
    </div>
  );
}

export default Error