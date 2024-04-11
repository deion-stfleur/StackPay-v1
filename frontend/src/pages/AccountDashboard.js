import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { FaRegClock, FaUserGroup } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { MdOutlinePayment, MdAccountCircle } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";


function AccountDashboard() {

const [selectedFilter, setSelectedFilter] = useState('activity')
const navigate = useNavigate();


const handleClick = (filter) => {
    setSelectedFilter(filter);
    navigate(`#${filter}`);
}



useEffect(() => {
    // Check if there's a hash in the URL and update the selectedFilter accordingly
    const hash = window.location.hash.substr(1);
    if (hash) {
      setSelectedFilter(hash);
    }
  }, []);




    const [user, setUser] = useState(null);

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

    const handleSignOut = () => {

        try {
            async function signOut() {
                const { error } = await supabase.auth.signOut()
                if (error) {
                    throw error;
                }    
              }
              
              console.log('User signed Out')
              navigate('/')
        } catch (error) {
            console.log('Error user can not sign out', error.message)
        }
    }


  return (
    <div>
        <div className='main-panel-container'>
        <div className="left-panel">

        <div className="filter" onClick={() => handleClick('activity')}>
                <FaRegClock className='dash-logo' />
               <label>Activity</label>
           </div>
         
            <div className="filter" onClick={() => handleClick('money')}>
                <BsBank2 className='dash-logo' />
                <label>Money</label>
            </div>

            <div className="filter" onClick={() => handleClick('send-recieve')}>
                 <MdOutlinePayment className='dash-logo' />
                <label>Send/Recieve</label>
            </div>

            <div className="filter" onClick={() => handleClick('groups')}>
                 <FaUserGroup className='dash-logo' />
                <label>Groups</label>
            </div>

            <div className="filter" onClick={() => handleClick('account')}>
                <MdAccountCircle className='dash-logo' />
                <label>Account</label>
            </div>




            <div className="filter">
               <div onClick={handleSignOut}>
                <IoLogInOutline className='dash-logo' />
                <label>Log Out</label>
               </div>
            </div>
          
          
           

           
        </div>
        <div className='right-panel'>
            
{selectedFilter === 'activity' && <div>
    

<div>
      {user ? (
        <div>
            
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    
<div className='dash-info-container'>
                    <div className='acc-info-btn-row'>

                        <div className='acc-info-btn'>
                            <p>Basic Info</p>
                        </div>

                        <div className='acc-info-btn'>
                            <p>Linked Banks</p>
                        </div>

                        <div className='acc-info-btn'>
                            <p>Security and privacy</p>
                        </div>

                        <div className='acc-info-btn'>
                            <p>Limits</p>
                        </div>
                    </div>




                    <div id="basic-info">

                        <p>Basic Info</p>

                        <p>Full Name</p>
                        <input placeholder='Full Name' />

                        <p>Address</p>
                        <input placeholder='Address' />

                        <p>Email</p>
                        <input placeholder='Email' />

                        <p>Phone</p>
                        <input placeholder='Phone' />

                        <div className='save-btn'>
                            <p>Save</p>
                        </div>
                    </div>


                    <div id="linked-banks">


                        <p>Linked banks</p>

                        <p>Linking an external account allows you to move money in and out as seamless as possible.</p>


                        <p>Routing Number</p>

                        <input placeholder='Routing Number' />


                        <p>Account Number</p>

                        <input placeholder='Account Number' />


                        <p> Verify Account Number</p>

                        <input placeholder=' Verified Account Number' />

                        <div className='link-bank-btn'>
                            <p>Link Bank +</p>
                        </div>

                        <div>
                            <p></p>
                        </div>
                    </div>

                </div>
    
    </div>}
      {selectedFilter === 'money' && <div>Money Content</div>}
      {selectedFilter === 'groups' && <div>
        
        <p>Create +</p>


        
        
        
        </div>}
      {selectedFilter === 'send-recieve' && <div>
        
                  <div>
                <div>
                    <p>Account Details</p>
                    <p>To</p>
                    <input />

                    <p>For</p>
                    <input />

                    <p>From</p>
                    <input />

                    <div>
                    <p>Send 🎉</p>
                    </div>
                </div>
            </div>
        
        
        </div>}
      {selectedFilter === 'account' && <div>Account Content</div>}



        </div>
        </div>
    </div>
  );
}

export default AccountDashboard;
