import React from 'react'

export default function Contact() {
  return (
    <div className='container-fluid pb-5 pt-5 fs-1 text-light' id='contact'>
      <div className='container mx-lg-auto mt-5 pt-5 rounded-5 bg-dark-emphasis p-0'>
        <div className='row m-0 p-0'>
        <div className='col-md m-0 rounded-5 bg-black container-fluid' id='img' >
    
        </div>
        <div className='col-lg rounded-5' id="form" >
          <form className='p-5 row flex-column shadow rounded-5' action="https://api.web3forms.com/submit" method="POST" id='child'>
          <input type="hidden" name="access_key" value="26429c7f-984e-444c-b499-b756a3fa93f0"/>
              
              <label htmlFor="name" className="form-label col-9 fs-3">Name</label>
              
              
              <input type="text" className="form-control w-100" id="name" name="name"  placeholder='Enter Your Name' required/>
          
              <label htmlFor="email" className="form-label fs-3">Email address</label>
              <input type="email" className="form-control mb-3 w-100" id="email" name="email"  placeholder='Enter Your Email' required/>
      
              <div className='row'>
              <label htmlFor="phone" className="form-label col-10 fs-3">Phone</label>
              <p className="col-2 fs-6 mx-auto mt-auto text-light-emphasis">Optional</p>
              </div>
              <input type="text" className="form-control mb-3 w-100" id="phone" name="phone"  placeholder='Enter Your Phone no.'/>

              <div className='row'>
              <label htmlFor="time" className="form-label col-10 fs-3">Best time to contact you?</label>
              <p className="col-2 fs-6 mt-auto mx-auto text-light-emphasis">Optional</p>
              </div>
              <input type="text" className="form-control mb-3 w-100" id="time" name="time" placeholder='Enter Your Best Time'/>
            
              <div className='row'>
              <label htmlFor="phone" className="form-label col-10 fs-3">Your Message:</label>
              <p className="col-2 fs-6 mx-auto mt-auto text-light-emphasis">Max(250)</p>
              </div>
              <textarea type="textarea" className="form-control w-100" id="msg" name='msg' placeholder='Your Msg here' rows={4} required maxLength={250}/>
            
            <center>
              <button type="submit" className="btn btn-primary mt-5">Submit</button>
              </center>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}
