import './bai4.css';
import data from './bai4_data';
import Accordion from './accordion';
const Bai4 = () => {
    return (
        <div className="wrapper-bai4">
            <div className='container_bai4'>
                <h2 className='titleMain_bai4'>Questions</h2>
                {data.map(da => {
                    return (
                        <Accordion key={da.id} title={da.title} info={da.info}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Bai4;