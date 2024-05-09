import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


export default function Success() {
  return (
    <div className='pment-scc-container'>
        <div className='pment-scc-col'>

            <div>
            <FaCheckCircle style={{color: 'green', textAlign: 'center', margin: 'auto', display: 'blocl', fontSize: 60}} />
            <p className='pment-h1'>Payment Complete</p>
            <p className='pment-copy'>Check your email for futrther details, and confirmation code.</p>
            </div>

        </div>
    </div>
  )
}
