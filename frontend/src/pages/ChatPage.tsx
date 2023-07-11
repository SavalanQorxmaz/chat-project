import React, { useState } from 'react'
import SelectedChat from '../components/chat-components/SelectedChat'
import { useSelector, useDispatch } from 'react-redux'
import { selectID, setID } from '../redux/chatSlice'

const ChatPage = () => {

  const selectedID = useSelector(selectID)
  const dispatch = useDispatch()
console.log(selectedID)


  const getId = async()=> {
    if(selectedID === ''){
      await fetch('http://localhost:9000/getId',{
        method: 'Get',
        headers:{
          "Content-Type": "application/json",
        }
  
      })
      .then(res=>res.json())
      .then(res=>{
       dispatch(setID(res))
      console.log(res)
        return res
      })
      // .then(res=>console.log(res))
    }
    
  }
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='bg-green-500 mb-20 w-80'>
            <h1 className='text-center'>Unikal ID </h1>
            {
              selectedID===''?  <button onClick={getId}>Siferis et</button>
              :
              <h2>{selectedID}</h2>
            }

           {/* <h2>{selectedID}</h2> */}
          
      </div>
      <div className='bg-blue-500 w-80'>
        <SelectedChat/>
    </div>
    </div>
  )
}

export default ChatPage