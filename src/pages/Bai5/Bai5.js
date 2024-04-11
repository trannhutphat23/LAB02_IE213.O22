import { useState } from "react";
import data from "./bai5_data";
import './bai5.css';
import Disk from "./disk";
const Bai5 = () => {
    const [cateSel, setCateSel] = useState("");
    const handleClick = (cate) => {
        setCateSel(cate);
    }
    return (
        <div className="wrapper-bai5">
            <div className='title-bai5'>
                <div>Our Menu</div>
                <div className='underlineBai5'></div>
                <div className="btnSectionBai5">
                    <button className="btnOption" onClick={() => handleClick("")}>All</button>
                    <button className="btnOption" onClick={() => handleClick("breakfast")}>Breakfast</button>
                    <button className="btnOption" onClick={() => handleClick("lunch")}>Lunch</button>
                    <button className="btnOption" onClick={() => handleClick("shakes")}>Shakes</button>
                </div>
                <div className='listDisk'>
                    {cateSel === "" && (
                        data.map(da => {
                            return (
                                <Disk key={da.id} imageSrc={da.img} title={da.title} price={da.price} desc={da.desc}/>
                            )
                        })
                    )}
                    {cateSel !== "" && data
                        .filter(da => da.category === cateSel)
                        .map(da => {
                            return (
                                <Disk key={da.id} imageSrc={da.img} title={da.title} price={da.price} desc={da.desc}/>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Bai5;