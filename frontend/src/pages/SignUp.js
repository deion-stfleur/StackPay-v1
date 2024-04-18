import React, {useState, useEffect} from 'react'
import { supabase } from '../supabase';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [error, setError] = useState(null)

    const handleSignUp = async () => {
        try {
          const { data, error } = await supabase.auth.signUp({
            email,
            password, 
            options: {
                emailRedirectTo: 'http://localhost:3001/account-dashboard'
            }
          });
    
          if (error) {
            throw error;
          }
          console.log(data)

    
          console.log('Account created successfully!');
        } catch (error) {
          console.error('Error signing up:', error.message);
        //   alert('Error signing up:', error.message);
        setError('Please fill out all the information correctly :)')
        }
      };

      useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            setTimeout(async () => {
                if (event === 'INITIAL_SESSION') {
                    // handle initial session
                    console.log('INITIAL_SESSION')
                  } else if (event === 'SIGNED_IN') {
                    // handle sign in event
                    console.log('SIGNED_IN')
                  } else if (event === 'SIGNED_OUT') {
                    // handle sign out event
                    console.log('SIGNED_OUT')
                  } else if (event === 'PASSWORD_RECOVERY') {
                    // handle password recovery event
                    console.log('PASSWORD_RECOVERY')
                  } else if (event === 'TOKEN_REFRESHED') {
                    // handle token refreshed event
                    console.log('TOKEN_REFRESHED')
                  } else if (event === 'USER_UPDATED') {
                    // handle user updated event
                    console.log('USER_UPDATED')
                  }
            }, 0)
          })
      })
  return (
    <>
    
    <div style={{height: '100%'}}>

        <div className='signup-form'>

            <p className='sn-text'>Sign up today to create an account.</p>
            <div className='inner-form'>
            <input
            className='if-input'
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
            <input
            className='if-input'
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
            <input
            className='if-input'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
                 <input
            className='if-input'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input
            className='if-input'
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            /> */}

            </div>
            {error && <div className="error">{error}</div>}
            <button className='sign-up-btn' onClick={handleSignUp}>Sign Up</button>

                <p style={{textAlign: 'center'}}>Already have an account? <Link to="/signin" className='link-black'><span style={{textDecoration: 'underline'}}>Sign in.</span></Link></p>
                
        </div>
  </div>
    </>
  )
}

export default SignUp