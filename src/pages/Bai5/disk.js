const Disk = ({imageSrc, title, price, desc}) => {
    return (
        <div className="diskCard">
            <img className='imgBai5' src={require(`${imageSrc}`)} alt={title}/>
            <div className="title_price">
                <div className="titleDisk">{title}</div>
                <div className="priceDisk">$ {price}</div>
            </div>
            <div className="contentDisk">{desc}</div>
        </div>
    )
}

export default Disk;