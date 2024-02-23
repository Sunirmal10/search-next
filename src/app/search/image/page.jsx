import React from 'react'
import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';

const ImageSearchPage = async ({ searchParams }) => {
  const startIndex = searchParams.start || '1';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  if (!response.ok) throw new Error('Something went wrong');
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className='flex flex-col text-slate-500 justify-center items-center pt-14'>
      <h1 className='text-3xl mb-4'>
        No results found for {" "}
        <span className="italic font-semibold">
          {searchParams.searchTerm}
        </span>
      </h1>
      <p className='text-md'>
        Try searching the web or images for something, or else go{" "}
        <Link href='/' className='hover:text-blue-500 underline'>
          back
        </Link>
      </p>
    </div>
    );
  }

  return <div>{results && <ImageSearchResults results={data} />}</div>;
}

export default ImageSearchPage