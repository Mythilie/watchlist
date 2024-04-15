import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';


const Body = ({user}) => {

  
  return (
    <div className='flex grid grid-flow-col'>
        <Sidebar user={user}/>
        <Outlet/>
    </div>
  )
}

export default Body