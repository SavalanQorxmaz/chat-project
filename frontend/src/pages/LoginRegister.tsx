

import { useDispatch, useSelector } from 'react-redux'
import { setTheme, selecTheme } from '../redux/themeSlice'

import Login from '../components/Login'
import Register from '../components/Register'




const LoginRegister = () => {


    
    const dispatch = useDispatch()
    const selectedTheme = useSelector(selecTheme)



  return (
   <div className=' w-full h-96 flex items-center justify-center   text-sm  fixed z-50 top-20 left-0'>

<div className={selectedTheme === 'dark' ? 'width-xs p-10 rounded-lg flex justify-center items-center flex-col   text-lg bg-zinc-700 ' : 'width-xs p-10 rounded-lg flex justify-center items-center flex-col  text-lg   bg-zinc-200 '}  >
       

       <button className='w-full px-3 py-1 mb-4 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none '>Login</button>
       <button className='w-full px-3 py-1 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none '>Register</button>

    </div>
   </div>
  )
}

export default LoginRegister