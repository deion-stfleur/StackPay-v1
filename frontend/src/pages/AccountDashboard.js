import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { FaRegClock, FaUserGroup } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { MdOutlinePayment, MdAccountCircle, MdOutlineVerified } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { loadStripe } from '@stripe/stripe-js';
import { SiYourtraveldottv } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { PiDotsThreeCircleDuotone } from "react-icons/pi";







function AccountDashboard() {

const [selectedFilter, setSelectedFilter] = useState('activity')
const navigate = useNavigate();
const [inputValue, setInputValue] = useState('')



const handleValueClick = (number) => {
    setInputValue((prevValue) => prevValue + number);
}


const clearNumbers = () => {
    setInputValue('');
}


const handleClick = (filter) => {
    setSelectedFilter(filter);
    navigate(`#${filter}`);
}

const [isOpen, setIsOpen] = useState(false);

const openPanel = () => {
  setIsOpen(true);
};

const closePanel = () => {
  setIsOpen(false);
};



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
         
            {/* <div className="filter" onClick={() => handleClick('money')}>
                <BsBank2 className='dash-logo' />
                <label>Money</label>
            </div> */}

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
    
<p className='no-tr-history'>No transaction history</p>
<p className='inner-tr-history'>Import transactions</p>


    </div>}
      {selectedFilter === 'money' && <div>Money Content</div>}
      {selectedFilter === 'groups' && <div>
        
        {/* <p>Create Expense</p> */}


        <div>

            <div className='prof-row'>
           
           <div className='inner-prof-row'>
           
            <RxAvatar />
            <RxAvatar />
            <RxAvatar />
            <RxAvatar />

            <p className='main-dash-money'>$0.00</p>
            </div>
            </div>

            <button className='add-exp-btn'  onClick={openPanel}>Add expense</button>



            <div className='shared-exp-row'>

                 <p className='exp-title'>What's the shared expense?</p>
                 <p className='exp-subtitle'>Choose one of the categories below or create a custom one!</p>


            <div className='inner-exp-row'>


                <div className='exp-btn' onClick={openPanel}>
                    <SiYourtraveldottv className='exp-logo' />
                    <p className='exp-h3'>Travel</p>
                </div>

                <div className='exp-btn' onClick={openPanel}>
                    <FaHome className='exp-logo' />
                    <p className='exp-h3'>Home</p>
                </div>

                <div className='exp-btn' onClick={openPanel}>
                    <PiDotsThreeCircleDuotone  className='exp-logo'  />
                    <p className='exp-h3'>Custom</p>
                </div>

            </div>
            </div>

        
        <div>
   
    
    </div>




        </div>



        
        
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
      {selectedFilter === 'account' && <div>
        
    

    <div className='dash-info-container'>

    <div>
      {user ? (
        <div>
            <div className='user-email-btn'>
                <div  className='user-sett-row'>
                <p className='user-email-btn-text'>{user.email}</p>
            <MdOutlineVerified color='white' />
            </div>
            </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
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
    
        
        </div>
        
        
        }



        </div>

        <div className={`side-panel ${isOpen ? 'open' : ''}`}>
      {/* Overlay for darkening the rest of the screen */}
      <div className={`overlay ${isOpen ? 'visible' : ''}`} onClick={closePanel}></div>

      {/* Content of the side panel */}
      <div className="panel-content">
        <p style={{marginTop: 70}}>How much would you like to contribute?</p>

        <input placeholder="$0.00" className='cont-input' type="text" value={inputValue} readOnly />
      <div className='calc-container'>
     
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button className='calc-btn' key={number} onClick={() => handleValueClick(number)}>
            {number}
          </button>
        ))}

      </div>

<div className='cl-ct-row'>

    <div className='clear-btn'>
      <p onClick={clearNumbers}>clear</p>
    </div>
      <button onClick={() => console.log('Continue clicked')}>Continue</button>
</div>

      <p>Splits or "stacks"</p>

<p>Split ratio</p>
<p>user  $200</p>
<p>friends $200</p>
<p>message optional</p>
    <p>Make your deposit button</p>


    <p>Confirmation</p>
    <p>payment sent</p>


        {/* Add your content here */}
      {/* <button className="open-btn" onClick={openPanel}>Open Panel</button> */}
      <button className="close-btn" onClick={closePanel}>Close Panel</button>
      </div>

      {/* Open and close buttons */}
    </div>
        </div>
    </div>
  );
}

export default AccountDashboard;
