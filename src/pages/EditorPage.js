import React, {useState} from 'react'
import Client from '../components/Client';
import Editor from '../components/Editor';

export const EditorPage = () => {
  const [clients , setClients] = useState([
    {socketId:1 , username: 'Shiva Rekhan '},
    {socketId:2 , username: 'jhon '},
  ]);
  return<div className='mainWrap'>
    <div className='aside'>
      <div className='asideInner'>
        <div className='logo'>
          <img className='logoImage' src="/coding-svgrepo-com.svg" alt=" logo" />
        </div>
        <h3>Connected</h3>
        <div className='clientList'>
          {clients.map((client)=>(
            <Client 
                    key={client.socketId} 
                    username={client.username}
            />
          ))}
        </div>
      </div>
      <button className='btn copyBtn'>Copy Room Id</button>
      <button className='btn leaveBtn'>Leave</button>
    </div>
    <div className='editorWrap'><Editor/></div>
  </div>
  
}

export default EditorPage;