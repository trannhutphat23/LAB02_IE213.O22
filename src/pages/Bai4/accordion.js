import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordion = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className='question'>
            <div className='infoSummary'>
                <div className='title_bai4'>{title}</div>
                <button className='btnShowIcon' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            <div className='info_bai4'>
                {showInfo && <p>{info}</p>}
            </div>
        </div>
    )
}

export default Accordion;