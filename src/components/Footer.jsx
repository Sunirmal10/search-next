
export default function Footer() {

  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <footer className='absolute bottom-0 left-0 text-xs sm:text-sm text-gray-500 bg-[#e8e8e8] w-full'>
      <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-4 tracking-tight space-y-7 sm:space-y-0'>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Advertising</li>
          <li className='hover:underline cursor-pointer'>Business</li>
          <li className='hover:underline cursor-pointer'>How Search works</li>
        </ul>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>Privacy</li>
          <li className='hover:underline cursor-pointer'>Terms</li>
          <li className='hover:underline cursor-pointer'>Settings</li>
        </ul>
      </div>
      <div className="flex justify-center items-center sm:justify-start py-4 mx-8 border-t-[1.5px] border-gray-300">
          Sunirmal Das © {year}
      </div>
    </footer>
  );
}