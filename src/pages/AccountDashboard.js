import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { FaRegClock, FaUserGroup } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { MdOutlinePayment, MdAccountCircle, MdOutlineVerified } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { SiYourtraveldottv } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { PiDotsThreeCircleDuotone } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import { IoMdMenu } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import PaymentForm from './PaymentForm';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { IoChevronBack } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";






const stripe = loadStripe('pk_test_51P6YezFRyjQFCphqLzC7vKxTHBZ7Z7rwMoNIYrw1EecNj6TP4OHaosoIvWz1zebye9BMpHxZEBTXiEtzpzV6NWRX00QgVqYMBC')
function AccountDashboard() {

    const [selectedFilter, setSelectedFilter] = useState('activity')
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('')
    const [currentSection, setCurrentSection] = useState(1)
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [userInfo, setUserInfo] = useState(null);
    const [toolTipVisible, setToolTipVisible] = useState(false)


    const handleMenuClick = () => {
        setToolTipVisible((prevVisibility) => !prevVisibility);
    }
    


 const handleShareClick = (item) => {
    const eventUrl = `${window.location.origin}/event/${item.id}`;
    navigator.clipboard.writeText(eventUrl)
    .then(() => {
      alert('URL copied to clipboard!');
      console.log(eventUrl)
    })
    .catch((error) => {
      console.error('Failed to copy URL:', error);
    });
 }
      



    const [users, setUsers] = useState([]);


    useEffect(() => {
        fectUsers()
        fetchUserInfo();
    }, [])


    async function fectUsers() {
        const { data } = await supabase
            .from('user-info')
            .select('*')
        setUsers(data)
        console.log(data)
    }



    const handleSaveInfo = async () => {
        try {

            const { error: insertError } = await supabase
                .from('user-info')
                .insert([
                    {
                        fullName,
                        address,
                        email,
                        phoneNumber
                    }
                ]);

            if (insertError) {
                throw insertError;
            }
            console.log('sussecfull')
            setFullName('')
            setAddress('')
            setEmail('')
            setPhoneNumber('')
        } catch (error) {
            console.log("Error saving info:", error.message)
        }
    }

    const fetchUserInfo = async () => {
        try {
            // Fetch the user's information from the 'user-info' table
            const { data, error } = await supabase
                .from('user-info')
                .select('*')
                .eq('email', email); // Modify the condition as needed

            if (error) {
                throw error;
            }

            // Update the state with the fetched user information
            if (data && data.length > 0) {
                setUserInfo(data[0]);
            } else {
                setUserInfo(null);
            }

        } catch (error) {
            console.log('Error fetching user info:', error.message);
        }
    };


    const [showModal, setShowModal] = useState(false);

    const handleCreateClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSearch('')
        setSelectedPhoneNumbers('')
    };


    const handleLeftArrowClick = () => {
        if (currentSection > 1) {
            setCurrentSection(currentSection - 1);
        }
    };

    const handleRightArrowClick = () => {
        if (currentSection < 4) { // Assuming you have 4 sections
            setCurrentSection(currentSection + 1);
        }
    };



    // const handleValueClick = (number) => {
    //     setInputValue((prevValue) => prevValue + number);
    // }

    const handleValueClick = (number) => {
        setInputValue(inputValue + number);
    };



    const clearNumbers = () => {
        setInputValue('');
    }


    const handleClick = (filter) => {
        setSelectedFilter(filter);
        navigate(`#${filter}`);
        handleMenuClick();
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




    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [selectedPhoneNumbers, setSelectedPhoneNumbers] = useState([]);


    // Function to fetch phone numbers from the database based on the search input
    const fetchPhoneNumbers = async () => {
        if (search.trim() === '') {
            setResults([]);
            return;
        }

        try {
            const { data, error } = await supabase
                .from('user-info')
                .select('phoneNumber')
                .ilike('phoneNumber', `%${search}%`); // Use ilike for case-insensitive matching

            if (error) {
                throw error;
            }

            // Set the results
            setResults(data);
        } catch (error) {
            console.error('Error fetching phone numbers:', error.message);
        }
    };

    // Effect to fetch phone numbers when the search input changes
    useEffect(() => {
        fetchPhoneNumbers();
    }, [search]);

    // Handle selection of a phone number from the results
    const handleSelectPhoneNumber = (phoneNumber) => {
        setSelectedPhoneNumbers((prev) => {
            // Check if the phone number is already selected
            if (prev.includes(phoneNumber)) {
                // If the phone number is already selected, remove it from the array
                return prev.filter((num) => num !== phoneNumber);
            } else {
                // Otherwise, add the phone number to the array
                return [...prev, phoneNumber];
            }
        });
    };
    const [userr, setUserr] = useState(null); // Signed-in user
    const [groupPayInitData, setGroupPayInitData] = useState([]);

    const handleSave = async () => {
        // if (!userr) {
        //     console.error('User is not signed in');
        //     return;
        // }

        try {
            // Insert a new record into the "group-pay-init" table
            const { data, error: insertError } = await supabase
                .from('group-pay-init')
                .insert([
                    {
                        user_id: user.id, // Owner's user ID
                        phoneNumber: JSON.stringify(selectedPhoneNumbers), // Convert selected phone numbers to JSON string
                        owner: true,
                        // Set owner to true since the signed-in user is the creator
                        // Add any other relevant data here (e.g., group name, description, etc.)
                    },
                ]);

            if (insertError) {
                throw insertError;
            }

            console.log('Group pay init data saved successfully:', data);
            handleCloseModal();
            // Update state to clear or reflect the new data
            setGroupPayInitData(data);

        } catch (error) {
            console.error('Error saving group pay init data:', error.message);
        }
    };

    const fetchUserPhoneNumbers = async () => {
        try {
            // Fetch the phone numbers for the signed-in user from the database
            const { data, error } = await supabase
                .from('user_phone_numbers')
                .select('phone_number')
                .eq('user_id', user.id); // Filter by the signed-in user's ID

            if (error) {
                throw error;
            }

            // Update the state with the fetched phone numbers
            setSelectedPhoneNumbers(data.map(item => item.phone_number));

        } catch (error) {
            console.error('Error fetching user phone numbers:', error.message);
        }
    };

    // Call the function to fetch user's phone numbers when the component mounts
    useEffect(() => {
        fetchUserPhoneNumbers();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the database for the signed-in user
                const { data, error } = await supabase
                    .from('group-pay-init')
                    .select('*')
                    .eq('user_id', user.id); // Filter by the user's ID

                if (error) {
                    throw error;
                }

                // Update state with fetched data
                setGroupPayInitData(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [user]);

    const [clientSecret, setClientSecret] = useState("");
 
    useEffect(() => {
        axios
            .post("http://localhost:4000/create-payment-intent", {
                items: [{ id: 1, name: "momos", amount: 40.00 }],
            })
            .then((resp) => setClientSecret(resp.data.clientSecret));
    }, []);
 
    const options = {
        clientSecret,
        // theme: "stripe",
    };

    const [prices, setPrices] = useState([0]);
    const [members, setMembers] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [averagePrice, setAveragePrice] = useState(0);

    // Handle price input changes
    const handlePriceChange = (index, value) => {
        // Update the price at the specified index
        const updatedPrices = [...prices];
        updatedPrices[index] = parseFloat(value) || 0;
        setPrices(updatedPrices);
    };

    // Handle adding new price input
    const addPriceInput = () => {
        setPrices([...prices, 0]);
    };

    // Handle number of members change
    const handleMembersChange = (value) => {
        const numMembers = parseInt(value) || 1;
        setMembers(numMembers);
    };

    // Calculate total price and average price per member
    useEffect(() => {
        const total = prices.reduce((sum, price) => sum + price, 0);
        setTotalPrice(total);
        setAveragePrice(members > 0 ? total / members : 0);
    }, [prices, members]);

   
    return (
        <div>
            <div className='acct-dash-sep'></div>
            <div className='main-panel-container'>
                <div className="left-panel">

                    <div id="mg-60" className="filter" onClick={() => handleClick('activity')}>
                        <FaRegClock className='dash-logo' />
                        <label>Activity</label>
                    </div>

                    {/* <div className="filter" onClick={() => handleClick('money')}>
                <BsBank2 className='dash-logo' />
                <label>Money</label>
            </div> */}

                    {/* <div className="filter" onClick={() => handleClick('send-recieve')}>
                 <MdOutlinePayment className='dash-logo' />
                <label>Send/Recieve</label>
            </div> */}

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
                    <div className='mob-menu-container'>
                          <IoMdMenu className='mob-menu' onClick={handleMenuClick} />
                    </div>

                    {toolTipVisible && (
                <div className='tooltip'>
                    {/* Tooltip content goes here */}
                    {/* <p>This is a tooltip with options.</p> */}
                    <ul className='tlmbct-1'>
                        <li onClick={() => handleClick('activity')}>Activity</li>
                        <li onClick={() => handleClick('groups')}>Groups</li>
                        <li onClick={() => handleClick('account')}>Account</li>
                        <li onClick={handleSignOut}>Logout</li>

                    </ul>
                </div>
            )}
                    {selectedFilter === 'activity' && <div>

                        <p className='no-tr-history'>No transaction history!</p>
                        <p className='inner-tr-history'>Import transactions</p>



                    </div>}
                    {selectedFilter === 'money' && <div>Money Content</div>}
                    {selectedFilter === 'groups' && <div>

                        {/* <p>Create Expense</p> */}


                        <div>

                            <div className='prof-row'>

                                {/* <div className='inner-prof-row'>

                                    <RxAvatar />
                                    <RxAvatar />
                                    <RxAvatar />
                                    <RxAvatar />

                                    <p className='main-dash-money'>add friends</p>
                                </div> */}
                            </div>

                            {/* <button className='add-exp-btn' onClick={openPanel}>Add expense</button> */}



                            <div className='shared-exp-row'>

                                <p className='exp-title'>What's the shared expense?</p>
                                <p className='exp-subtitle'>Choose one of the categories below or create a custom one!</p>


                                <div className='inner-exp-row'>


                                    <div className='exp-btn' onClick={openPanel}>
                                        <SiYourtraveldottv className='exp-logo' />
                                        <p className='exp-h3'>Travel</p>
                                    </div>

                                    <div id="mid-exp-btn" className='exp-btn' onClick={openPanel}>
                                        <FaHome className='exp-logo' />
                                        <p className='exp-h3'>Home</p>
                                    </div>

                                    <div className='exp-btn' onClick={openPanel}>
                                        <PiDotsThreeCircleDuotone className='exp-logo' />
                                        <p className='exp-h3'>Custom</p>
                                    </div>

                                </div>
                            </div>


                            <div>


                            </div>




                        </div>


                        <div className='gcc-comp'>
                            <div className='group-container-create'>
                                <p className='exp-title'>Recent Groups</p>

                                <div className='create-gr-btn' onClick={handleCreateClick}>
                                    <p className='cgb-h1'>Create +</p>
                                </div>
                            </div>

                            <div>
                                {groupPayInitData.length > 0 ? (
                                    <div>
                                        <ul className='gp-col'>
                                            {groupPayInitData.map((item) => (
                                                <li className='group-box' key={item.id}>
                                                    <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww" style={{ width: '90%', margin: 'auto' }} />
                                                    {/* <p>User ID: {item.user_id}</p> */}
                                                    
                                                    <div className='mb-er-lgn'>
                                                    <IoIosPeople style={{fontSize: 18, marginRight: 5}} />
                                                    <p>Members: {item.phoneNumber}</p>
                                                    </div>
                                                    {/* Add more data fields as needed */}
                                                    
                                                    <div>
                                                    <div className='sh-btn-link-2' onClick={openPanel}>
                                                        <p>View</p>
                                                    </div>
                                                    <div className='sh-btn-link' onClick={() => handleShareClick(item)}>
                                                        <p>Share</p>
                                                    </div>
                                                    </div>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                ) : (
                                    <p style={{ textAlign: 'center', color: 'gray' }}>No groups have beenn created yet..</p>
                                )}
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

                            <div className='main-prof-box'>
                                {user ? (
                                    <div>
                                        <div className='user-email-btn'>
                                            <div className='user-sett-row'>
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
                                {/* 
                        <div className='acc-info-btn'>
                            <p>Limits</p>
                        </div> */}
                            </div>




                            <div id="basic-info">

                                <p>Basic Info</p>

                                <div>
                                    <h2>User Information</h2>
                                    {userInfo ? (
                                        <div>
                                            <p><strong>Full Name:</strong> {userInfo.fullName}</p>
                                            <p><strong>Address:</strong> {userInfo.address}</p>
                                            <p><strong>Email:</strong> {userInfo.email}</p>
                                            <p><strong>Phone Number:</strong> {userInfo.phoneNumber}</p>
                                        </div>
                                    ) : (
                                        <p>No user information found</p>
                                    )}
                                </div>

                                <p>Full Name</p>
                                <input
                                    placeholder='Full Name'
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />

                                <p>Address</p>
                                <input
                                    placeholder='Address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />

                                <p>Email</p>
                                <input
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <p>Phone</p>
                                <input
                                    placeholder='Phone'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />

                                <div onClick={handleSaveInfo} className='save-btn'>
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


                        {currentSection === 1 && <div>
                            <p style={{ marginTop: 70 }}>How much would you like to contribute?</p>

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
                                <button className='ct-pan-btn' onClick={handleRightArrowClick}>Continue</button>
                            </div>



                        </div>}
                        {currentSection === 2 && <div>

                            

                            <IoChevronBack style={{marginTop: 30}} onClick={handleLeftArrowClick} />  

                            <div class="credit-card">
                                <div class="card-number">1234 5678 9012 3456</div>
                                <div class="card-holder">Your Card <FaPen className='pen' /></div>
                                <div class="expiry-date">12/24</div>
                                <div class="card-type">
                                    <div class="visa"></div>
                                    <div class="mastercard"></div>
                                </div>

                            </div>

                        {clientSecret && (
                                        <Elements stripe={stripe} options={{clientSecret}}>
                                            <PaymentForm  />
                                        </Elements>
                                    )}

                        
                            {/* <button id="btn-1-fix" className='ct-pan-btn' onClick={handleRightArrowClick}>Continue</button> */}

                        </div>}
                        {currentSection === 3 && <div>

                            <p onClick={handleLeftArrowClick}>Back</p>

                            <div style={{ marginTop: 70 }}>

                                <div className='man-split-cat'>
                                    <div>
                                        <p>Category</p>
                                        <p>Date</p>
                                    </div>

                                    <p>$20.00</p>
                                </div>


                                <div>
                                    <p className='sr-h3'>Split ratio</p>


                                    <div className='inner-split-cat-row'>
                                        <div className='iscr-box'>
                                            <p>Your Share</p>
                                            <p>$10</p>
                                        </div>

                                        <div className='iscr-box'>
                                            <p>Your groups share</p>
                                            <p>$10</p>
                                        </div>
                                    </div>
                                </div>



                                <input className='iscr-input' placeholder='Your message (Optional)' />



                                <div className='ct-split-btn'>
                                    <p>Send Payment 🎉</p>
                                </div>


                            </div>



                        </div>}
                        {currentSection === 4 && <div>4333</div>}
                        {/* Left and Right arrow buttons */}
                        {/* <button onClick={handleLeftArrowClick}>Left arrow</button>
      <button onClick={handleRightArrowClick}>Right arrow</button> */}



                        {/* <p>Splits or "stacks"</p>

<p>Split ratio</p>
<p>user  $200</p>
<p>friends $200</p>
<p>message optional</p>
    <p>Make your deposit button</p>


    <p>Confirmation</p>
    <p>payment sent</p> */}


                        {/* Add your content here */}
                        {/* <button className="open-btn" onClick={openPanel}>Open Panel</button> */}
                        <button className="close-btn" onClick={closePanel}>Close Panel</button>
                    </div>

                    {/* Open and close buttons */}
                </div>
            </div>


            {showModal && (
                <div className='modal-dash'>
                    <div className='modal-content-dash'>
                        <span className='close-dash' onClick={handleCloseModal}>&times;</span>
                        <h2 style={{ marginBottom: 6, textAlign: 'center', marginTop: 6 }}>Create Group</h2>
                        {/* <p style={{ color: 'gray', marginTop: 'unset' }}>Search for users.</p> */}

                        <input
                            placeholder='Enter Phone Number'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='active-search-input'
                        />

                        {/* Dropdown list to display search results */}
                        {results.length > 0 && (
                            <ul className='dropdown-list'>
                                {results.map((result, index) => (
                                    <li className='phn-text' key={index} onClick={() => handleSelectPhoneNumber(result.phoneNumber)}>
                                        {result.phoneNumber}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Display the selected phone number */}
                        <p>Selected Phone Number:

                            {selectedPhoneNumbers.length > 0 ? (
                                selectedPhoneNumbers.map((phoneNumber, index) => (
                                    <p key={index}>{phoneNumber}</p>
                                ))
                            ) : (
                                <p style={{display: 'none'}}>No phone numbers selected</p>
                            )}
                        </p>
{/* 
                            <p>Paste Links</p>

                            <input /> */}

                            <div>

            <div>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <p>Average Price per Member: ${averagePrice.toFixed(2)}</p>
            </div>

            {prices.map((price, index) => (
                <div key={index}>
                    <label>
                        Price {index + 1}:
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => handlePriceChange(index, e.target.value)}
                        />
                    </label>
                    <CiCirclePlus onClick={addPriceInput} />
                </div>
            ))}

            {/* <button onClick={addPriceInput}>Add Price Input</button> */}


            <div style={{marginTop: 10}}>
                <label>
                    Number of Members:
                    <input
                        type="number"
                        value={members}
                        onChange={(e) => handleMembersChange(e.target.value)}
                    />
                </label>
            </div>
        </div>





                        <div onClick={handleSave} className='save-mdl-btn'>
                            <p>save</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AccountDashboard;
