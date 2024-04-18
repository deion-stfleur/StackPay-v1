import React, { useState } from 'react'
import { supabase } from '../supabase'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null)



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
            setError('We were unable to find an account matching those credentials. :(')
        }

    }
    return (
        <div style={{height: '100%'}}>

            <p className='si-text-h1'>Sign in</p>
            <div className='signup-form'>

                <div className='inner-form'>

                    <p style={{textAlign: 'center'}}>Sign in and start creating transactions.</p>

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
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />



                </div>
                {error && <div className="error">{error}</div>}
                <button className='sign-up-btn' onClick={handleSignIn}>Sign In</button>
                <p style={{textAlign: 'center'}}>Don't have an account? <Link to="/signup" className='link-black'><span style={{textDecoration: 'underline'}}>Sign Up.</span></Link></p>


            </div>

        </div>
    )
}

export default Signin