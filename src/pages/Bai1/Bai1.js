import { useState } from 'react';
import './bai1.css'
import data from './bai1_data';
const Bai1 = () => {
    const [num, setNum] = useState(5)
    const handleClick = () => {
        setNum(0);
    }
    return (
        <div className="wrapper-bai1">
            <div className='birthday_card'>
                <p className='title-bai1'>{num} Birthday's Today</p>
                {num === 5 && data.map((da, index) => {
                    return (
                        <div key={index} className='card_list'>
                            <img className='imgBai1' src={require(`${da.image}`)} alt={`${da.name}_image`}/>
                            <div className='infoList'>
                                <span className='name'>{da.name}</span>
                                <span>{da.year} year</span>
                            </div>
                        </div>
                    )
                })}
                <div className='button-bai1' onClick={handleClick}>Clear All</div>
            </div>
        </div>
    )
}

export default Bai1;