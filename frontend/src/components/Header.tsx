import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, selecTheme } from '../redux/themeSlice'
import { selectScreenSize } from '../redux/screenSlice'
import {faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { selectUser } from '../redux/userSlice'

const Header = () => {

    const dispatch = useDispatch()
    const selectedTheme = useSelector(selecTheme)
    let selectedUser = useSelector(selectUser)
    console.log(selectedUser)


   

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
        
        <div className='container px-3'>
            <div className='flex justify-between'>
                <div className='flex'>
                <Link className='px-2 py-1 mr-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none ' to={'/'}>Home</Link>
            
                </div>
                
             <div className='flex'>
             {selectedUser.userName === ''
                ?
<Link onClick={()=>console.log(selectedUser.userName)} className='px-3 py -1 mr-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none ' to={'/login-register'}>Login&nbsp;/&nbsp;Register</Link>
                :
                <Link className='px-3 py -1 mr-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none ' to={`/user/${selectedUser.userName}`}>{selectedUser.userName}</Link>

             }
            <FontAwesomeIcon onClick={changeThemeF} icon={faLightbulb} size ='xl' cursor={'pointer'}  />
             </div>
        
            </div>
        </div>
        
            </div>
 </div>
  )
}

export default Header