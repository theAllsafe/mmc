import React, { useState } from 'react';
import Logo from './res/logoimg.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import './NavbarLan.css';
import styled from 'styled-components';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';

const useStyles = makeStyles((theme) => ({
navbar: {
    [theme.breakpoints.between(319, 768)]: {
        width: "100%",
        height: "max-content",
    },
},
logo:{
    [theme.breakpoints.between(319, 768)]: {
        width: "100%",
        height: "max-content",
    },
},
img: {
    [theme.breakpoints.between(319, 768)]: {
        height: "2.6rem",
        width: "2rem",
        paddingTop: "10px",
        paddingLeft: "0px"
    },
    [theme.breakpoints.between(768, 1024)]: {
        height: "2.6rem",
        width: "2rem",
        paddingTop: "10px",
        paddingLeft: "0px"
    },
},

}))

const NavbarLan = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false)
    const toggleModal = () => setShow(show => !show);
    return (
        <div className={`columns-2 h-16 w-full flex flex-row text-white font-bold ${classes.navbar}`}>
            <ButtonContainer onClick={toggleModal}>
            <HorizontalSplitIcon/>
          </ButtonContainer>
            <div className={`pl-5 md:pl-20 lg:w-1/2 text-black flex flex-row h-full${classes.logo}`}>
                <a href="/" >
                    <img src={Logo} alt="logo" className={`h-20 w-13 pt-7 pl-10 ${classes.img}`} />
                </a>
                <p className='text-lg lg:text-xl text-black pt-3 pl-2 lg:pl-3 lg:pt-10'>Masjid My Community.</p>
            </div>
            <div className="NavboxL lg:w-1/2 pt-10">
                <ul className={show === true ? 'sidebar' : 'flex flex-row'}>
                    <li className="navbarLinkL">
                        <Link
                            to="/Aboutus"
                            style={
                                window.location.pathname === "/" 
                                ? { color: "white" } 
                                : null
                            }
                        >
                            About us
                        </Link>
                    </li>
                    <li className="navbarLinkL">
                        <Link
                            to="/Ads"
                            style={
                                window.location.pathname === "/onlinecourse"
                                    ? { color: "white" }
                                    : null
                            }
                        >
                            Ads
                        </Link>
                    </li>
                    <li className="navbarLinkL">
                        <Link
                            to="/Contactus"
                            style={
                                window.location.pathname === "/quiz" ? { color: "white" } : null
                            }
                        >
                            Contact us
                        </Link>
                    </li>
                    <li className="navbarLinkL">
                        <Link
                            to="/PrivacyPolicy"
                            style={
                                window.location.pathname === "/Library"
                                    ? { color: "white" }
                                    : null
                            }
                        >
                            Privacy Policy
                        </Link>
                    </li>
                    <li className="navbarLinkL">
                        <Link
                            to="/Termsofuse"
                            style={
                                window.location.pathname === "/OtherServices"
                                    ? { color: "white" }
                                    : null
                            }
                        >
                            Terms of use
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const ButtonContainer = styled.button`
display:none;
z-index:99;
@media screen and (min-width: 320px) and (max-width: 1023px) {
background-color: rgba(103, 209, 80, 0.3);
border: none;
outline: none;
padding: 0rem 0.1rem;
color: black;
border-radius: 5px;
font-size: 1.3rem;
font-weight: bold;
cursor: pointer;
height:2rem;
width: 2.5rem;
margin-top: 10px;
display:block;
text-align: center;
margin-bottom: 15px;

}

`;

export default NavbarLan