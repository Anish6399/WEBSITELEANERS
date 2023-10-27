import React from 'react'
import './style.css'
import ProductButton from './ProductButton'

const Frame1 = () => {


  return (
    <div className='mainscreen'>

      <div className='navBar'>

        <div><h4>Logo</h4></div>

        <div className='navOption'>
          <div className='navtext'>Home</div>
          <div className='navtext'>About Us</div>
          <div className='navtext'>Contact Us</div>
        </div>

      </div>

      <div className='space'>
      </div>

    <ProductButton/>

    </div>
    
  )
}

export default Frame1