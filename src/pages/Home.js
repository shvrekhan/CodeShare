import React ,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { keyboard } from '@testing-library/user-event/dist/keyboard';


export const Home = () => {
  const navigate = useNavigate();
  const [roomId , setRoomId] = useState('');
  const [username , setUserName] = useState('');
  const createNewRoom = (e) =>{
      e.preventDefault();
      const id = uuidv4();
      setRoomId(id);
      toast.success('created a new room');
      console.log(id);

  }
  const joinRoom = ()=>{
     if(!roomId || !username){
      toast.error('ROOM ID or Username is required');
      return ;}

      // Redirect
      navigate("./editor/"+roomId,{
        state:{
          username,
        }
      });

  }

const handelInputEnter = (e)=>{
   console.log('event',e.code);
   if(e.code === 'Enter'){
    joinRoom();

   }
} 

  return <div className='homePageWrapper'>
            <div className='formWrapper'>
              <img src="/coding-svgrepo-com.svg" className='homeFormImage' alt="code logo"/>
              <h4 className='mainLabel'> Paste invitation Room Id</h4>
              <div className='inputGroup'>
                <input type="text" 
                       className='inputBox' 
                       placeholder='Room Id'
                       onChange={(e)=>setRoomId(e.target.value)} 
                       value={roomId}
                       onKeyUp={handelInputEnter}
                       />
                <input type="text" 
                       className='inputBox ' 
                       placeholder='User Name'
                       onChange={(e)=>setUserName(e.target.value)} 
                       value={username}
                       onKeyUp={handelInputEnter}
                       />
                <br></br>
                <button className='btn joinbtn' onClick={joinRoom}>Join</button>
                <span className='createInfo'> <br></br>
                  if you dont have an invite then create &nbsp; 
                  <a onClick={createNewRoom} href='#' className='createNewBtn'> Create Room </a>
                </span>
              </div>
            </div>
          </div>
}

export default Home;
