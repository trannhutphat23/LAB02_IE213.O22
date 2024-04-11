import { useState } from 'react';
import './bai3.css';
import data from './bai3_data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Bai3 = () => {
    const [currId, setCurrId] = useState(1);
    const handleRightClick = () => {
        const firstID = data[0].id;
        const lastID = data[data.length-1].id;
        (currId === lastID) ? setCurrId(firstID) :  setCurrId(prev => (prev + 1)) 
    }
    const handleLeftClick = () => {
        const firstID = data[0].id;
        const lastID = data[data.length-1].id;
        (currId === firstID) ? setCurrId(lastID) :  setCurrId(prev => (prev - 1)) 
    }
    const handleRandomID = () => {
        const firstID = data[0].id;
        const lastID = data[data.length-1].id;
        const randomNum = Math.floor(Math.random() * lastID + firstID)
        setCurrId(randomNum);
    }
    return (
        <div className="wrapper-bai3">
            {data
                .filter(da => {
                    return da.id === currId;
                 })
                .map(da => {
                    return (
                        <div className='containerBai3' key={da.id}>
                            <div className='avatar'>
                                <span className='emptyBackground'></span>
                                <img className="imageBai3" src={da.image} alt={`${da.name}`}/>
                                <FaQuoteRight className='quote-icon'/>
                            </div>
                            <div className='infoUser'>
                                <div className='nameUser'>{da.name}</div>
                                <div className='majorUser'>{da.job}</div>
                                <p className='introUser'>{da.text}</p>
                            </div>
                            <div className='switchIcon'>
                                <FaChevronLeft className='arrowLeftIcon'  onClick={handleLeftClick}/>
                                <FaChevronRight className='arrowRightIcon' onClick={handleRightClick}/>
                            </div>
                            <div className='btnSectionBai3'>
                                <button className='btnBai3' onClick={handleRandomID}>Surprise Me</button>
                            </div>
                        </div>
                    )
            })}
        </div>
    )
}

export default Bai3;