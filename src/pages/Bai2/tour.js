import { useState } from "react";

const Tour = ({id, imageSrc, title, price, info, handleIdDel}) => {
    const [readMore, setReadMore] = useState(false);
    const handleClickDelete = () => {
        handleIdDel(id);
    }
    return (
        <div className="tourCard">
            <img className='imgBai2' src={require(`${imageSrc}`)} alt={title}/>
            <div className="infoTour">
                <div className='priceTour'>$ {price}</div>
                <div className="nameTour">{title}</div>
                <p className="infoDetailTour">
                    <span className="contentTour">
                        {readMore ? info : `${info.slice(0,200)}...`}
                    </span>
                    <button className="btnShow" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show Less' : 'Read More'}
                    </button>   
                </p>
                <button className="deleteBtn" onClick={() => handleClickDelete(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    )
}

export default Tour;