import React from 'react'
import { GiSwordsEmblem } from 'react-icons/gi'

export default function Skills() {
  return (
    <div className='w-full min-h-screen bg-slate-900 pl-8 md:pl-12'>
      <div className='flex flex-col p-8 gap-4'>
        <div className='flex items-center gap-2'>
          <GiSwordsEmblem className='text-4xl text-slate-200' />
          <h1 className='font-extrabold text-xl md:text-3xl text-slate-200'>Skills</h1>
        </div>
        <div className='w-full h-1 bg-slate-600' />
        <h2 className='font-extrabold text-xl md:text-2xl text-slate-200'>General Tech Stack</h2>
        <div className='w-full h-1 bg-slate-600' />
        <ul className='list-disc text-slate-200 pl-10'>
          <li>Web Development (Frontend & Backend)</li>
          <li>Mobile Development (Frontend & Backend)</li>
          <li>Fullstack Javascript</li>
        </ul>
        <div className='w-full h-1 bg-slate-600' />
        <h2 className='font-extrabold text-xl md:text-2xl text-slate-200'>Programming Languages</h2>
        <ul className='list-disc text-slate-200 pl-10'>
          <li>Javascript / ES6</li>
          <li>PHP</li>
          <li>Dart</li>
          <li>Kotlin</li>
          <li>Visual Basic</li>
        </ul>
        <div className='w-full h-1 bg-slate-600' />
        <h2 className='font-extrabold text-xl md:text-2xl text-slate-200'>Javascript UI</h2>
        <ul className='list-disc text-slate-200 pl-10'>
          <li>React</li>
        </ul>
        <div className='w-full h-1 bg-slate-600' />
        <h2 className='font-extrabold text-xl md:text-2xl text-slate-200'>Framework (Fullstack)</h2>
        <ul className='list-disc text-slate-200 pl-10'>
          <li>Next.js</li>
          <li>Hapi.js</li>
          <li>Node.js</li>
        </ul>
        <div className='w-full h-1 bg-slate-600' />
        <h2 className='font-extrabold text-xl md:text-2xl text-slate-200'>Databases</h2>
        <ul className='list-disc text-slate-200 pl-10'>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
        <div className='w-full h-1 bg-slate-600' />
        <h2 className='font-extrabold text-xl md:text-2xl text-slate-200'>Code Review</h2>
        <ul className='list-disc text-slate-200 pl-10'>
          <li>ESLint</li>
        </ul>
        <div className='w-full h-1 bg-slate-600' />
        <h2 className='font-extrabold text-xl md:text-2xl text-slate-200'>State Management</h2>
        <ul className='list-disc text-slate-200 pl-10'>
          <li>Redux</li>
        </ul>
        <div className='w-full h-1 bg-slate-600' />
        <h2 className='font-extrabold text-xl md:text-2xl text-slate-200'>IDE</h2>
        <ul className='list-disc text-slate-200 pl-10'>
          <li>VSCode</li>
        </ul>
        <div className='w-full h-1 bg-slate-600' />
        <h2 className='font-extrabold text-xl md:text-2xl text-slate-200'>Build Tools</h2>
        <ul className='list-disc text-slate-200 pl-10'>
          <li>Webpack</li>
        </ul>
      </div>
    </div>
  )
}
