import React from 'react'
import { FaRegClock } from "react-icons/fa"
import * as S from "./doctor.style"

export default function DoctorList() {
  return (
    <S.DoctorList>
      <div className='docList'>
        <h4>Available Doctors</h4>
        <div className='ListContainer'>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt='docImg' className='profileIcon' />
          </div>
          <div className='docInfoList'>
            <label className='nameTage'>Dr. Harshit</label><hr />
            <label>Specialist</label><br />
            <label>Banjara Hills</label>
          </div>
        </div>
      </div>
      <div>
        <h4>Chosen Doctors</h4>
        <div className='chooseDocList'>
          <div className='DespContainer'>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt='docImg' className='profileIcon' />
            </div>
            <div className='docInfoList'>
              <label className='nameTage'>Dr. Harshit</label><hr />
              <label>Specialist</label><br />
              <label>Banjara Hills</label>
            </div>
          </div>
          <div className='duraionDiv'>
            <div className='durationInnerDiv'>
              <FaRegClock className='imgIcons' size={30} style={{ color: "skyblue" }} />
              <label className='labelHeading'>Duration</label><br />
              <label className='labelSubHeading'>15 min</label>
            </div>
            <div className='durationInnerDiv'>
              <div>
                <label style={{ color: "skyblue", fontSize: "25px", }} className='imgIcons'>₹</label>
              </div>
              <div>
                <label className='labelHeading'>Fee</label><br />
                <label className='labelSubHeading'>₹ 2000</label>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className='durationInnerDiv'>
              <div>
                <FaRegClock className='imgIcons' size={25} /></div>
              <div>
                <label className='labelHeading'>EDUCATION</label><br />
                <label className='labelSubHeading'>MBBS</label>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className='durationInnerDiv'>
              <div>
                <FaRegClock className='imgIcons' size={25} />
              </div>
              <div>
                <label className='labelHeading'>LOCAION</label><br />
                <label className='labelSubHeading'>BANJARA</label>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className='durationInnerDiv'>
              <div>
                <FaRegClock className='imgIcons' size={25} />
              </div>
              <div>
                <label className='labelHeading'>ABOUTS</label><br />
                <label className='labelSubHeading'>ABOUT SEC</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.DoctorList>
  )
}
