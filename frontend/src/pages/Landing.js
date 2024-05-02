import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

function Landing() {
  return (

    <>

   
    
    <div className='main-container'>

      <section className='sc-gray-bg'>
        <div>

            <div className='main-row'>
                <p className='main-h1'>Simplify Group Payments with Ease</p>


                <div>
                    <p className='supp-copy'>Say goodbye to the hassle of splitting costs. Our platform makes managing group payments for trips and experiences a breeze.</p>

                    <div className='sc-inner'>
                        
                        <Link style={{color: 'white'}} to="/signup" className='link'>
                        <div className='sc-btn'>
                            <p className='sc-btn-text'>Get Started</p>
                        </div>
                        </Link>



                    <a style={{textDecoration: 'none'}} href="#learn-more">
                        <div className='sc-lm-btn'>
                            <p className='sc-lm-btn-text'>Learn More</p>
                        </div>
                    </a>
                     
                    </div>
                </div>
            </div>
        </div>
        <div className='ms-lr-col-container'>
            <img className='main-img' src="https://images.unsplash.com/photo-1616077167599-cad3639f9cbd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>


        <div className='ms-mid-2-comp'>

            <p className='ms-mid-h3'>Send money in a heartbeat!</p>


            <div className='ms-mid-right'>
            <div>

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
            </div>
        </div>
      </section>
        





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

                <div className='ms-l-col-container'>
                    <img style={{width:'100%', objectFit: 'cover'}} src="https://images.unsplash.com/photo-1705948354007-2aaf1259ac4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JwdXAlMjBwYXltZW50c3xlbnwwfHwwfHx8MA%3D%3D" />
                </div>
            </div>


            <section className=''>
            <div id="learn-more" className='features-roles-row'>


                <div className='inner-features-row'>

                <div id="tr-rot-1" className='ifr-box'>

                    <div className='iifr-box'>
                    <p className='fbox-title'>Plan</p>
                    <p className='fbox-sub'>Coordinate financial objectives with your group, setting targets and milestones for collective savings.</p>
                    </div>
                </div>

                <div id="tr-rot-2" className='ifr-box'>

                    <div className='iifr-box'>
                    <p className='fbox-title'>Pool</p>
                    <p className='fbox-sub'>Pool resources together effortlessly, enabling group members to contribute towards common financial objectives.</p>
                    </div>
                </div>


                <div className='ifr-box'>

                    <div className='iifr-box'>
                    <p className='fbox-title'>Track</p>
                    <p className='fbox-sub'>Monitor spending collectively, providing transparency and accountability for group expenses.</p>
                    </div>
                </div>

                <div id="tr-rot-3" className='ifr-box'>

                    <div className='iifr-box'>
                    <p className='fbox-title'>Split</p>
                    <p className='fbox-sub'>Equitably distribute expenses among group members, ensuring fair and efficient payment management.</p>
                    </div>
                </div>
                </div>

            </div>
            </section>

          
        </div>


        <section>

        <div className='main-gs-last'>

            <div>
                <p className='main-hp-last-h1'>Get started in minutes</p>
                <p className='main-hp-last-sub'>Set up your group payment account quickly and easily with our streamlined process — available on both web and mobile app!</p>
            </div>

            <ul>
                <li className='main-gs-li'>Sign up with your email address.</li>
                <li className='main-gs-li'>Add your group and invite members.</li>
                <li className='main-gs-li'>Contribute and manage funds.</li>
                <li className='main-gs-li'>Track transactions and payments in real-time.</li>
            </ul>

        </div>
        </section>


    </div>
    </>
  )
}

export default Landing