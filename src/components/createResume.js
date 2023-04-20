import React from 'react'

const CreateResume = () => {
  return (
    <div className='createResume'>
    <div className='createInput'>
          <div className='head'>
              <h2>Enter Details Given Below</h2>
          </div>
          <div className='heading'>
              <h3>Contact Information</h3>
          </div>
          <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp' type='text' placeholder='First Name' />
              <span>First Name</span>
            </div>
            <div className='media'>
              <input className='mediainp' type='text' placeholder='Middle Name' />
              <span>Middle Name</span>
            </div>
            <div className='media'>
              <input className='mediainp' type='text' placeholder='Last Name' />
              <span>Last Name</span>
            </div>
          </div>
          {/* <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp summary' type='text' placeholder='Summary' />
              <span>Summary</span>
            </div>
          </div> */}
          <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp tele' type='email' placeholder='Email id' />
              <span>Email Id</span>
            </div>
            <div className='media'>
              <input className='mediainp tele' type='text' placeholder='Contact Number' />
              <span>Contact Number</span>
            </div>
          </div>
          <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp summary' type='text' placeholder='Address' />
              <span>Adress</span>
            </div>
          </div>
          <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp summary' type='text' placeholder='City' />
              <span>City</span>
            </div>
          </div>
          <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp summary' type='text' placeholder='State' />
              <span>State</span>
            </div>
          </div>
          <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp tele' type='email' placeholder='Pincode' />
              <span>Pincode</span>
            </div>
            <div className='media'>
              <input className='mediainp tele' type='text' placeholder='Nationality' />
              <span>Nationality</span>
            </div>
          </div>
          <div className='heading'>
              <h3>Resume Heading and Summary</h3>
          </div>
          <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp summary' type='text' placeholder='Heading Ex : Full Stack Developer , Android Developer with 11+ years Experience' />
              <span>Heading</span>
            </div>
          </div>
          <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp summary' type='text' placeholder='Summary' />
              <span>Summary</span>
            </div>
          </div>
          <div className='heading'>
              <h3>Education / Qualification</h3>
          </div>
          <div className='division'>
              <div className='inpMedia'>
                  <div className='media'>
                    <input className='mediainp summary' type='text' placeholder='Degree / Course' />
                    <span>Degree / Course</span>
                  </div>
              </div>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp summary' type='text' placeholder='Institute / College' />
                  <span>Institute / College</span>
                </div>
              </div>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp summary' type='text' placeholder='University / Board' />
                  <span>University / Board</span>
                </div>
              </div>
              <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp tele' type='email' placeholder='Percentage / CGPA' />
              <span> Percentage / CGPA </span>
            </div>
            <div className='media'>
              <input className='mediainp tele' type='text' placeholder='Year of Passing' />
              <span>Year of Passing</span>
            </div>
          </div>
          </div>
          <hr/>
          <div className='division'>
              <div className='inpMedia'>
                  <div className='media'>
                    <input className='mediainp summary' type='text' placeholder='Degree / Course' />
                    <span>Degree / Course</span>
                  </div>
              </div>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp summary' type='text' placeholder='Institute / College' />
                  <span>Institute / College</span>
                </div>
              </div>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp summary' type='text' placeholder='University / Board' />
                  <span>University / Board</span>
                </div>
              </div>
              <div className='inpMedia'>
            <div className='media'>
              <input className='mediainp tele' type='email' placeholder='Percentage / CGPA' />
              <span> Percentage / CGPA </span>
            </div>
            <div className='media'>
              <input className='mediainp tele' type='text' placeholder='Year of Passing' />
              <span>Year of Passing</span>
            </div>
          </div>
          </div>
          <div className='heading'>
              <h3>Work Experience</h3>
          </div>
          <div className='division'>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp summary' type='text' placeholder='Organisation' />
                  <span>Organisation </span>
                </div>
              </div>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp summary' type='text' placeholder='Designation' />
                  <span>Designation</span>
                </div>
              </div>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp tele' type='email' placeholder='From' />
                  <span> From </span>
                </div>
                <div className='media'>
                  <input className='mediainp tele' type='text' placeholder='To' />
                  <span>To</span>
                </div>
              </div>
              <div className='inpMedia'>
                  <div className='media'>
                    <input className='mediainp summary' type='text' placeholder='Responsibility' />
                    <span>Responsibility</span>
                  </div>
              </div>
          </div>
          <hr/>
          <div className='division'>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp summary' type='text' placeholder='Organisation' />
                  <span>Organisation </span>
                </div>
              </div>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp summary' type='text' placeholder='Designation' />
                  <span>Designation</span>
                </div>
              </div>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp tele' type='email' placeholder='From' />
                  <span> From </span>
                </div>
                <div className='media'>
                  <input className='mediainp tele' type='text' placeholder='To' />
                  <span>To</span>
                </div>
              </div>
              <div className='inpMedia'>
                  <div className='media'>
                    <input className='mediainp summary' type='text' placeholder='Responsibility' />
                    <span>Responsibility</span>
                  </div>
              </div>
          </div>
          <div className='heading'>
              <h3>Skills</h3>
          </div>
          <div className='division skills'>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp ' type='text' placeholder='Skill' />
                  <span>Skill </span>
                </div>
              </div>
              <div className='inpMedia'>
                <div className='media'>
                  <input className='mediainp ' type='text' placeholder='Skill' />
                  <span>Skill</span>
                </div>
              </div>
              <div className='inpMedia'>
                  <div className='media'>
                    <input className='mediainp ' type='text' placeholder='Skill' />
                    <span>Skill</span>
                  </div>
              </div>
              <div className='inpMedia'>
                  <div className='media'>
                    <input className='mediainp ' type='text' placeholder='Skill' />
                    <span>Skill</span>
                  </div>
              </div>
              <div className='inpMedia'>
                  <div className='media'>
                    <input className='mediainp' type='text' placeholder='Skill' />
                    <span>Skill</span>
                  </div>
              </div>
              <div className='inpMedia'>
                  <div className='media'>
                    <input className='mediainp' type='text' placeholder='Skill' />
                    <span>Skill</span>
                  </div>
              </div>
          </div>
          <div className='heading'>
              <h3>Certifications</h3>
          </div>
          
    </div>
    </div>
  )
}

export default CreateResume
