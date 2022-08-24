import React from 'react'

export const Home = () => {
  return <div className='homePageWrapper'>
            <div className='formWrapper'>
              <img src="/coding-svgrepo-com.svg" className='homeFormImage' alt="code logo"/>
              <h4 className='mainLabel'> Paste invitation Room Id</h4>
              <div className='inputGroup'>
                <input type="text" className='inputBox' placeholder='Room Id'/>
                <input type="text" className='inputBox ' placeholder='User Name'/>
                <br></br>
                <button className='btn joinbtn' >Join</button>
                <span className='createInfo'> <br></br>
                  if you dont have an invite then create &nbsp; 
                  <a href='#' className='createNewBtn'> Create Room </a>
                </span>
              </div>
            </div>
          </div>
}

export default Home;
