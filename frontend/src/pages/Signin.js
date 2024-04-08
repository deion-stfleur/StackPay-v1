import React, { useState } from 'react'
import { supabase } from '../supabase'
import '../App.css'
import { useNavigate } from 'react-router-dom';



function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleSignIn = async () => {

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
              })

              if (error) {
                throw error;
              }

              console.log(data)

              navigate('/account-dashboard')
        } catch (error) {
            console.error('Error signing in:', error.message)
        }

    }
    return (
        <div>
            <div className='signup-form'>

                <div className='inner-form'>

                    <input
                        className='if-input'
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                        <input
                        className='if-input'
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />



                </div>
                <button className='sign-up-btn' onClick={handleSignIn}>Sign In</button>

            </div>

        </div>
    )
}

export default Signin