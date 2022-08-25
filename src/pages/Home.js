import React ,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';


export const Home = () => {
  const [roomId , setRoomId] = useState('');
  const [username , setUserName] = useState('');
  const createNewRoom = (e) =>{
      e.preventDefault();
      const id = uuidv4();
      setRoomId(id);
      toast.success('created a new room');
      console.log(id);

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
                       />
                <input type="text" 
                       className='inputBox ' 
                       placeholder='User Name'
                       onChange={(e)=>setUserName(e.target.value)} 
                       value={username}
                       />
                <br></br>
                <button className='btn joinbtn' >Join</button>
                <span className='createInfo'> <br></br>
                  if you dont have an invite then create &nbsp; 
                  <a onClick={createNewRoom} href='#' className='createNewBtn'> Create Room </a>
                </span>
              </div>
            </div>
          </div>
}

export default Home;
