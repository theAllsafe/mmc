import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import profilebg from './res/profilebg.svg';
import profilepic from './res/profilepic.svg';
import donate from './res/donate.svg';
// import earning from './res/earning.svg';
import mycoin from './res/mycoin.svg';
// import saqda from './res/saqda.svg';
import rechargewallet from './res/rechargewallet.svg';
import GoogleFontLoader from 'react-google-font-loader';
import FeedNav from '../../Feed/FeedNav';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const useStyles = makeStyles((theme) => ({
    maincont: {
        background: "#545A70",
        height: "350vh"
    },
    profilebg: {
        margin: "0 auto",
        width: "97.5%",
        height: "488px",
        backgroundImage: `url(${profilebg})`,
    },
    camera: {
        position: "absolute",
        left: "6%",
        top: "16%",
    },
    qrcode: {
        background: "#202836",
        position: "absolute",
        left: "92%",
        top: "16%",
    },
    Addicon: {
        position: "absolute",
        left: "76%",
        top: "63%",
    },
    profilepicContainer: {
        position: "absolute",
        left: "41%",
        top: "67%",
    },
    menuitems: {
        width: "97%",
        margin: "1% auto"
    },
    wallet: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        marginBottom: "15px",
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "4% auto",
        },
    },
}));
const UserProfilePage = () => {
    const classes = useStyles();
    return (
        <div>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Raleway',
                        weights: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
                    },
                    {
                        font: "'Waiting for the Sunrise', cursive",
                        weights: [400, 100],
                    },
                    {
                        font: "'Playfair Display', serif",
                        weights: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />
            <FeedNav />
            <div className={`w-100 ${classes.maincont}`}>
                <div className="container mx-auto pt-3" >
                    <div className={classes.profilebg}>
                        {/* <div className={classes.profilebg}>
                            <img src={profilebg} alt="profilebg" className={classes.profilebg} />
                        </div> */}
                        <div className={classes.camera}>
                            <CameraAltIcon style={{ color: "white" }} />
                        </div>
                        <div className={`h-10 w-10 flex justify-center items-center ${classes.qrcode}`}>
                            <QrCode2Icon style={{ color: "white" }} />
                        </div>
                        <div className={`flex flex-col items-center justify-center ${classes.profilepicContainer}`}>
                            <img src={profilepic} alt="profilepic" className={`relative ${classes.profilepic}`} />
                            <div className={`h-6 w-6 md:h-10 md:w-10 bg-blue-300 rounded-full items-center flex justify-center absolute ${classes.Addicon}`}>
                                <AddIcon style={{ color: "white" }} />
                            </div>
                            <p className='text-xl text-white font-bold'>Wamique Ahmad</p>
                            <p className='text-sm text-white'>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className={`mt-3 flex flex-row justify-between ${classes.menuitems}`}>
                        <div className='flex flex-row '>
                            <div className="h-12 w-44 flex justify-center items-center bg-slate-800 rounded-xl">
                                <p className='text-white font-bold'>Timeline</p>
                            </div>
                            <div className="h-12 w-44 flex justify-center items-center bg-slate-800 rounded-xl ml-4">
                                <p className='text-white font-bold'>About</p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className="h-12 w-44 flex justify-center items-center bg-slate-800 rounded-xl">
                                <p className='text-white font-bold'>Friends</p>
                            </div>
                            <div className="h-12 w-44 flex justify-center items-center bg-slate-800 rounded-xl ml-4">
                                <p className='text-white font-bold'>Photos</p>
                            </div>
                        </div>

                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3 mt-32" >
                        <div class="lg:col-span-4">
                        <div className={`mt-3 mx-auto ${classes.wallet}`}>
                                <div className="grid grid-cols-8 h-9">
                                    <div className="col-span-1 py-3 flex justify-center">
                                       
                                    </div>
                                    <div className="col-span-4 flex items-center">
                                        <p className="text-xl py-3 text-left">My Wallet </p>
                                        <div className='text-green-500 pl-2'><CheckCircleIcon /></div>
                                    </div>
                                    <div className="col-span-1 py-3">                                      
                                      <ShareIcon />
                                    </div>
                                    <div className="col-span-1 py-3">                                      
                                      <MoreVertIcon/>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-8 mx-auto">
                                        <div className=" col-span-3 mx-auto items-center">
                                            <p className="text-xl text-red-400 font-thin" style={{ fontFamily: "'Waiting for the Sunrise', cursive" }} >Flash Sale</p>
                                            <p className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>THE HEKIM</p>
                                            <p className="pt-6 lg:pt-1" style={{ fontSize: "12px" }}>Get 20</p>
                                            <p className="" style={{ fontSize: "12px" }}>Discount with</p>
                                            <p className="" style={{ fontSize: "12px" }}>Coupon Code.</p>
                                        </div>
                                        <div className=" col-span-5 flex justify-center">
                                            {/* <img src={advertimg} alt="advertimg" /> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-8 bg-blue-300">
                            ri
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserProfilePage