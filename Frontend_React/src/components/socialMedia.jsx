import React from 'react'
import{ BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import{ FaFacebook } from 'react-icons/fa'

const socialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter/>
      </div>
      <div>
        <BsLinkedin/>
      </div>
      <div>
        <BsInstagram/>
      </div>
    </div>
  )
}

export default socialMedia
