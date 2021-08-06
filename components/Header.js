import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from '../components/Avatar'
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(router.query.val)
  const search = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    router.push(`/search?val=${inputValue}`);
  };

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          width='120'
          height='40'
          onClick={() => router.push("/")}
          className='cursor-pointer'
          alt=''
        />
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className='flex-grow w-full focus:outline-none'
            type='text'
            value={inputValue}
          />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => setInputValue("")}
          />
          <svg
            className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'
            focusable='false'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#4285f4'
              d='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'
            ></path>
            <path fill='#34a853' d='m11 18.08h2v3.92h-2z'></path>
            <path
              fill='#fbbc05'
              d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'
            ></path>
            <path
              fill='#ea4335'
              d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'
            ></path>
          </svg>
          <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
          <button hidden type='submit' onClick={search}></button>
        </form>
        <Avatar 
        className='ml-auto'
        url="https://lh3.googleusercontent.com/ogw/ADea4I6WUr_Lsp1M9D4ciVMOzokRbvy7EMCmEbqngz7V=s32-c-mo"/>
      </div>
      <HeaderOptions/>
    </header>
  );
}

export default Header;
