import React from 'react'
import Message from './Message'

const SelectedChat = () => {
  return (
    <div className=''>
            <h1 className="text-3xl font-bold underline text-center">
      CHAT
    </h1>

    <div className='w-full h-80 bg-slate-100'>
<Message/>
<Message/>
<Message/>
<Message/>
<Message/>
<Message/>

    </div>
    </div>
  )
}

export default SelectedChat