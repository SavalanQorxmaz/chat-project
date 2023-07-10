import { useEffect } from "react";
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
  const getData = async ()=> {
    const data = await fetch('http://localhost:9000',{
      method: 'Get',
      
      headers:{
        "Content-Type": "application/json",
      }
    })
    .then(res=>res.json())
    return data
  }

  useEffect(()=>{
    getData()
  .then(res=>console.log(res))
  },[])
  


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
