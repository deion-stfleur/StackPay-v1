import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='main-container'>

        <div>

            <div className='main-row'>
                <p className='main-h1'>Simplify Group Payments with Ease</p>


                <div>
                    <p className='supp-copy'>Say goodbye to the hassle of splitting costs. Our platform makes managing group payments for trips and experiences a breeze.</p>

                    <div className='sc-inner'>

                        <div className='sc-btn'>
                            <p className='sc-btn-text'>Get Started</p>
                        </div>

                        <div className='sc-lm-btn'>
                            <p className='sc-lm-btn-text'>Learn More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <img className='main-img' src="https://images.unsplash.com/photo-1616077167599-cad3639f9cbd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>



        <div>

            <div className='main-second-section'>

                <div className='ms-left'>
                    <p className='msl-title'>Simplifying Group Payments and Coordination for a Hassle-Free Experience</p>

                    <p className='msl-copy'>Our platform streamlines the process of splitting the cost of trips and other experiences, making it easy for families and colleagues to coordinate and manage shared expenses.</p>


                    <div className='msl-row'>

                        <div>
                            <p>Convenient</p>
                            <p>Easily split expenses and coordinate payments with our user-friendly platform.</p>
                        </div>
                        <div className='spc'></div>
                        <div>
                            <p>Efficient</p>
                            <p>Save time and effort by seamlessly managing shared expenses with our intuitive tools.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img style={{width:'100%', objectFit: 'cover'}} src="https://images.unsplash.com/photo-1705948354007-2aaf1259ac4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JwdXAlMjBwYXltZW50c3xlbnwwfHwwfHx8MA%3D%3D" />
                </div>
            </div>


            <div className='features-roles-row'>


                <div className='inner-features-row'>

                <div className='ifr-box'>

                    <div className='iifr-box'>
                    <p>Plan</p>
                    <p>Coordinate financial objectives with your group, setting targets and milestones for collective savings.</p>
                    </div>
                </div>

                <div className='ifr-box'>

                    <div className='iifr-box'>
                    <p>Pool</p>
                    <p>Pool resources together effortlessly, enabling group members to contribute towards common financial objectives.</p>
                    </div>
                </div>


                <div className='ifr-box'>

                    <div className='iifr-box'>
                    <p>Track</p>
                    <p>Monitor spending collectively, providing transparency and accountability for group expenses.</p>
                    </div>
                </div>

                <div className='ifr-box'>

                    <div className='iifr-box'>
                    <p>Split</p>
                    <p>Equitably distribute expenses among group members, ensuring fair and efficient payment management.</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Landing