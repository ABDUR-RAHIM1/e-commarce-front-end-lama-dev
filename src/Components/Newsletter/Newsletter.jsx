import React from 'react'
import "./Newsletter.css"
import { LuArrowRightCircle } from "react-icons/lu"
function Newsletter() {
  return (
    <div className='NewsletterContainer'>
      <h1>Newsletter</h1>
      <h4>get timly updated your favorite product</h4>
      <form action="" className="letterForm">
        <input className='form-control' type="text" placeholder='Your Email' />
        <button className='btn btn-success'>
          <LuArrowRightCircle className='newsBtn' />
        </button>
      </form>
    </div>
  )
}

export default Newsletter