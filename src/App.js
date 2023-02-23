import { FaRegCopy, FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineSetting } from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Certificates from './pages/Certificates'
import Educations from './pages/Educations'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'

const ItemIcon = ({ Item, onClick }) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center" onClick={onClick}>
      <Item className='text-gray-300 text-3xl cursor-pointer hover:text-white' />
    </div>
  )
}

const SideNav = ({ onToggle }) => {
  return (
    <div className="w-12 h-screen bg-slate-800 flex flex-col justify-between fixed top-0 left-0 bottom-0">
      <div className="flex flex-col gap-1">
        <ItemIcon Item={FaRegCopy} onClick={onToggle} />
        <a href='https://github.com/nazirovdev' target='_blank' rel='noreferrer'><ItemIcon Item={FaGithub} /></a>
        <a href='https://www.linkedin.com/in/muhammad-nazir-azhari-55aa021a9/' target='_blank' rel='noreferrer'><ItemIcon Item={FaLinkedin} /></a>
      </div>
      <ItemIcon Item={AiOutlineSetting} />
    </div>
  )
}

const MenuItem = ({ name }) => {
  return (
    <div className={`h-5 w-full pl-5 py-3 flex items-center gap-2 cursor-pointer`}>
      <div className='w-5 h-4 flex items-center'>
        <SiJavascript className='text-yellow-300' />
      </div>
      <p className='text-sm text-white'>{name}</p>
    </div>
  )
}

function App() {
  const [toggle, setToggle] = useState(false)

  const onToggleHandle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <SideNav onToggle={onToggleHandle} />
      <div>
        <div className={`w-64 h-screen bg-slate-700 ${toggle ? 'left-12' : 'left-full'} fixed top-0`}>
          <div className='w-full flex flex-col'>
            <p className='text-white text-sm pl-5 py-2 font-bold bg-slate-800'>EXPLOLER</p>
            <NavLink to='/' className={({ isActive }) => `${isActive && 'bg-slate-600'} hover:bg-slate-600`}><MenuItem name='Home.js' /></NavLink>
            <NavLink to='/skills' className={({ isActive }) => `${isActive && 'bg-slate-600'} hover:bg-slate-600`}><MenuItem name='Skills.js' /></NavLink>
            <NavLink to='/certificates' className={({ isActive }) => `${isActive && 'bg-slate-600'} hover:bg-slate-600`}><MenuItem name='Certificates.js' /></NavLink>
            <NavLink to='/educations' className={({ isActive }) => `${isActive && 'bg-slate-600'} hover:bg-slate-600`}><MenuItem name='Educations.js' /></NavLink>
            <NavLink to='/projects' className={({ isActive }) => `${isActive && 'bg-slate-600'} hover:bg-slate-600`}><MenuItem name='Projects.js' /></NavLink>
            <NavLink to='/experiences' className={({ isActive }) => `${isActive && 'bg-slate-600'} hover:bg-slate-600`}><MenuItem name='Experiences.js' /></NavLink>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/educations' element={<Educations />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experiences' element={<Experiences />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
