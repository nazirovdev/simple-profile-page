import React from 'react'
import PictureMe from '../../src/assets/images/me.jpeg'

export default function Home() {
  return (
    <div className='w-full h-screen bg-slate-900 pl-12'>
      <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col items-center gap-2'>
          <div className='rounded-full overflow-hidden w-28 md:w-32 shadow-md'>
            <img src={PictureMe} alt='Nazirovdev' />
          </div>
          <h1 className='font-bold text-xl md:text-4xl text-slate-300 cursor-default text-center'>Muhammad Nazir Azhari</h1>
          <h2 className='font-bold text-sm md:text-2xl text-slate-200 cursor-default text-center'>Software Development</h2>
        </div>
      </div>
    </div>
  )
}
