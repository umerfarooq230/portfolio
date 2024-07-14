import React, { useEffect} from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import projects from './projects.json'
export default function Projects() { 
  useEffect(()=>{
    aos.init({easing:'ease-in',duration:'1000'})
  },[])
  return (
    <div className='contianer-fluid text-center fs-1 pt-5 p-0 m-0' id='projects' >
        <div className='container-fluid mt-5 pb-5 pt-5'>
          <div className='row gap-3 mx-auto justify-content-center'>
            {projects.map((elem,index)=>(
              <div key={index} className='card bg-dark-subtle col-lg-4 col-md-6 mb-2 p-0 border-0 rounded-4' style={{'width':"30rem"}} data-aos="fade-in">
              <img src={elem.src} className='rounded-top-3' alt='' id='card-img'></img>
                  <div className='text-start fs-4 bg-dark-subtle text-black pt-3' id='card-text'>
                    <h1 className='card-title fs-3 text-center'>{elem.title}</h1>
                    <p className='px-3'>{elem.disc}</p>
                  </div>
                </div>
            ))}
        </div>
          </div>
    </div>
  )
}
