import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import {AppWrap} from '../../wrapper'
import { urlFor, client } from '../../client'
import './Work.scss'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [works, setWorks] = useState([])
  const [FilterWork, setFilterWork] = useState([])

  useEffect(() => {
    const query = '*[_type == "works"]'
    client.fetch(query)
      .then((data) => {
        // When the data is fetched successfully, update both 'works' and 'FilterWork' states.
        // Update 'works' state with fetched data
        setWorks(data)
         // Update 'FilterWork' state with fetched data
        setFilterWork(data)
      })
  }, [])
  

  const handleWorkFilter = (item) => {

  }
  return (
    <>
      <h2 className='head-text'>
        My creative
        <span> Portfolio </span>
         Section
      </h2>
      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            className={`app__work-filter app__flex ${activeFilter === item ? 'item-active': '' }`}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>

          
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{duration:0.5, delayChildren:0.5}}
        className='app__work-portfolio'
      >
        {FilterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index} >
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap (Work, 'work')
