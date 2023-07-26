import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'


const Register = ({...props}) => {

  const {loginOrRegister, setLoginOrRegister} = props
  
  const [dataIsReady, setDataIsReady] = useState({
    userNameIsReady: false,
    passwordIsReady: false,
    confirmPasswordIsReady: false,
  })
  const [allDataIsReady, setAllDataIsReady] = useState(false)
  const [registerData, setRegisterData] = useState({
    userName: '',
    password: '',
    confirmPassword: ''
  })

  const [showPassword, setShowPassword] = useState({
    showPassword: false,
    showConfirmPassword: false
  })

  const userNameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()


  const currentRegisterDataF = (e:any)=>{
     setRegisterData((prev=>({...prev,[e.target.name]:e.target.value} )))
  } 

  const resetRegisterDataF = ()=>{
    setRegisterData({
      userName: '',
      password: '',
      confirmPassword: ''   
  })

  setShowPassword({
    showPassword:false,
    showConfirmPassword:false
  })
}

useEffect(()=>{
// UserName check
  registerData.userName.length >4 
  ? 
  setDataIsReady(prev=>({...prev, userNameIsReady:true}))
  :
  setDataIsReady(prev=>({...prev, userNameIsReady:false}))

// Password check

  registerData.password.search(/[A-Z]/)<0 || registerData.password.search(/[a-z]/) < 0 || registerData.password.search(/[0-9]/) < 0 || registerData.password.search(/[@,!,#,$,%,&,*]/) < 0 || registerData.password.length < 8 
  ?
  setDataIsReady(prev=>({...prev, passwordIsReady:false}))
  :

  setDataIsReady(prev=>({...prev, passwordIsReady:true}))
  
// Confirm Password check
  registerData.password !== registerData.confirmPassword || registerData.confirmPassword==='' 
  ?
  setDataIsReady(prev=>({...prev, confirmPasswordIsReady:false}))
  : 
  setDataIsReady(prev=>({...prev, confirmPasswordIsReady:true}))




},[registerData])

  // All data is ready?
useEffect(()=>{
  

    dataIsReady.userNameIsReady && dataIsReady.passwordIsReady && dataIsReady.confirmPasswordIsReady
    ?
    setAllDataIsReady(true)
    :
    setAllDataIsReady(false)
},[dataIsReady])

const registerF = ()=>{

}

  return (
    <form className='w-full flex flex-col items-center justify-center  select-none '>

     
    <label htmlFor="user-name" className='w-full p-3 py-1 m-3 mb-1 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 cursor-pointer  '>
      <span className='w-2/5 text-right mr-3 text-xs whitespace-pre'>User Name:</span>
    <input ref={userNameRef.current} onChange={currentRegisterDataF}  className='w-2/3 outline-none p-1 bg-inherit' id='user-name' type="text" name='userName' placeholder='Filankes' />
    </label>

    <p className={!dataIsReady.userNameIsReady ? 'w-full p-3 py-1 mb-3 rounded-lg   text-red-400 text-center text-xs ': 'hidden'}>Minimum 5 simvol, Herfle baslamalidi</p>
   
   <label htmlFor="password" className='w-full p-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 cursor-pointer  '>
    <span className='w-2/5 text-right mr-3 text-xs'>Password:</span>
   <input onChange={currentRegisterDataF} className='w-2/3 outline-none p-1 bg-inherit' id='password' type={showPassword.showPassword? 'text':'password'} name='password' placeholder='********' />
   {
    showPassword.showPassword
    ?
    
   <FontAwesomeIcon onClick={()=>setShowPassword(prev=>({...prev,showPassword:false}))} icon={faEyeSlash} />
   :
   <FontAwesomeIcon  onClick={()=>setShowPassword(prev=>({...prev,showPassword:true}))} icon={faEye} />

   }
   </label>

   <p className={!dataIsReady.passwordIsReady ? 'w-full p-3 py-1 mb-3  text-center  text-red-400  text-xs ': 'hidden'}>Minimum 8 simvol, Boyukherf, kicik herf, reqem, !@#$%&*</p>

   <label htmlFor="confirm-password" className='w-full p-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 cursor-pointer  '>
    <span className='w-2/5 text-right mr-3 whitespace-pre text-xs'>Password Confirm:</span>
   <input onChange={currentRegisterDataF}  className='w-2/3 outline-none p-1 bg-inherit' id='confirm-password' type={showPassword.showConfirmPassword? 'text': "password"} name='confirmPassword' placeholder='********' />
   {
    showPassword.showConfirmPassword
    ?
    
    <FontAwesomeIcon onClick={()=>setShowPassword(prev=>({...prev,showConfirmPassword:false}))} icon={faEyeSlash} />
    :
    <FontAwesomeIcon  onClick={()=>setShowPassword(prev=>({...prev,showConfirmPassword:true}))} icon={faEye} />

   }
   </label>

   <p className={!dataIsReady.confirmPasswordIsReady ? 'w-full p-3 py-1 mb-3  text-center  text-red-400  text-xs ': 'hidden'}>Parollar eyni olmalidi</p>
    
   <input type="submit" value="SignUp" className={allDataIsReady? 'w-full px-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400  hover:scale-95 hover:shadow-none cursor-pointer': 'w-full px-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 cursor-not-allowed'} disabled = {!dataIsReady.userNameIsReady || !dataIsReady.passwordIsReady || !dataIsReady.confirmPasswordIsReady ? true:false }/>

   <div className='w-full p-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 '>

    <input onClick={resetRegisterDataF} type="reset" value="Clean" className='w-1/2 text-center m-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 cursor-pointer hover:scale-95 hover:shadow-none '/>
   <input onClick={()=>setLoginOrRegister('login')} type="button" value="Login" className='w-1/2 text-center m-2 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 cursor-pointer hover:scale-95 hover:shadow-none '/>

   </div>

  </form>
  )
}

export default Register