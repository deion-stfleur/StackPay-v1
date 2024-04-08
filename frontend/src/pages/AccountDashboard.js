import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import "../App.css"

function AccountDashboard() {




    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if (value.data?.user) {
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData();
        console.log('testing')
    }, [])


  return (
    <div>
        <div className='main-panel-container'>
        <div className="left-panel">
         
            <div className="filter">
               
                <label>Money</label>
            </div>


            <div className="filter">
               
                <label>Account</label>
            </div>



            <div className="filter">
               
                <label>Send/Recieve</label>
            </div>

            <div className="filter">
               
                <label>Log Out</label>
            </div>
          
          
           

           
        </div>
        <div className='right-panel'>
            
            <div>
                <div>
                    <p>Account Details</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default AccountDashboard;
