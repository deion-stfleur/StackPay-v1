import React from 'react'
import { IoChevronBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
function HowTo() {
  return (
    <div>

        <div className='xmn-comp'>
        <Link to="/spill-with-stack" className='art-back'>
                <div style={{display: 'flex',alignItems: 'center', marginBottom: 20}}>
                    <IoChevronBack />    
                    <p>Back</p> 
                </div>
            </Link>
        <img src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGJsb2d8ZW58MHwwfDB8fHww"  />

        <p className='xmn-title'>Getting Started</p>
        <p className='xmn-subtitle'>Sign Up and Set Up Your Account</p>
        <p className='xmn-copy'>First things first, if you haven't already, sign up for a free account on StackPay. Once you're in, take a moment to set up your profile and link your bank account to get the full experience.</p>
        <p className='xmn-title'>The Magic of Groups</p>
        <p className='xmn-subtitle'>Create or Join a Group</p>
        <p className='xmn-copy'>Are you planning a trip with friends or family? Start by creating a new group or joining an existing one. Add members to your group and set a name for your collective spending spree!</p>
        <p className='xmn-subtitle'>Share and View Expenses</p>
        <p className='xmn-copy'>In your group, you can share and view all expense transactions. Whether it's booking a hotel or splitting the cost of dinner, everything is transparent and trackable.</p>
        <p className='xmn-subtitle'>Group Owner Powers</p>
        <p className='xmn-copy'>As the group owner, you have the ability to manage payments effortlessly. You can use the identification/confirmation number provided by StackPay to pay for expenses, or even have the system do it automatically. Neat, right?</p>
        <p className='xmn-title'>Track and Dispute Transactions</p>
        <p className='xmn-subtitle'>Account History Panel</p>
        <p className='xmn-copy'>Wondering how your money is being spent? The account history panel provides you with a detailed overview of all payments made in your groups. It's the perfect spot to track and review your expenses.</p>
        <p className='xmn-title'>Importing Transactions</p>
        <p className='xmn-subtitle'>Connect Your Bank Account</p>
        <p className='xmn-copy'>Looking to import all your transactions? Simply click the import transaction button and connect your bank account. This allows you to sync your expenses with StackPay and keep everything up-to-date.</p>
        <p className='xmn-title'>New Feature Alert: Share/Split Goals!</p>
        <p className='xmn-subtitle'>Set Up Goals</p>
        <p className='xmn-copy'>We’re super excited to introduce our new feature: Share/Split Goals! You can set shared goals with your group members, such as saving up for a dream vacation or a fancy dinner out.</p>
        <p className='xmn-subtitle'>Track Your Progress</p>
        <p className='xmn-copy'>As you and your group members contribute to your shared goal, you can track your progress in real-time. Keep an eye on that goal thermometer as it inches closer to completion!</p>
        <p className='xmn-subtitle'>Achieve and Celebrate!</p>
        <p className='xmn-copy'>Once you’ve met your shared goal, StackPay automatically takes care of the final transaction.</p>

    


            <div style={{maxWidth: 200, margin: 'auto'}}>
                    <Link to="/signup" style={{textDecoration: 'unset', color: 'white'}}>
                        <div className='gsblbtn'>
                            <p>Get Started</p>
                        </div>
                    </Link>
            </div>

        </div>


    </div>
  )
}

export default HowTo