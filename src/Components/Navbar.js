import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import './Navbar.css';
import { IconContext } from 'react-icons';
import {Link} from "react-scroll";
import { css } from '@emotion/css'

function Navbar(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const [background, setBackground] = useState("#fdfdfd")
    const sectionColor = (background) => {
        setBackground(background)
    }


    return(
        <>
            <IconContext.Provider value={{ color: 'white' }}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className={'nav-menu-items'} >
                    <li className={'navbar-toggle'} onClick={showSidebar}>
                        <div className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </div>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} >
                                <Link to={item.path} smooth={true} duration={700}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar