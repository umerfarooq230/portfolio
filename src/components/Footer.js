import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="container-fluid m-0 p-0" id="contact">
    <footer className="text-center text-lg-start text-white bg-dark">
      <section
               className="d-flex justify-content-between p-4 bg-dark-subtle "
               >
        
        <div className="me-5 text-dark-emphasis  fs-5 h3">
          <span>Get connected with us on social networks:</span>
        </div>
        
  
        
        <div>
          <a href="/" className="me-3">
            <i className="bi bi-facebook text-dark-emphasis"></i>
          </a>
          <a href="/" className="me-3 ">
            <i className="bi bi-instagram text-dark-emphasis"></i>
          </a>
          <a href="/" className="me-3 ">
            <i className="bi bi-linkedin text-dark-emphasis"></i>
          </a>
        </div>
       
      </section>
     
  
    
      <section>
        <div className="container text-center text-md-start mt-5">
        
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
 
            <h6 className='text-light text-uppercase fw-bold mb-1'>About Me</h6>
                            <hr className='mb-4 mt-0  d-inline-block w-25 text-light'/>
                            <p className='text-light text-center text-md-start m-sm-1'>Currenntly a forntend developer.Finding a first job to improve forntend skills and then move on to backend.Aiming to be a fullstack web developer</p>  
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
            <h6 className='text-uppercase fw-bold text-light mb-1'>Frontend Tech Stack</h6>
                        <hr className='mb-4 mt-0 mx-auto d-inline-block w-25 text-light'/>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>Bootstrap</p>
                        <p>React Js</p>
            </div>
           
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
            <h6 className='text-light text-uppercase fw-bold mb-1'>Useful Links</h6>
                            <hr className='mb-4 mx-auto mt-0 d-inline-block w-25 text-light'/>
                            <p>
                            <Link className='text-light text-decoration-none' to='/'>Home</Link>
                            </p>
                            <p>
                            <Link className='text-light text-decoration-none' to='/projects'>Projects</Link>
                            </p>
                            <p>
                            <Link className='text-light text-decoration-none' to='/contact'>Contact</Link>
                            </p>
                            <p>
                            <Link className='text-light text-decoration-none' to='/about'>About</Link>
                            </p>
            </div>
           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto  mb-md-0 mb-4">
          
            <h6 className='text-uppercase fw-bold text-light mb-1'>Contact</h6>
                        <hr className='mb-4 mt-0 mx-auto d-inline-block w-25 text-light'/>
                        <p><i className='bi bi-house-door-fill mx-1'></i>House no.335/LDA,Tanki no.56,Railway Power House,Mughaplura,Lahore</p>
                        <p><i className='bi bi-envelope-at-fill mx-1'></i>umerfarooq.web.dev@gmail.com</p>
                        <p><i className='bi bi-telephone-inbound-fill mx-1'></i>+92-305-4079045</p>
                        <p><i className='bi bi-telephone-inbound-fill mx-1 mx-1'></i>+92-315-4357916</p>   
            </div>
            
          </div>
       
        </div>
      </section>
      <div
           className="text-center p-3"
           style={{'backgroundColor':"rgba(0, 0, 0, 0.2)"}}
           >
        © 2024 Copyright: All rights reserved!
      </div>
    </footer>
  </div>
  )
}
