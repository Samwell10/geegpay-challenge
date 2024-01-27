import './SummaryCard.css'
import green from '../../Assets/Images/green1.png'
import { FaArrowTrendDown } from "react-icons/fa6";
const SummaryCard = ({title, amount, icon, chart,status, isdarkmode}) => {
    return ( 
        <div className={`${isdarkmode ? "summarycard-dark" : "summarycard"}`}>
            <div className="card-top">
                <div className="card-icon">
                   <img src={icon} alt="icons" />
                </div>
                <div className="card-graph">
                    <img src={chart}></img>
                </div>
            </div>
            <div className="card-body">
                <p className="card-title">{title}</p>
                <p className="card-text">{amount}</p>
            </div>
            <div className="card-bottom">
                <div className={status ? "gain" : "loss"}>
                    <p><span><FaArrowTrendDown/></span>23.5%</p>
                </div>
                <p className='previous-month'>vs. previous month</p>
            </div>
        </div>
    );
}
 
export default SummaryCard;