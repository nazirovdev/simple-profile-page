import React from 'react'
import { AiFillCode } from 'react-icons/ai'

export default function Projects() {
  return (
    <div className='w-full min-h-screen bg-slate-900 pl-8 md:pl-12'>
      <div className='flex flex-col p-8 gap-4'>
        <div className='flex items-center gap-2'>
          <AiFillCode className='text-2xl md:text-4xl text-slate-200' />
          <h1 className='font-extrabold text-xl md:text-4xl text-slate-200'>Projects</h1>
        </div>
        <div className='w-full h-1 bg-slate-600' />
        <div className='flex flex-col gap-6'>
          <article className='flex flex-col gap-2'>
            <div className='flex gap-2 items-start flex-col md:flex-row md:items-center'>
              <h3 className='font-bold text-slate-400 text-sm md:text-xl cursor-default'>
                E-Trashify
              </h3>
            </div>
            <ul className='list-disc text-slate-200 pl-10'>
              <li className='md:text-lg'>E-Trahsify salah satu aplikasi yang mirip semacam bank sampah</li>
              <li className='md:text-lg'>Multi Akses User (Admin dan Nasabah)</li>
              <li className='md:text-lg'>React Native, Redux Toolkit</li>
            </ul>
          </article>
          <article className='flex flex-col gap-2'>
            <div className='flex gap-2 items-start flex-col md:flex-row md:items-center'>
              <h3 className='font-bold text-slate-400 text-sm md:text-xl cursor-default'>
                App Discuss Dicoding
              </h3>
            </div>
            <ul className='list-disc text-slate-200 pl-10'>
              <li className='md:text-lg'>App Discuss Dicoding salah satu aplikasi yang digunakan untuk melakukan percakapan</li>
              <li className='md:text-lg'>React JS, Redux Toolkit, React Testing (Cypress), Storybook</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  )
}
