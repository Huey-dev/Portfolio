import React from 'react'
import{ BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'


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
        <BsGithub/>
      </div>
    </div>
  )
}

export default socialMedia
