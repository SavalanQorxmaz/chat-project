import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, selecTheme } from '../redux/themeSlice'
import { selectScreenSize } from '../redux/screenSlice'
import {faLightbulb} from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const dispatch = useDispatch()
    const selectedTheme = useSelector(selecTheme)

    // TEMANI DEYISMEK UCUN FUNKSIYA
    const changeThemeF = () => {
        if(selectedTheme === 'light'){
            dispatch(setTheme('dark'))
        }

        else {
            dispatch(setTheme('light'))  
        }
    }


  return (
 <div className='h-20'>
       <div className={selectedTheme === 'dark' ? '  h-20 whitespace-nowrap flex items-center text-sm text-slate-50 fixed z-50 top-0 left-0 w-full bg-slate-950 shadow-lg shadow-slate-400 ' : ' fixed z-50 top-0 left-0 w-full h-20 whitespace-nowrap flex items-center text-sm text-slate-950   bg-slate-50 shadow-lg shadow-slate-400'}>
        
        <div className='container'>
            <div className='flex justify-between'>
                <div className='flex'>
                <Link className='px-2 py-1 mr-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none ' to={'/'}>Home</Link>
                  <Link className='px-3 py-1 mr-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none ' to={'/chat'}>Chat</Link>
                  <Link className='px-3 py-1 mr-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none ' to={'/'}>Third Page</Link>
                  <Link className='px-3 py-1 mr-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none ' to={'/'}>Fourth Page</Link>
                  <Link className='px-3 py -1 mr-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none ' to={'/'}>Fifth Page</Link>
                </div>
            <FontAwesomeIcon onClick={changeThemeF} icon={faLightbulb} size ='xl' cursor={'pointer'}  />
        
            </div>
        </div>
        
            </div>
 </div>
  )
}

export default Header