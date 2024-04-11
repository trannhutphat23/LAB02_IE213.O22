import './Bai2.css';
import Tour from './tour';
import data from './bai2_data';
import { useState } from 'react';
const Bai2 = () => {
    const [idDel, setIdSel] = useState([])
    const handleIdDel = (id) => {
        setIdSel([...idDel, id]);
    }
    const handleRefresh = () => {
        setIdSel([]);
    }
    return (
        <div className="wrapper-bai2">
            {idDel.length === 5 && (
                <div className='emptyScreen'>
                    <div>No Tours Left</div>
                    <button className='refreshBtn' onClick={handleRefresh}>Refresh</button>
                </div>
            )}
            {idDel.length !== 5 && (
                <div className='title-bai2'>
                    <div>Our Tours</div>
                    <div className='underline'></div>
                    <div className='listTour'>
                    {data
                        .filter(da => !idDel.includes(da.id))
                        .map(da => (
                            <div key={da.id}>
                                <Tour 
                                    id={da.id} 
                                    imageSrc={da.image} 
                                    title={da.title} 
                                    price={da.price} 
                                    info={da.info}
                                    handleIdDel={(index) => handleIdDel(index)}    
                                />
                            </div>
                        ))
                    }
                    </div>
                </div>
                
            )}
        </div>
    )
}

export default Bai2;