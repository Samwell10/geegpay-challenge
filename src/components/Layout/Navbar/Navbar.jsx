import { useEffect, useState } from 'react';
import './Navbar.css'
import { RiLogoutCircleLine, RiSearchLine } from "react-icons/ri";
import { LuView } from "react-icons/lu";
import { RxCalendar } from "react-icons/rx";
import { HiChevronDown, HiOutlineBell } from "react-icons/hi2";
import profile from '../../../Assets/Images/profile.jpeg'
import { Switch } from 'antd';
const Navbar = ({isopen,toggle, isdarkmode}) => {
    const [currentDate, setCurrentDate] = useState('');
    const [show, setshow] = useState(false)

    const handleshow = ()=>{
        setshow(!show);
    }
    useEffect(() => {
      const options = { month: 'long', day: '2-digit', year: 'numeric' };
      const formattedDate = new Date().toLocaleDateString('en-US', options);
      setCurrentDate(formattedDate);
    }, []);
  
    return ( 
        <div className={`${isopen?"navbar":"navbar-mobile"} ${isdarkmode ? "navbar-dark" : ""}`}>
            <div className="navbar-left">
                <p className="page-title">Dashboard</p>
                <div className="sidebar-switch">
                    <Switch checked={isopen} onChange={toggle}/>
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-search">
                    <RiSearchLine/> 
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className={`${isdarkmode ? "date-time-dark" : "date-time"}`}>
                    <RxCalendar/>
                    <p>{currentDate}</p>
                </div>
                <div className="notification">
                    <HiOutlineBell/>
                </div>
                <div className="profile" onClick={handleshow}>
                    <img src={profile} alt='Profile'></img>
                    <div className="profile-details">
                        <p className='profile-name'>Justin Bergson</p>
                        <p className='profile-email'>Justin@gmail.com</p>
                    </div>
                    <HiChevronDown/>
                    {show && <div className={`${isdarkmode ? "profile-dropdown-dark" : "profile-dropdown"}`}>
                        <div className="date-time-mobile">
                            <RxCalendar/>
                            <p>{currentDate}</p>
                        </div>
                        <div className="navbar-search-mobile">
                            <RiSearchLine/> 
                            <input type="text" placeholder="Search..."/>
                        </div>
                        <div className="profile-mobile">
                            <img src={profile} alt='Profile'></img>
                            <div className="profile-details-mobile">
                                <p className='profile-name'>Justin Bergson</p>
                                <p className='profile-email'>Justin@gmail.com</p>
                            </div>
                        </div>
                        <div className="other-nav">
                            <p><span><LuView/></span>View Profile</p>
                            <p><span><RiLogoutCircleLine/></span>Logout</p>
                        </div>
                    </div>}
                      
                </div>
                
            </div>
        </div>
    );
}
 
export default Navbar;
