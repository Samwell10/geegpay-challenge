import { Outlet } from "react-router-dom";
import "./Layout.css"
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

const Layout = ({mode, isdarkmode}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = (checked) => {setIsOpen (checked);}
    return (
        <div className="layout">
            <div className={`${isOpen ? "left-side" : "left-side-mobile"} ${isdarkmode ? "left-side-dark" : ""}`}>
                <Sidebar isopen={isOpen} modetoggle={mode} isdarkmode={isdarkmode}/>
            </div>
            <div className={`${isOpen?"right-side":"right-side-mobile"} ${isdarkmode ? "right-side-dark" : ""}`}>
                <div className="layout-top">
                    <Navbar isopen={isOpen} toggle={toggle} isdarkmode={isdarkmode}/>
                </div>
                <div className="layout-body">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
 
export default Layout;