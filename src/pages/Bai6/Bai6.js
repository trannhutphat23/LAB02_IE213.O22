import data from "./bai6_data";
import { FaAngleDoubleRight } from 'react-icons/fa'
import './bai6.css';
import { useState } from "react";
const Bai6 = () => {
    const [company, setCompany] = useState("TOMMY");
    const [companyHover, setCompanyHover] = useState("");
    const handleClick = (company) => {
        setCompany(company);
    }
    const handleHover = (company) => {
        setCompanyHover(company)
    }
    return (
        <div className="wrapper-bai6">
            <div className="containerBai6">
                <nav className="sideBar">
                    <div onClick={() => handleClick("TOMMY")} className="optionTab" onMouseEnter={() => handleHover("TOMMY")}>
                        <div className={(company === "TOMMY" || companyHover === "TOMMY") ? 'vertical-lineClick' : 'vertical-lineWhite'}></div>    
                        <span className={(company === "TOMMY" || companyHover === "TOMMY") ? 'colorTextChange' : ''}>TOMMY</span>
                    </div>
                    <div onClick={() => handleClick("BIGDROP")} className="optionTab" onMouseEnter={() => handleHover("BIGDROP")}>
                        <div className={(company === "BIGDROP" || companyHover === "BIGDROP") ? 'vertical-lineClick' : 'vertical-lineWhite'}></div>    
                        <span className={(company === "BIGDROP" || companyHover === "BIGDROP") ? 'colorTextChange' : ''}>BIGDROP</span>
                    </div>
                    <div onClick={() => handleClick("CUKER")} className="optionTab" onMouseEnter={() => handleHover("CUKER")}>
                        <div className={(company === "CUKER" || companyHover === "CUKER") ? 'vertical-lineClick' : 'vertical-lineWhite'}></div>    
                        <span className={(company === "CUKER" || companyHover === "CUKER") ? 'colorTextChange' : ' '}>CUKER</span>
                    </div>
                </nav>
                {data
                    .filter(da => da.company === company)
                    .map(da => {
                        return (
                            <div className="contentBai6">
                                <div className="titleBai6">{da.title}</div>
                                <div className="tagCompany">{company}</div>
                                <span className="date">{da.dates}</span>
                                <div className="dutiesSection">
                                    {da.duties.map(duty => {
                                        return (
                                            <div className="duty">
                                                <FaAngleDoubleRight className="iconAngle"/>
                                                <div className="duties">{duty}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                    }
            </div>
        </div>
    )
}

export default Bai6;