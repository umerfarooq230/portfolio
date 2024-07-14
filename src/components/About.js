import React from 'react'
export default function About() {
  return (
    <div className='contianer-fluid text-center fs-1 pt-5 p-1' id='about'>
      <div className='container mt-5 pt-5 text-light bg-dark-emphasis text-start pb-5'>
        <div className='row flex-lg-row-reverse'>
        <div className='col-lg rounded-5 mb-3' id='about-img'>
          </div>
          <div className='col-lg text-start fs-5 rounded-5 ' id='about-info'>
            <div id='child' className='container p-1'>
            <h1 className='pt-md-3 text-center'>About ME</h1>
            I'm a front-end web developer skilled in HTML, CSS, JavaScript, Bootstrap, and React.js. I also have basic knowledge of C++, Python, Node.js, Express, and databases like MongoDB and MySQL. My goal is to become a full-stack developer.
            I'm currently seeking an internship to enhance my front-end skills and eventually transition to mastering back-end technologies. I'm passionate about learning and excited to contribute to innovative projects.
            <hr className='w-100 mb-3'></hr>
            <h1 className='text-center'>Personal Details</h1>
                    <ul type='none' className='text-center text-md-start'>
                          <li className='row'><p className='col-4 d-flex'><i className="bi bi-person-circle mx-1"></i>Name:</p><p className='col-md'>Muhammad Umer Farooq</p></li>
                          <li className='row'><p className='col-4 d-flex'><i className="bi bi-person-check-fill mx-1"></i>Age:</p><p className='col-md'>21</p></li>
                          <li className='row'><p className='col-4 d-flex'><i className='bi bi-telephone-inbound-fill mx-1'></i>Phone:</p><p className='col-md'>+92-305-4079045</p></li>
                          <li className='row'><p className='col-4 d-flex'><i className='bi bi-envelope-at-fill mx-1'></i>Email:</p><p className='col-md'>umerfarooq.web.dev@gmail.com</p></li>
                          <li className='row'><p className='col-4 d-flex'><i className='bi bi-house-door-fill mx-1'></i>Address:</p><p className='col-md'>House no.335/LDA,Tanki no.56,Railway Power House,Mughaplura,Lahore</p></li>
                    </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
