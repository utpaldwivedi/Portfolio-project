import React, { useState } from "react";
import './index.css';
import u_logo from '../../assets/logo.png'
import u_logo_hover from '../../assets/logo_hover.png'
import dropdown from '../../assets/dropdown.png'
import {Link} from 'react-scroll'

export default function Navbar(){
    const [logo,setLogo]=useState(u_logo)
    const [dropClicked,setDropClicked]=useState(false);
    function handleDropDown(){
        console.log(dropClicked)
        if(dropClicked==false){
            document.querySelector(".dropItems").style.display="flex";
            setDropClicked(true)
        }
        else{
            document.querySelector(".dropItems").style.display="none";
            setDropClicked(false)
        }
    }
    function handleMouseOver(){
        setLogo(u_logo_hover)
    }
    function handleMouseOut(){
        setLogo(u_logo)
    }

    return (
        <div className="navBar">
            <div className="navbar">
                <div className="logo">
                    <Link to="home" offset={-92} ><img className="udLogo" src={logo} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt="Utpal's Logo" height={90}/></Link>
                </div>
                <div className="menu">
                    <ul className="navItemsContainer" style={{listStyle:"none"}}>
                        <Link to="home" smooth={true} duration={50} spy={true} offset={-92}><li className="navItems">Home</li></Link>
                        <Link to="about" smooth={true} duration={50} spy={true} offset={-92}><li className="navItems">About</li></Link>
                        <Link to="skills" smooth={true} duration={50} spy={true} offset={-92}><li className="navItems">Skills</li></Link>
                        <Link to="projects" smooth={true} duration={50} spy={true} offset={-92}><li className="navItems">Projects</li></Link>
                        <Link to="contact" smooth={true} duration={50} spy={true} offset={-92}><li className="navItems">Contact</li></Link>
                    </ul>
                </div>
            </div>
            <div className="navbarDropdown">
                <div className="navbar">
                    <div className="logo">
                        <Link to="home" offset={-92} ><img className="udLogo" src={logo} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt="Utpal's Logo" height={90}/></Link>
                    </div>
                    <div className="menu">
                        <img className="dropdown" src={dropdown} alt="dropdown"  onClick={handleDropDown} />
                    </div>
                </div>
                <div className="dropItems">
                    <Link to="home" smooth={true} duration={50} spy={true} offset={dropClicked?-162:-92}><li className="navItems">Home</li></Link>
                    <Link to="about" smooth={true} duration={50} spy={true} offset={dropClicked?-162:-92}><li className="navItems">About</li></Link>
                    <Link to="skills" smooth={true} duration={50} spy={true} offset={dropClicked?-162:-92}><li className="navItems">Skills</li></Link>
                    <Link to="projects" smooth={true} duration={50} spy={true} offset={dropClicked?-162:-92}><li className="navItems">Projects</li></Link>
                    <Link to="contact" smooth={true} duration={50} spy={true} offset={dropClicked?-162:-92}><li className="navItems">Contact</li></Link>
                </div>
            </div>
        </div>
    )
}