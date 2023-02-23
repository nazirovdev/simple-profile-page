import React from 'react'
import { MdSchool } from 'react-icons/md'

export default function Educations() {
  return (
    <div className='w-full min-h-screen bg-slate-900 pl-8 md:pl-12'>
      <div className='flex flex-col p-8 gap-4'>
        <div className='flex items-center gap-2'>
          <MdSchool className='text-2xl md:text-4xl text-slate-200' />
          <h1 className='font-extrabold text-xl md:text-4xl text-slate-200'>Educations</h1>
        </div>
        <div className='w-full h-1 bg-slate-600' />
        <article className='flex flex-col gap-2'>
          <div className='flex gap-2 items-start flex-col md:flex-row md:items-center'>
            <span className='text-slate-200 bg-slate-700 p-2 rounded-xl font-bold text-sm md:text-lg'>2019 - 2023</span>
            <p className='font-bold text-slate-400 text-sm md:text-lg cursor-default'>Universitas Sains dan Teknologi Komputer (UNISTEKOM)</p>
          </div>
          <ul className='list-disc text-slate-200 pl-10'>
            <li className='md:text-lg'>Informathics Engineering</li>
          </ul>
        </article>
        <article className='flex flex-col gap-2'>
          <div className='flex gap-2 items-start flex-col md:flex-row md:items-center'>
            <span className='text-slate-200 bg-slate-700 p-2 rounded-xl font-bold text-sm md:text-lg'>2016 - 2019</span>
            <p className='font-bold text-slate-400 text-sm md:text-lg cursor-default'>SMK Islamic Centre Baiturrahman Semarang (SKIMIC)</p>
          </div>
          <ul className='list-disc text-slate-200 pl-10'>
            <li className='md:text-lg'>Computer and Network Engineering</li>
          </ul>
        </article>
      </div>
    </div>
  )
}
