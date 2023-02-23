import React from 'react'
import { TbCertificate } from 'react-icons/tb'

export default function Certificates() {
  return (
    <div className='w-full min-h-screen bg-slate-900 pl-8 md:pl-12'>
      <div className='flex flex-col p-8 gap-4'>
        <div className='flex items-center gap-2'>
          <TbCertificate className='text-2xl md:text-4xl text-slate-200' />
          <h1 className='font-extrabold text-xl md:text-4xl text-slate-200'>Certificates</h1>
        </div>
        <div className='w-full h-1 bg-slate-600' />
        <div className='flex flex-col gap-6'>
          <article className='flex flex-col gap-2'>
            <div className='flex gap-2 items-start flex-col md:flex-row md:items-center'>
              <span className='text-slate-200 bg-slate-700 p-2 rounded-xl font-bold text-sm md:text-lg'>2023 - 2026</span>
              <a href='https://www.dicoding.com/certificates/MEPJKQ48LX3V' target='_blank' rel='noreferrer' className='font-bold text-slate-400 text-sm md:text-lg cursor-pointer hover:text-slate-200'>
                Menjadi React Web Developer Expert
              </a>
            </div>
          </article>
          <article className='flex flex-col gap-2'>
            <div className='flex gap-2 items-start flex-col md:flex-row md:items-center'>
              <span className='text-slate-200 bg-slate-700 p-2 rounded-xl font-bold text-sm md:text-lg'>2022 - 2025</span>
              <a href='https://www.dicoding.com/certificates/81P2GYYKQPOY' target='_blank' rel='noreferrer' className='font-bold text-slate-400 text-sm md:text-lg cursor-pointer hover:text-slate-200'>
                Belajar Fundamental Aplikasi Web dengan React
              </a>
            </div>
          </article>
          <article className='flex flex-col gap-2'>
            <div className='flex gap-2 items-start flex-col md:flex-row md:items-center'>
              <span className='text-slate-200 bg-slate-700 p-2 rounded-xl font-bold text-sm md:text-lg'>2022 - 2025</span>
              <a href='https://www.dicoding.com/certificates/MRZMDQ76RZYQ' target='_blank' rel='noreferrer' className='font-bold text-slate-400 text-sm md:text-lg cursor-pointer hover:text-slate-200'>
                Belajar Membuat Aplikasi Web dengan React
              </a>
            </div>
          </article>
          <article className='flex flex-col gap-2'>
            <div className='flex gap-2 items-start flex-col md:flex-row md:items-center'>
              <span className='text-slate-200 bg-slate-700 p-2 rounded-xl font-bold text-sm md:text-lg'>2021 - 2024</span>
              <a href='https://www.dicoding.com/certificates/98XWKGOJ0XM3' target='_blank' rel='noreferrer' className='font-bold text-slate-400 text-sm md:text-lg cursor-pointer hover:text-slate-200'>
                Belajar Fundamental Aplikasi Back-End
              </a>
            </div>
          </article>
          <article className='flex flex-col gap-2'>
            <div className='flex gap-2 items-start flex-col md:flex-row md:items-center'>
              <span className='text-slate-200 bg-slate-700 p-2 rounded-xl font-bold text-sm md:text-lg'>2021 - 2024</span>
              <a href='https://www.dicoding.com/academies/219/corridor' target='_blank' rel='noreferrer' className='font-bold text-slate-400 text-sm md:text-lg cursor-pointer hover:text-slate-200'>
                Menjadi Front-End Web Developer Expert
              </a>
            </div>
          </article>
          <article className='flex flex-col gap-2'>
            <div className='flex gap-2 items-start flex-col md:flex-row md:items-center'>
              <span className='text-slate-200 bg-slate-700 p-2 rounded-xl font-bold text-sm md:text-lg'>2021 - 2024</span>
              <a href='https://www.dicoding.com/certificates/RVZK1LQV4PD5' target='_blank' rel='noreferrer' className='font-bold text-slate-400 text-sm md:text-lg cursor-pointer hover:text-slate-200'>
                Belajar Dasar Git dengan GitHub
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
