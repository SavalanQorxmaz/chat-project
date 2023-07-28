import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch  } from 'react-redux'
import { selectUser, setUser } from '../redux/userSlice'
import swal from 'sweetalert2'

const User = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectedUser = useSelector(selectUser)
    const {user} = useParams()

    const signoutF =()=>{

      swal.fire({
        showCancelButton: true,
        showConfirmButton: true,
        icon: 'warning',
        title: 'Silmek istediyinizden eminsiz?',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      })
      .then(confirm=>{
        if(confirm.isConfirmed){
      
        dispatch(setUser({userName:'', password:''}))
        navigate('/')
      }
    })    
          
  }   
        
    
    

  const deleteUser = ()=>{


    swal.fire({
      showCancelButton: true,
      showConfirmButton: true,
      icon: 'warning',
      title: 'Silmek istediyinizden eminsiz?',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    })
    .then(confirm=>{
      if(confirm.isConfirmed){
         fetch('http://localhost:9000/delete-user',{
          method: 'post',
          body: JSON.stringify(selectedUser),
          headers:{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': 'http://localhost:9000',
            'Access-Control-Allow-Headers': '*',
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT",
            'Accept': 'application/json'
          },
          mode: 'cors'
        })
        .then(res=>res.json())
        .then(res=>{
          console.log(res)
          if(res==0){
            swal.fire({
              icon: 'error',
              title: 'Ugursuz',
              text: ` Xeta bas verdi`,
              confirmButtonText: 'OK'
             
            })
            return false
          }
          else if(res==1){
            swal.fire({
              icon: 'success',
              title: 'Ugurlu',
              text: ` hesab silindi`,
              confirmButtonText: 'OK'
            })
          
           
    return true
          }
        })
        .then(res=>{
    if(res){
      dispatch(setUser({userName:'', password:''}))
      navigate('/')
    }
         
        })
      
      }
    })

    

  }



  return (
    <div className='w-full p-3 py-1 m-3 rounded-lg flex flex-col items-center justify-center transition-all shadow shadow-slate-400 '>
      <h1 className='font-bold text-lg'>{user} istifadecinin profili</h1>


      <button onClick={signoutF} className='w-full p-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 hover:scale-95 hover:shadow-none cursor-pointer  '>Cixis</button>


      <button onClick={deleteUser} className='w-full p-3 py-1 m-3 rounded-lg flex items-center justify-center transition-all shadow shadow-slate-400 hover:scale-95 hover:shadow-none cursor-pointer  '>Hesabi sil</button>
    
   </div>
  )
}

export default User