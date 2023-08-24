import React, {useState, useEffect} from 'react'
import { motion} from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import {AppWrap} from '../../wrapper'
import { urlFor, client } from '../../client'
import './Testimonial.scss'

const Testimonial = () => {

const [testimonials,  setTestimonals]  = useState([])
const [currentIndex, setCurrentIndex] = useState(0)  

useEffect(() => {
 const query = '*[_type == "testimonials"]'

  client.fetch(query)
    .then((data) => {
      setTestimonals(data)
    })
}, [])


  return (
    <div>
      Testimonial
    </div>
  )
}

export default AppWrap(Testimonial, 'testimonial')
