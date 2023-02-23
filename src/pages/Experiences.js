import React from 'react'
import { MdOutlineWork } from 'react-icons/md'

export default function Experiences() {
  return (
    <div className='w-full min-h-screen bg-slate-900 pl-8 md:pl-12'>
      <div className='flex flex-col p-8 gap-4'>
        <div className='flex items-center gap-2'>
          <MdOutlineWork className='text-2xl md:text-4xl text-slate-200' />
          <h1 className='font-extrabold text-xl md:text-4xl text-slate-200'>Experiences</h1>
        </div>
        <div className='w-full h-1 bg-slate-600' />
        <h1 className='text-slate-200 font-bold text-sm'>Comming Soon ...</h1>
      </div>
    </div>
  )
}
