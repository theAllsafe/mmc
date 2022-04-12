import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import profilebg from './res/profilebg.svg';
import profilepic from './res/profilepic.svg';
import zakat from './res/zakat.svg';
import profileicon from './res/profile.svg';
import more1 from './res/more1.svg';
import more2 from './res/more2.svg';
import more3 from './res/more3.svg';
import more4 from './res/more4.svg';
import friend1 from './res/friend1.svg';
import friend2 from './res/friend2.svg';
import earnings from './res/earnings.svg';
import uploadedpic1 from './res/uploadedpic1.svg';
import fillshare from './res/fillshare.svg';
import mycoin from './res/mycoin.svg';
import sadqa from './res/sadqa.svg';
import photo from './res/photo.svg';
import rechargewallet from './res/rechargewallet.svg';
import GoogleFontLoader from 'react-google-font-loader';
import FeedNav from '../../Feed/FeedNav';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import star from './res/star.svg';

const useStyles = makeStyles((theme) => ({
    maincont: {
        background: "#545A70",
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
        [theme.breakpoints.between(700, 768)]: {
            left: "12%",
        },
        [theme.breakpoints.between(768, 1280)]: {
            left: "14%",
        },
        [theme.breakpoints.between(1280, 1441)]: {
            left: "9%",
        },
    },
    qrcode: {
        background: "#202836",
        position: "absolute",
        left: "92%",
        top: "16%",
        [theme.breakpoints.down(768)]: {
            left: "84%",
        },
        [theme.breakpoints.down(425)]: {
            left: "85%",
        },
        [theme.breakpoints.down(375)]: {
            left: "82%",
        },
        [theme.breakpoints.between(768, 1280)]: {
            left: "82%",
        },
        [theme.breakpoints.between(1280, 1441)]: {
            left: "87%",
        },
    },
    Addicon: {
        position: "absolute",
        left: "54%",
        top: "63%",
    },
    profilepicContainer: {
        position: "absolute",
        left: "0%",
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
        [theme.breakpoints.down(1024)]: {
            width: "95%",
            margin: "4% auto",
        },
    },
    notification: {
        position: "relative",
        '&::after': {
            content: '" "',
            display: 'block',
            height: 60,
            backgroundColor: "red",
            width: "8px",
            height: "8px",
            borderRadius: '50px',
            position: 'absolute',
            top: 0,
            left: '98%',
            [theme.breakpoints.between(320, 426)]: {
                width: "6px",
                height: "6px",
            },
            [theme.breakpoints.between(550, 1024)]: {
                left: '100%',
                width: "6px",
                height: "6px",
            },
            [theme.breakpoints.between(1024, 2562)]: {
                left: '10%',
            },
        },
    },
    basicinfo: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        paddingBottom: "0px",
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "4% auto",
        },
    },
    photos: {
        background: "#202836",
        borderRadius: "20px",
        color: "white",
        paddingBottom: "0px",
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "4% auto",
        },
    },
    photo: {
        borderRadius: "17%",
    },
    feedpost1: {
        background: "#202836",
        borderRadius: "20px",
        color: "white",
        height: "46.5%",
        [theme.breakpoints.down( 1024)]: {
            width: "95%",
            margin: "4% auto",
            height: "47%",
        },
        [theme.breakpoints.between(1024, 1280)]: {
            width: "95%",
            margin: "4% auto",
            height: "41%",
        },
        [theme.breakpoints.between(1536, 2561)]: {
            width: "100%",
            margin: "4% auto",
            height: "32%",
        },
    },
    lcs: {
        position: "relative",
        left: "63%",
        bottom: "4%",
    },
    lcsicons: {
        [theme.breakpoints.between(320, 426)]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.between(425, 768)]: {
            fontSize: "12px !important",
        },
    },
    lcsicons1: {
        [theme.breakpoints.between(320, 426)]: {
            width: "12px",
            height: "auto",
        },
        [theme.breakpoints.between(425, 600)]: {
            width: "12px",
            height: "auto",
        },
    },
    moreimg: {
        [theme.breakpoints.between(320, 376)]: {
            width: "25%"
        },
        [theme.breakpoints.between(375, 426)]: {
            width: "20%"
        },
        [theme.breakpoints.between(426, 600)]: {
            width: "18%"
        },
        [theme.breakpoints.between(600, 768)]: {
            width: "22%"
        },
    },
    more1: {
        [theme.breakpoints.between(320, 600)]: {
            width: "24px",
        },
    },
    more2: {
        position: "relative",
        right: "15%",
        [theme.breakpoints.between(320, 600)]: {
            width: "24px",
        },
    },
    more3: {
        position: "relative",
        right: "30%",
        [theme.breakpoints.between(320, 600)]: {
            width: "24px",
        },
    },
    more4: {
        position: "relative",
        right: "46%",
        [theme.breakpoints.between(320, 600)]: {
            width: "24px",
        },
    },
    liked: {
        fontSize: "12px",
        [theme.breakpoints.between(320, 426)]: {
            fontSize: "8px",
        },
    },
    friends: {
        background: "#202836",
        borderRadius: "30px",
        color: "white",
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
                        <div className={`flex flex-col items-center justify-center w-full ${classes.profilepicContainer}`}>
                            <img src={profilepic} alt="profilepic" className={`relative w-1/6 border-0 rounded-full ${classes.profilepic}`} />
                            <div className={`h-6 w-6 md:h-10 md:w-10 bg-blue-400 rounded-full items-center flex justify-center absolute ${classes.Addicon}`}>
                                <AddIcon style={{ color: "white" }} className={classes.lcsicons} />
                            </div>
                            <p className='text-sm lg:text-xl text-white font-bold'>Wamique Ahmad</p>
                            <p className='text-xs lg:text-sm text-white'>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className={`mt-3 flex flex-row justify-between ${classes.menuitems}`}>
                        <div className='flex flex-row '>
                            <div className="lg:h-12 lg:w-44 flex justify-center items-center bg-slate-800 rounded-xl">
                                <p className='text-xs lg:text-base text-white font-bold px-1.5  py-1.5'>Timeline</p>
                            </div>
                            <div className="lg:h-12 lg:w-44 flex justify-center items-center bg-slate-800 rounded-xl ml-1 lg:ml-4">
                                <p className='text-xs lg:text-base text-white font-bold px-1.5  py-1.5'>About</p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className="lg:h-12 lg:w-44 flex justify-center items-center bg-slate-800 rounded-xl">
                                <p className='text-xs lg:text-base text-white font-bold px-1.5  py-1.5'>Friends</p>
                            </div>
                            <div className="lg:h-12 lg:w-44 flex justify-center items-center bg-slate-800 rounded-xl ml-1 lg:ml-4">
                                <p className='text-xs lg:text-base text-white font-bold px-1.5  py-1.5'>Photos</p>
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
                                        <p className="text-xl py-3 text-left font-bold">My Wallet </p>
                                        <div className='text-green-500 pl-2'><CheckCircleIcon /></div>
                                    </div>
                                    <div className="col-span-1 py-3">
                                        <ShareIcon />
                                    </div>
                                    <div className="col-span-1 py-3">
                                        <div classname={classes.notification}>
                                            <MoreVertIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-24'>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className='grid grid-cols-5 gap-2 w-11/12 mx-auto'>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src={mycoin} alt="mycoin" />
                                            <p className='text-xs md:text-sm'>My Coins</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src={earnings} alt="mycoin" />
                                            <p className='text-xs md:text-sm'>Earnings</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src={sadqa} alt="mycoin" />
                                            <p className='text-xs md:text-sm'>Sadqa</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src={zakat} alt="mycoin" />
                                            <p className='text-xs md:text-sm'>Zakat</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src={rechargewallet} alt="mycoin" />
                                            <p className='text-xs md:text-sm'>Recharge Wallet</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={`mt-3 mx-auto ${classes.basicinfo}`}>
                                    <div className="grid grid-cols-6">
                                        <div className="col-span-1 py-3">
                                        </div>
                                        <div className="col-span-4">
                                            <p className="text-xl py-3 text-left font-bold">Basic Infos</p>
                                        </div>
                                        <div className="col-span-1 py-3">
                                            <MoreVertIcon />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="border-t border-slate-400 "></p>
                                        <div className='grid grid-cols-6 h-16'>
                                            <div className="col-span-1 py-3">
                                            </div>
                                            <div className='col-span-5 py-3'>
                                                <p className="text-lg text-left font-bold">Studied at</p>
                                                <p className="text-left text-xs">Jamia millia islamia University</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="border-t border-slate-400"></p>
                                        <div className='grid grid-cols-6 h-16'>
                                            <div className="col-span-1 py-3">
                                            </div>
                                            <div className='col-span-5 py-3'>
                                                <p className="text-lg text-left font-bold">From</p>
                                                <p className="text-left text-xs">Patna, Bihar</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="border-t border-slate-400"></p>
                                        <div className='grid grid-cols-6 h-16'>
                                            <div className="col-span-1 py-3">
                                            </div>
                                            <div className='col-span-5 py-3'>
                                                <p className="text-lg text-left font-bold">Lives in</p>
                                                <p className="text-left text-xs">Delhi</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="border-t border-slate-400"></p>
                                        <div className='grid grid-cols-6 h-16'>
                                            <div className="col-span-1 py-3">
                                            </div>
                                            <div className='col-span-5 py-3'>
                                                <p className="text-lg text-left font-bold">Followers</p>
                                                <p className="text-left text-xs">196 followers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={`my-3 mx-auto ${classes.photos}`}>
                                    <div className="grid grid-cols-6">
                                        <div className="col-span-1 py-3">
                                        </div>
                                        <div className="col-span-4">
                                            <p className="text-xl py-3 text-left font-bold">Photos</p>
                                        </div>
                                        <div className="col-span-1 py-3">
                                            <MoreVertIcon />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-row justify-evenly items-center'>
                                        <img src={photo} alt="photo" className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.photo}`} />
                                        <img src={photo} alt="photo" className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.photo}`} />
                                        <img src={photo} alt="photo" className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.photo}`} />
                                    </div>
                                    <div className='flex flex-row justify-evenly items-center my-3'>
                                    <img src={photo} alt="photo" className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.photo}`} />
                                        <img src={photo} alt="photo" className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.photo}`} />
                                        <img src={photo} alt="photo" className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.photo}`} />
                                    </div>
                                    <div className='flex flex-row justify-evenly items-center my-3'>
                                    <img src={photo} alt="photo" className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.photo}`} />
                                        <img src={photo} alt="photo" className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.photo}`} />
                                        <img src={photo} alt="photo" className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.photo}`} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={`my-3 mx-auto ${classes.photos}`}>
                                    <div className="grid grid-cols-6">
                                        <div className="col-span-1 py-3">
                                        </div>
                                        <div className="col-span-4">
                                            <p className="text-xl py-3 text-left font-bold">Friends</p>
                                        </div>
                                        <div className="col-span-1 py-3">
                                            <MoreVertIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className={`my-3 mx-auto ${classes.friends}`}>
                                    <div>
                                        <div className="grid grid-cols-6 mx-auto w-75 pt-2">
                                            <div className="h-16 col-span-2 mx-auto">
                                                <img src={friend1} alt="friend1" />
                                            </div>
                                            <div className="h-16 col-span-3 text-left">
                                                <p className="text-lg font-bold">Alishba</p>
                                                <p className="text-sm ">4 mins ago</p>
                                            </div>
                                            <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                                                <img src={star} alt="start" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="border-t border-slate-400 my-2"></p>
                                        <div className="grid grid-cols-6 mx-auto w-75">
                                            <div className="h-14 col-span-2 mx-auto">
                                                <img src={friend2} alt="friend2" />
                                            </div>
                                            <div className="h-16 col-span-3 text-left">
                                                <p className="text-lg font-bold">Anas</p>
                                                <p className="text-sm">1 day ago</p>
                                            </div>
                                            <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                                                <img src={star} alt="start" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="border-t border-slate-400 my-2"></p>
                                        <div className="grid grid-cols-6 mx-auto w-75">
                                            <div className="h-14 col-span-2 mx-auto">
                                                <img src={friend2} alt="friend2" />
                                            </div>
                                            <div className="h-16 col-span-3 text-left">
                                                <p className="text-lg font-bold">Mohammad</p>
                                                <p className="text-sm">a month ago</p>
                                            </div>
                                            <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                                                <img src={star} alt="start" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="border-t border-slate-400 my-2"></p>
                                        <div className="grid grid-cols-6 mx-auto w-75">
                                            <div className="h-14 col-span-2 mx-auto">
                                                <img src={friend2} alt="ring" />
                                            </div>
                                            <div className="h-16 col-span-3 text-left mb-3">
                                                <p className="text-lg font-bold">Ahmad</p>
                                                <p className="text-sm">Online</p>
                                            </div>
                                            <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                                                <img src={star} alt="start" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-8 ">
                            <div className={`${classes.feedpost1}`}>
                                <div className="profilein flex flex-row mt-3 p-4 ">
                                    <img src={profileicon} alt="profilepic" />
                                    <div className="w-4/5 flex flex-col text-left pl-3">
                                        <p>Alishba Sayeed</p>
                                        <p className="text-slate-300 text-sm"><i>july 13, 2021 at 03:32pm</i></p>
                                    </div>
                                    <div>
                                        <MoreVertIcon />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <img src={uploadedpic1} alt="uploadedpic1" className="w-11/12 h-auto" />
                                </div>
                                <div className={`w-24 md:w-36  flex justify-evenly ${classes.lcs}`}>
                                    <div className="h-6 w-6 md:h-10 md:w-10 bg-blue-400 rounded-full items-center flex justify-center">
                                        <ChatBubbleIcon className={classes.lcsicons} />
                                    </div>
                                    <div className="h-6 w-6 md:h-10 md:w-10 bg-blue-400 rounded-full items-center flex justify-center">
                                        <img src={fillshare} alt="fillshare" className={classes.lcsicons1} />
                                    </div>
                                    <div className="h-6 w-6 md:h-10 md:w-10 bg-slate-400 rounded-full items-center flex justify-center">
                                        <FavoriteIcon className={classes.lcsicons} />
                                    </div>
                                </div>
                                <div className="flex flex-row p-2 md:p-3 pt-0">
                                    <div className={`md:w-32 flex flex-row ${classes.moreimg}`}>
                                        <img src={more1} alt="more1" className={classes.more1} />
                                        <img src={more2} alt="more2" className={classes.more2} />
                                        <img src={more3} alt="more3" className={classes.more3} />
                                        <img src={more4} alt="more4" className={classes.more4} />
                                    </div>
                                    <div className="w-1/3 flex flex-col text-left md:pl-3 ">
                                        <p className="text-sm md:text-base">Abu Hurairah</p>
                                        <p className={`text-slate-300 ${classes.liked}`}><i className={classes.liked}>and a 100 more liked this</i></p>
                                    </div>
                                    <div className="w-5/12 flex flex-row text-left md:pl-3 items-center justify-evenly">
                                        <p className="xl:pr-6 text-xs md:text-base"><span><FavoriteBorderIcon className={classes.lcsicons} /></span><i> 2K</i></p>
                                        <div className="flex flex-row xl:pr-6 items-center"><span><img src={fillshare} alt="fillshare" className={classes.lcsicons1} /></span><p className="md:pl-2 text-xs md:text-base"><i> 24K</i></p></div>
                                        <p className="text-xs md:text-base"><span><ChatBubbleIcon className={classes.lcsicons} /></span><i> 200</i></p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${classes.feedpost1}`}>
                                <div className="profilein flex flex-row mt-3 p-4 ">
                                    <img src={profileicon} alt="profilepic" />
                                    <div className="w-4/5 flex flex-col text-left pl-3">
                                        <p>Alishba Sayeed</p>
                                        <p className="text-slate-300 text-sm"><i>july 13, 2021 at 03:32pm</i></p>
                                    </div>
                                    <div>
                                        <MoreVertIcon />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <img src={uploadedpic1} alt="uploadedpic1" className="w-11/12 h-auto" />
                                </div>
                                <div className={`w-24 md:w-36  flex justify-evenly ${classes.lcs}`}>
                                    <div className="h-6 w-6 md:h-10 md:w-10 bg-blue-400 rounded-full items-center flex justify-center">
                                        <ChatBubbleIcon className={classes.lcsicons} />
                                    </div>
                                    <div className="h-6 w-6 md:h-10 md:w-10 bg-blue-400 rounded-full items-center flex justify-center">
                                        <img src={fillshare} alt="fillshare" className={classes.lcsicons1} />
                                    </div>
                                    <div className="h-6 w-6 md:h-10 md:w-10 bg-slate-400 rounded-full items-center flex justify-center">
                                        <FavoriteIcon className={classes.lcsicons} />
                                    </div>
                                </div>
                                <div className="flex flex-row p-2 md:p-3 pt-0">
                                    <div className={`md:w-32 flex flex-row ${classes.moreimg}`}>
                                        <img src={more1} alt="more1" className={classes.more1} />
                                        <img src={more2} alt="more2" className={classes.more2} />
                                        <img src={more3} alt="more3" className={classes.more3} />
                                        <img src={more4} alt="more4" className={classes.more4} />
                                    </div>
                                    <div className="w-1/3 flex flex-col text-left md:pl-3 ">
                                        <p className="text-sm md:text-base">Abu Hurairah</p>
                                        <p className={`text-slate-300 ${classes.liked}`}><i className={classes.liked}>and a 100 more liked this</i></p>
                                    </div>
                                    <div className="w-5/12 flex flex-row text-left md:pl-3 items-center justify-evenly">
                                        <p className="xl:pr-6 text-xs md:text-base"><span><FavoriteBorderIcon className={classes.lcsicons} /></span><i> 2K</i></p>
                                        <div className="flex flex-row xl:pr-6 items-center"><span><img src={fillshare} alt="fillshare" className={classes.lcsicons1} /></span><p className="md:pl-2 text-xs md:text-base"><i> 24K</i></p></div>
                                        <p className="text-xs md:text-base"><span><ChatBubbleIcon className={classes.lcsicons} /></span><i> 200</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserProfilePage