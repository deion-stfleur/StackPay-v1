import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import "../App.css"

function SendandRecieve() {
  return (
    <div>
        <div className='main-panel-container'>
        <div className="left-panel">

<div className="filter">
       
       <label>Activity</label>
   </div>
 
    <div className="filter">
       
        <label>Money</label>
    </div>

    <div className="filter">
       
        <label>Send/Recieve</label>
    </div>

    <div className="filter">
        <label>Account</label>
    </div>




    <div className="filter">
       <div onClick={handleSignOut}>
        <label>Log Out</label>
       </div>
    </div>
  
  
   

   
</div>
         

        </div>
    </div>
  )
}

export default SendandRecieve