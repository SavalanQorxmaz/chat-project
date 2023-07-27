import { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import { setScreen } from "./redux/screenSlice";
import ChatPage from "./pages/ChatPage";
import LoginRegister from "./pages/LoginRegister";
import { useDispatch, useSelector } from 'react-redux'
import {  selecTheme } from './redux/themeSlice'

function App() {

  const dispatch = useDispatch()
  const selectedTheme = useSelector(selecTheme)
  // EKRAN OLCUSUNU MUEYYEN ETMEK UCUN
  window.addEventListener('resize', () => {
    dispatch(setScreen(document.documentElement.offsetWidth))
  })



  const imOnline = async ()=> {
    const data = await fetch('http://localhost:9000/getData',{
      method: 'Post',
      // body:JSON.stringify({}),
      headers:{
        "Content-Type": "application/json",
      }
    })
    // .then(res=>res.json())
    return data
  }

  // useEffect(()=>{
  //   imOnline()
  // .then(res=>console.log(res))
  // },[])

  const sendData = async () => {
    await fetch('http://localhost:9000',{
      method: 'Post',
      
      body: JSON.stringify({id: '100',message: 'salam'}),
      headers:{
        "Content-Type": "application/json",
      }
    })
  }
  


  return (
    <div className={selectedTheme === 'dark' ? 'w-full h-screen overflow-y-auto text-sm text-slate-50  bg-slate-950 shadow-lg shadow-slate-400 ' : 'w-full h-screen overflow-y-auto text-sm text-slate-950   bg-slate-50 shadow-lg shadow-slate-400'}>
  <Header />
 <Routes>
{/* <Route path ='/'    element={<Home/>}/> */}
<Route path ='/login-register'    element={<LoginRegister/>}/>
 </Routes>
 </div>
  );
}

export default App;
