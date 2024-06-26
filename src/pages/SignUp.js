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
        setError('Check your email for more details. If no details, please try signing up again.')
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setPhoneNumber('')
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

        <div className='su-col-container'>

            <div className='leftPanel'>

                <div>
                    <p className='su-new-header'>Sign Up</p>
                    <p className='sn-text'>Sign up today to create an account.</p>
                </div>
            <div className='signup-form'>

<div className='inner-form'>
<input
className='if-input'
type="text"
placeholder="First Name"
value={firstName}
onChange={(e) => setFirstName(e.target.value)}
required
/>
<input
className='if-input'
type="text"
placeholder="Last Name"
value={lastName}
onChange={(e) => setLastName(e.target.value)}
required
/>
<input
className='if-input'
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
     <input
className='if-input'
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
<input
className='if-input'
type="tel"
placeholder="Phone Number"
value={phoneNumber}
onChange={(e) => setPhoneNumber(e.target.value)}
required
/>

</div>
{error && <div className="error">{error}</div>}
<button className='sign-up-btn' onClick={handleSignUp}>Sign Up</button>

    <p style={{textAlign: 'center'}}>Already have an account? <Link to="/signin" className='link-black'><span style={{textDecoration: 'underline'}}>Sign in.</span></Link></p>
    
</div>

            </div>

        <div className='rightPanel'>
          <img className='sumn-img' src="https://images.unsplash.com/photo-1592753054398-9fa298d40e85?q=80&w=2518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
        </div>

        </div>

     
  </div>
    </>
  )
}

export default SignUp