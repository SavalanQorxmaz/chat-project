import { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import { setScreen } from "./redux/screenSlice";
import { useDispatch } from 'react-redux'
import ChatPage from "./pages/ChatPage";

function App() {

  const dispatch = useDispatch()
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

  useEffect(()=>{
    imOnline()
  .then(res=>console.log(res))
  },[])

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
    <>
  <Header />
 <Routes>
{/* <Route path ='/'    element={<Home/>}/> */}
<Route path ='/chat'    element={<ChatPage/>}/>
 </Routes>
 </>
  );
}

export default App;
