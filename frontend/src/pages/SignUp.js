import React, {useState} from 'react'
import { supabase } from '../supabase';
import '../App.css'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
          const { user, error } = await supabase.auth.signUp({
            email,
            password: 'password', 
          });
    
          if (error) {
            throw error;
          }
    
          const { data, insertError } = await supabase.from('users').insert([
            { first_name: firstName, last_name: lastName, email, phone_number: phoneNumber },
          ]);
    
          if (insertError) {
            throw insertError;
          }
    
          console.log('Account created successfully!');
          navigate('/account-dashboard');
        } catch (error) {
          console.error('Error signing up:', error.message);
          alert('Error signing up:', error.message);
        }
      };
  return (
    <>
    
    <div>

        <div className='signup-form'>

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
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />

            </div>
            <button className='sign-up-btn' onClick={handleSignUp}>Sign Up</button>

        </div>
  </div>
    </>
  )
}

export default SignUp