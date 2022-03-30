import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Logo from './res/logoimg.svg';
import masjidicon from './res/masjidicon.svg';
import shopicon from './res/shopicon.svg';
import profileicon from './res/profile.svg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AppsIcon from '@mui/icons-material/Apps';


const useStyles = makeStyles((theme) => ({
    fullnavbar: {
        backgroundColor: "#363B4D"
    },
    navbar: {
        width: "85%",
        margin: "0 auto",
    },
    icons: {
        color: "white",
        margin: "auto 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "33%",
    },
    threeicons: {
        marginLeft: "auto",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "20%",
    },
    profileicon: {
        border: "1px solid #46D490",
        borderRadius:'50px',
    },
    notification: {
        position: "relative",
        '&::after': {
            content: '" "',
            display: 'block',
            height: 60,
            backgroundColor:"red",
            width:"8px",
            height:"8px",
            borderRadius:'50px',
            position:'absolute',
            top:0,
            right:'2%',
            [theme.breakpoints.between(1280, 2562)]: {
                right:'31%',
              },
          },          
    },
status: {
        position: "relative",
        '&::after': {
            content: '" "',
            display: 'block',
            height: 60,
            backgroundColor:"#46D490",
            width:"12px",
            height:"12px",
            borderRadius:'50px',
            position:'absolute',
            top:0,
            right:'2%',
            [theme.breakpoints.between(1280, 2562)]: {
                right:'31%',
              },
          },       
},
}));


const FeedNav = () => {

    const classes = useStyles();

    return (
        <div className={`w-full h-16 items-center ${classes.fullnavbar}`}>
            <div className={`w-full h-16 flex flex-row  ${classes.navbar}`}>
                <div className={`  ${classes.navlogo}`}>
                    <a href="/" >
                        <img src={Logo} alt="logo" className={`h-13 w-12   ${classes.logo}`} />
                    </a>
                </div>
                <div className={`ml-4 items-center ${classes.icons}`}>
                    <div>
                        <FavoriteBorderIcon className={`xl:mx-6 ${classes.icon}`} />
                    </div>
                    <div className={classes.notification}>
                        <NotificationsNoneIcon className={`xl:mx-6 ${classes.noticon}`} />
                    </div>
                    
                    <div>
                        <ChatBubbleOutlineIcon className={`xl:mx-6 ${classes.icon}`} />
                    </div>
                    <div>
                        <MailOutlineIcon className={`xl:mx-6 ${classes.icon}`} />
                    </div>
                    <div>
                        <AppsIcon className={`xl:mx-6 ${classes.icon}`} />
                    </div>
                </div>
                <div className={` flex flex-row items-center ${classes.threeicons}`}>
                    <div>
                    <a href="/" >
                        <img src={masjidicon} alt="masjid" className={`h-6 w-6 xl:mx-6  ${classes.masjidicon}`} />
                    </a>
                    </div>
                    <div>
                    <a href="/" >
                        <img src={shopicon} alt="shop" className={`h-5 w-5 xl:mx-6  ${classes.shopicon}`} />
                    </a>
                    </div>
                    <div className={classes.status}>
                    <a href="/" >
                        <img src={profileicon} alt="profile" className={`h-10 w-10 xl:mx-6  ${classes.profileicon}`} />
                    </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FeedNav