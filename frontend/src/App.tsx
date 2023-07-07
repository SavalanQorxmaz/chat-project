import { useEffect } from "react";
import ChatPage from "./pages/ChatPage";

function App() {

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
    <div className="App">
      
    <ChatPage/>
      
    </div>
  );
}

export default App;
