


import Login from '../components/Login'
import Register from '../components/Register'
import { useState } from 'react'

type loginOrRegisterType = ''| 'login' | 'register'


const LoginRegister = () => {



const [loginOrRegister,setLoginOrRegister] = useState<loginOrRegisterType>('login')

  return (
   <div className=' w-full  flex items-center justify-center   text-sm  fixed z-50 top-20 left-0 overflow-auto' >

<div className='width-xs p-3 rounded-lg flex justify-center items-center flex-col   text-lg'  >
       



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