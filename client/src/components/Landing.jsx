import React, { useState } from 'react'
import Calender from './Calendar/Calender'
import DoctorList from './doctorList/DoctorList'
import { FaSearch } from "react-icons/fa";
import * as S from "./landing.style"

export default function Landing() {

    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <S.LandingPage>
            <S.SearchBarContainer>
                <div className="input-container">
                    <FaSearch className="icon" />
                    <input
                        type="text"
                        placeholder="Type to Search Doctor Name"
                    // value={search}
                    // onChange={handleSearchChange}
                    />
                </div>
            </S.SearchBarContainer>
            <S.FilterContainer>
                <div className="input-container">
                    <FaSearch className="icon" />
                    <button onClick={handleModalOpen} className="filterBtns">Regular</button>
                    <FaSearch className="icon" />
                    <button className="filterBtns">Insertion</button>
                    <FaSearch className="icon" />
                    <input
                        type="text"
                        placeholder="Search Location"
                    // value={search}
                    // onChange={handleSearchChange}
                    />
                </div>
                {showModal && (
                    <div className="modalSection">
                        <div>
                            <label>Sort By... </label>
                            <button onClick={handleModalClose} className="crossIcons">
                                &times;
                            </button>
                        </div>
                        <hr />
                        <div className="sortLabel">
                            Regular
                        </div>
                        <hr />
                        <div className="sortLabel">
                            Weekend
                        </div>
                    </div>
                )}
            </S.FilterContainer>
            <div>
                <DoctorList />
            </div>
            <div>
                <Calender />
            </div>
        </S.LandingPage>
    )
}
