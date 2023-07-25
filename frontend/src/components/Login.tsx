import React, { useState } from 'react'


const Login = ({...props}) => {

  const {loginOrRegister, setLoginOrRegister} = props

  const [loginData, setLoginData] = useState({
    userName:'',
    password: ''
  })

  const loginF = ()=>{

  }



  return (
    <form className='w-full flex flex-col items-center justify-center  select-none '>

     
      <label htmlFor="user-name" className='w-full p-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 cursor-pointer  '>
        <span className='w-1/3 text-right mr-3'>User Name:</span>
      <input className='w-2/3 outline-none p-1 bg-inherit' id='user-name' type="text" placeholder='Filankes' />
      </label>
     
     <label htmlFor="password" className='w-full p-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 cursor-pointer  '>
      <span className='w-1/3 text-right mr-3'>Parol:</span>
     <input className='w-2/3 outline-none p-1 bg-inherit' id='password' type="password" placeholder='********' />
     </label>
      
     <input type="submit" value="Login" className='w-full px-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none cursor-pointer'/>

     <div className='w-full p-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 '>

      <input type="reset" value="Clean" className='w-1/2 text-center m-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 cursor-pointer hover:scale-95 hover:shadow-none '/>
     <input onClick={()=>setLoginOrRegister('register')} type="button" value="SignUp" className='w-1/2 text-center m-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 cursor-pointer hover:scale-95 hover:shadow-none '/>

     </div>

    </form>
  )
}

export default Login