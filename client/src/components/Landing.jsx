import React from 'react'
import Calender from './Calendar/Calender'
import DoctorList from './doctorList/DoctorList'

export default function Landing() {
    return (
        <div>
            <DoctorList />
            <Calender />
        </div>
    )
}
