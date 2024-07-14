import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import images from './images.json'
import aos from 'aos'
import 'aos/dist/aos.css'
export default function Home() {
  useEffect(() => {
    aos.init({ easing: 'ease-in' })
  }, [])
  return (
    <div className='container-fluid text-center fs-1 pt-5' id='Home' >
      <div className='row flex-lg-row-reverse p-5 pb-0 mb-sm-5 mt-lg-5 text-light text-start'>
        <div className='col-lg rounded-lg-5 mt-lg-5' id='svg'>
        </div>
        <div className='col-lg align-content-lg-center' id='Intro'>
          <h1 className='pb-0'>Muhammad Umer Farooq</h1>
          <p className=' d-inline fs-1 text-light'>I am currently <span className='text-info' style={{ fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['aiming for Full Stack.', ' a Front-end web-developer.']}
              loop={1}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}

            />
          </span>
            <br></br></p>
          <p className='d-inline fs-2 text-success fw-bold '> <span style={{ color: '#a7c957', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Looking for a job', 'Hire me !']}
              loop={2}
              typeSpeed={50}
              deleteSpeed={100}
              delaySpeed={1000}
            /></span></p><br></br>
          <Link to={'/projects'}><button className='btn btn-light mx-1 my-1 fs-5' id='bt1'>View Projects</button></Link>
          <Link to={'/contact'}><button className='btn btn-outline-light mx-1 my-1 fs-5' id='bt2'>Contact Me</button></Link>
        </div>

      </div>
      <div className=' mt-sm-5 mt-0 pb-5' id='float' >
        <center><h1 className='text-light pt-5' data-aos="zoom-in-left">Technologies Known</h1></center><br></br>
        <div className='container'>
          <div className='row'>
            {images.map((image, index) => (
              <div key={index} className='flex-column fs-5 col-lg-1 col-md-3 col-sm-4 pt-4 align-content-center justify-content-center tech' data-aos="fade-up" data-aos-delay={(window.innerWidth>1000?index * 250:(index/3)*300)}>
                <img src={image.src} alt='' />
                <p className='fs-6 fw-bolder' id='tech-text'>{image.disc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
