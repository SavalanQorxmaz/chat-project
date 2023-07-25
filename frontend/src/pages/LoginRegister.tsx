

import { useDispatch, useSelector } from 'react-redux'
import { setTheme, selecTheme } from '../redux/themeSlice'

import Login from '../components/Login'
import Register from '../components/Register'
import { useState } from 'react'

type loginOrRegisterType = ''| 'login' | 'register'


const LoginRegister = () => {


    
    const dispatch = useDispatch()
    const selectedTheme = useSelector(selecTheme)

const [loginOrRegister,setLoginOrRegister] = useState<loginOrRegisterType>('')

  return (
   <div className=' w-full  flex items-center justify-center   text-sm  fixed z-50 top-28 left-0'>

<div className={selectedTheme === 'dark' ? 'width-xs p-10 rounded-lg flex justify-center items-center flex-col   text-lg bg-zinc-700 ' : 'width-xs p-10 rounded-lg flex justify-center items-center flex-col  text-lg   bg-zinc-200 '}  >
       

       <button onClick={()=>setLoginOrRegister('login')} className={loginOrRegister !==''?'hidden': 'w-full px-3 py-1 mb-4 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none '}>Login</button>
       <button onClick={()=>setLoginOrRegister('register')} className={loginOrRegister !==''?'hidden':'w-full px-3 py-1 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none '}>Register</button>


{
  loginOrRegister==='login'?
  <Login loginOrRegister ={loginOrRegister} setLoginOrRegister = {setLoginOrRegister}/>
  :
  ''
}
{
  loginOrRegister==='register'?
  <Register loginOrRegister ={loginOrRegister} setLoginOrRegister = {setLoginOrRegister}/>
  :
  ''
}

    </div>
   </div>
  )
}

export default LoginRegister