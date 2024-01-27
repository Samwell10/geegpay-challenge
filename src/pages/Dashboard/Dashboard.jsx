import { HiChevronDown } from "react-icons/hi2";
import "./Dashboard.css"
import Graph from "../../components/Charts/Chart";
import SummaryCard from "../../components/Card/SummaryCard";
import BasicTable from "../../components/Tables/Table";
import Platform from "../../components/Platform/Platform";
import order from "../../Assets/Images/box-tick.svg"
import refund from "../../Assets/Images/3d-rotate.svg"
import sales from "../../Assets/Images/shopping-cart.svg"
import Income from "../../Assets/Images/coin.svg"
import green from '../../Assets/Images/green1.png'
import red from '../../Assets/Images/red.svg'
import { useState } from "react";
const Dashboard = ({isdarkmode}) => {
    const [show, setshow] = useState(false)
    const [filter, setfilter] =useState('Weekly')

    const handleshow = ()=>{
        setshow(!show);
    }
    const handlefilter = (id)=>{
        setfilter(id)
    }
    return ( 
        <div className="dashboard">
            <div className={`${isdarkmode ? "container-dark" : "sales-container"}`}>
                <div className="sales-top">
                    <p className="container-header">
                        Sales Trends
                    </p>
                    <div className="container-filter">
                        <p className="select-short">Short by:</p>
                        <div className="select-by" onClick={handleshow}>
                            <p>{filter}</p>
                            <HiChevronDown/>
                        </div>
                        {show && <div className="select-by-dropdown">
                            <p onClick={()=>{handleshow(); handlefilter("Weekly")}}>Weekly</p>
                            <p onClick={()=>{handleshow(); handlefilter("Monthly")}}>Monthly</p>
                            <p onClick={()=>{handleshow(); handlefilter("Yearly")}}>Yearly</p>
                            <p onClick={()=>{handleshow(); handlefilter("Daily")}} >Daily</p>
                        </div>
                        }
                        
                    </div>
                </div>
                <div className="sales-body">
                    <Graph isdarkmode={isdarkmode}/>
                </div>
            </div>
            <div className="summary-container">
                <SummaryCard title="Total Order" amount="350" icon={order} chart={green} status={true} isdarkmode={isdarkmode}/>
                <SummaryCard title="Total Refund" amount="270" icon={refund} chart={red} status={false} isdarkmode={isdarkmode}/>
                <SummaryCard title="Average Sales" amount="1567" icon={sales} chart={red} status={false} isdarkmode={isdarkmode}/>
                <SummaryCard title="Total Income" amount="$350.000" icon={Income} chart={green} status={true} isdarkmode={isdarkmode}/>
            </div>
            <div className={`${isdarkmode ? "container-dark" : "sales-container"}`}>
                <div className="sales-top">
                    <p className="container-header">
                        Last Orders
                    </p>
                    <div className="container-filter">
                        <p className="see-all">See All</p>
                    </div>
                </div>
                <div className="orders-tble">
                    <BasicTable isdarkmode={isdarkmode}/>
                </div>
            </div>
            <div className={`${isdarkmode ? "container-dark" : "sales-container"}`}>
                <div className="sales-top">
                    <p className="container-header">
                        Top Platform
                    </p>
                    <div className="container-filter">
                        <p className="see-all">See All</p>
                    </div>
                </div>
                <div className="platform-body">
                    <Platform 
                        platforms="Book Bazaar" 
                        width="60%"
                        color="purple"
                        amount=" $2,500,000"
                        percent="+15%"
                    />
                    <Platform 
                        platforms="Artisan Aisle" 
                        width="50%"
                        color="#54C5EB"
                        amount=" $1,800,000"
                        percent="+10%"
                    />
                    <Platform 
                        platforms="Toy Troop" 
                        width="30%"
                        color="#FFB74A"
                        amount="$1,200,000"
                        percent="+8%"
                    />
                    <Platform 
                        platforms="XStore" 
                        width="40%"
                        color="#FF4A55"
                        amount=" $2,500,000"
                        percent="+15%"
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;