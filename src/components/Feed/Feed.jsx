import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FeedNav from "./FeedNav";
import img1 from './res/1.svg';
import img2 from './res/2.svg';
import img3 from './res/3.svg';
import img4 from './res/4.svg';
import img5 from './res/5.svg';
import Security from './res/Security.svg';
import Job from './res/Job.svg';
import Requirement from './res/Requirement.svg';
import Adv from './res/Adv.svg';
import Piping from './res/Piping.svg';
import Fish from './res/Fish.svg';
import filesearch from './res/filesearch.svg';
import Edit from './res/Edit.svg';
import share from './res/share.svg';
import masjidicon1 from './res/masjidicon1.svg';
import fillshare from './res/fillshare.svg';
import timetablebg from './res/timetablebg.svg';
import publish from './res/publish.svg';
import profileicon from './res/profile.svg';
import postcheck from './res/postcheck.svg';
import more1 from './res/more1.svg';
import more2 from './res/more2.svg';
import more3 from './res/more3.svg';
import more4 from './res/more4.svg';
import veracc from './res/veracc.svg';
import call from './res/call.svg';
import gulamicon from './res/gulamicon.svg';
import message from './res/message.svg';
import arrowright from './res/arrowright.svg';
import uploadedpic1 from './res/uploadedpic1.svg';
import donate from './res/donate.svg';
import validation from './res/validation.svg';
import spread from './res/spread.svg';
import cart from './res/cart.svg';
import tshirt from './res/tshirt.svg';
import ring from './res/ring.svg';
import meat from './res/meat.svg';
import star from './res/star.svg';
import advert from './res/advert.svg';
import advertimg from './res/advertimg.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ImageIcon from '@mui/icons-material/Image';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
// import { api } from "../../../helper/instance";

const useStyles = makeStyles((theme) => ({
    maincont: {
        background: "#545A70",
    },
    timetable: {
        backgroundImage: `url("${timetablebg}") ,linear-gradient(164.08deg, #5596E6 3.65%, #0072FF 84.55%) `,
        borderRadius: "35px",
        height: "600px",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        color: "white",
    },
    img5: {
        marginTop: "13px",
        marginRight: "10px",
    },
    badge: {
        marginTop: "23px",
    },
    recommended: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        paddingBottom: "20px",
    },
    post: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        paddingBottom: "15px",
    },
    postcheck: {
        marginTop: "13px",
        marginLeft: "30px",
    },
    vborder: {
        left: "2%",
        position: "relative",
        height: "48px",
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
            right: '0%',
            [theme.breakpoints.between(550, 1080)]: {
                right: '24%',
            },
            [theme.breakpoints.between(1280, 2562)]: {
                right: '31%',
            },
        },
    },
    sbox: {
        height: "57px",
        width: "57px",
        borderRadius: "8px",
        background: "#545A70",
    },
    writes: {
        background: "#202836",
        borderRadius: "20px",
        color: "white",
        paddingBottom: "15px",
    },
    notif: {
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
            left: '95%',
            [theme.breakpoints.between(550, 1024)]: {
                left: '100%',
            },
            [theme.breakpoints.between(1024, 2562)]: {
                left: '100%',
            },
        },
    },
    texta: {
        background: "#202836",
        paddding: "10px",
        '&:focus': {
            border: "none",
            outline: "none",
        },
    },
    feedpost1: {
        background: "#202836",
        borderRadius: "20px",
        color: "white",
        paddingBottom: "15px"
    },
    lcs: {
        position: "relative",
        left: "65%",
        bottom: "4%",
    },
    more2: {
        position: "relative",
        right: "15%",
    },
    more3: {
        position: "relative",
        right: "30%",
    },
    more4: {
        position: "relative",
        right: "46%",
    },
    visitedmasjid: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
    },
    verify: {
        position: "relative",
        left: "81%",
        bottom: "87%",
    },
    verify1: {
        position: "relative",
        left: "62%",
        bottom: "79%",
    },
    local: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        paddingBottom: "15px",
    },
    verify2: {
        position: "relative",
        left: "65%",
        bottom: "45%",
    },
    help: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        paddingBottom: "12px",
    },
    purchases: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        paddingBottom: "15px",
    },
    advert: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        marginBottom: "15px",
    },
}));



const Feed = () => {

    const classes = useStyles();

    return (
        <div>
            <FeedNav />
            <div className={`w-100 ${classes.maincont}`}>
                <div className="container mx-auto pt-3">
                    <div className="grid grid-cols-12 gap-3">
                        <div class="col-span-3">
                            <div className={` ${classes.timetable}`}>
                                <p className="lg:text-xl py-3">Namaz time table</p>
                                <p className="border-t border-white"></p>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-14 col-span-2 mx-auto">
                                        <img src={img1} alt="img1" />
                                    </div>
                                    <div className="h-14 col-span-3 text-left">
                                        <p className="text-xs pt-3">Fajr</p>
                                        <p className="text-lg text-bolder">05 : 21 am</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-14 col-span-2 mx-auto">
                                        <img src={img2} alt="img2" />
                                    </div>
                                    <div className="h-14 col-span-3 text-left">
                                        <p className="text-xs pt-3">Zohar</p>
                                        <p className="text-lg text-bolder">12 : 32 pm</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-14 col-span-2 mx-auto">
                                        <img src={img3} alt="img3" />
                                    </div>
                                    <div className="h-14 col-span-2 text-left">
                                        <p className="text-xs pt-3">Asr</p>
                                        <p className="text-lg text-bolder">04 : 45 pm</p>
                                    </div>
                                    <div className="h-14">
                                        <img className={classes.badge} src={Security} alt="Security" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-14 col-span-2 mx-auto">
                                        <img src={img4} alt="img4" />
                                    </div>
                                    <div className="h-14 col-span-3 text-left">
                                        <p className="text-xs pt-3">Manghrib</p>
                                        <p className="text-lg text-bolder">06 : 25 pm</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-16 col-span-2 mx-auto">
                                        <img src={img5} alt="img5" className={classes.img5} />
                                    </div>
                                    <div className="h-16 col-span-3 text-left">
                                        <p className="text-xs pt-3">Isha</p>
                                        <p className="text-lg text-bolder">07 : 39 pm</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-16 col-span-2 mx-auto">

                                    </div>
                                    <div className="h-16 col-span-2 text-left">
                                        <p className="text-xs pt-2">Juma</p>
                                        <p className="text-lg text-bolder">01 : 00 pm</p>
                                    </div>
                                    <div className="h-14">
                                        <img className={classes.badge} src={Edit} alt="Edit" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-16 col-span-2 mx-auto">

                                    </div>
                                    <div className="h-16 col-span-3 text-left">
                                        <p className="text-xs pt-2">Khatm Sehar</p>
                                        <p className="text-lg text-bolder">05 : 00 pm</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-16 col-span-2 mx-auto">

                                    </div>
                                    <div className="h-16 col-span-3 text-left">
                                        <p className="text-xs pt-2">Tulu Aftab</p>
                                        <p className="text-lg text-bolder">06 : 00 pm</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-16 col-span-2 mx-auto">

                                    </div>
                                    <div className="h-16 col-span-3 text-left">
                                        <p className="text-xs pt-2">Ghurub Aftab</p>
                                        <p className="text-lg text-bolder">06 : 10 pm</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-3 mx-auto ${classes.recommended}`}>
                                <p className="lg:text-xl py-3">Recommended Jobs <span className="ml-4"><MoreVertIcon /></span></p>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={profileicon} alt="img1" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left">
                                            <p className="text-lg text-bolder">Zain Architecture</p>
                                            <p className="text-xs">Posted job in Plumbers</p>
                                            <p className="text-xs"><i>3 days ago</i></p>
                                        </div>
                                        <div className="h-14 col-span-1 mx-auto">
                                            <BookmarkBorderIcon />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={profileicon} alt="img1" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left">
                                            <p className="text-lg text-bolder">Pumps & Pipes</p>
                                            <p className="text-xs">Posted job in Plumbers</p>
                                            <p className="text-xs"><i>10 days ago</i></p>
                                        </div>
                                        <div className="h-14 col-span-1 mx-auto">
                                            <BookmarkBorderIcon />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={profileicon} alt="img1" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left">
                                            <p className="text-lg text-bolder">Kissan Plumbings</p>
                                            <p className="text-xs">Posted job in Plumbers</p>
                                            <p className="text-xs"><i>3 hour ago</i></p>
                                        </div>
                                        <div className="h-14 col-span-1 mx-auto">
                                            <BookmarkBorderIcon />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={profileicon} alt="img1" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left">
                                            <p className="text-lg text-bolder">Areeb Fisheries</p>
                                            <p className="text-xs">Posted job in Plumbers</p>
                                            <p className="text-xs"><i>3 days ago</i></p>
                                        </div>
                                        <div className="h-14 col-span-1 mx-auto">
                                            <BookmarkBorderIcon />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={profileicon} alt="img1" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left">
                                            <p className="text-lg text-bolder">Ahsan Motors</p>
                                            <p className="text-xs">Posted job in Plumbers</p>
                                            <p className="text-xs"><i>3 days ago</i></p>
                                        </div>
                                        <div className="h-14 col-span-1 mx-auto">
                                            <BookmarkBorderIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-3 mx-auto ${classes.post}`}>
                                <div className="grid grid-cols-6 mx-auto w-100">
                                    <div className="mx-auto">
                                        <img src={postcheck} alt="postcheck" className={classes.postcheck} />
                                    </div>
                                    <div className="col-span-4 text-left">
                                        <p className="lg:text-xl text-center py-3">POST</p>
                                    </div>
                                    <div className="col-span-1 mx-auto">
                                        <MoreVertIcon className={classes.img5} />
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-3 mx-auto w-75">
                                        <div className={`border-r-2 border-slate-400 h-14 flex justify-center flex-col items-center ${classes.vborder}`}>
                                            <img src={Job} alt="jobicon" />
                                            <p className="text-xs">JOB</p>
                                        </div>
                                        <div className={`border-r-2 border-slate-400 h-14 flex justify-center flex-col items-center ${classes.vborder}`}>
                                            <img src={Requirement} alt="Requirementicon" />
                                            <p className="text-xs">REQUIREMENT</p>
                                        </div>
                                        <div className="h-14  mx-auto">
                                            <img src={Adv} alt="Advicon" />
                                            <p className="text-xs">ADVERT</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-3 mx-auto w-75">
                                        <div className="h-14 mx-auto">
                                            <div className={` ${classes.sbox}`}>
                                                <img src={Piping} alt="Pipingicon" className="pt-3 pl-3" />
                                            </div>
                                        </div>
                                        <div className="h-14 text-left">
                                            <p className=" text-bolder" style={{ fontSize: "13px" }}>You posted a job</p>
                                            <p className="text-xs"><i>10 days ago</i></p>
                                            <p className="text-xs text-red-300">in PLUMBERS</p>
                                        </div>
                                        <div className="h-14 mx-auto">
                                            <img src={filesearch} alt="Pipingicon" className="pt-3 pl-3" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-3 mx-auto w-75">
                                        <div className="h-14 mx-auto">
                                            <div className={` ${classes.sbox}`}>
                                                <img src={Fish} alt="Fishicon" className="pt-3 pl-3" />
                                            </div>
                                        </div>
                                        <div className="h-14 text-left">
                                            <p className=" text-bolder" style={{ fontSize: "13px" }}>You posted a job</p>
                                            <p className="text-xs"><i>10 days ago</i></p>
                                            <p className="text-xs text-red-300">in FISHERIES</p>
                                        </div>
                                        <div className="h-14 mx-auto">
                                            <img src={filesearch} alt="Pipingicon" className="pt-3 pl-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6">
                            <div className="line  w-3/4 flex flex-row justify-evenly text-slate-400 mt-5 m-auto">
                                <p style={{ color: "#46D490" }} className="border-b-4 w-24 border-green-500">FEEDS</p>
                                <p className={classes.notif}>MASJID</p>
                                <p>FRIENDS</p>
                                <p>GROUP</p>
                            </div>
                            <div className={`${classes.writes}`}>
                                <div className="flex flex-row justify-evenly w-1full pt-2">
                                    <div className="flex flex-row p-auto items-center font-bold"> <span><img src={publish} alt="publish" /></span> <p className="pl-2">Publish</p></div>
                                    <p className="border-x-2 pl-20 pr-40 w-24 border-slate-400 flex flex-row p-auto text-slate-400"><span className="pr-2"><ImageIcon /></span>Pictures</p>
                                    <p className="flex flex-row p-auto text-slate-400"> <span className="pr-2"><VideocamOutlinedIcon /></span>Videos</p>
                                </div>
                                <p className="border-t border-slate-400 my-2"></p>
                                <div className="flex flex-row">
                                    <div class="">
                                        <img src={profileicon} alt="profile" className={`h-10 w-10 xl:mx-6  ${classes.profileicon}`} />
                                    </div>
                                    <div class="">
                                        <textarea className={classes.texta} rows="5"  placeholder="Write something..."></textarea>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-row">
                                    <div className="h-10 w-28 bg-slate-400 text-slate-800 rounded-3xl ml-3 flex flex-row items-center justify-evenly">
                                        <span>
                                            <PhotoCameraOutlinedIcon />
                                        </span>
                                        <p>Media</p>
                                    </div>
                                    <div className="h-10 w-44 bg-slate-400 text-slate-800 rounded-3xl ml-3 flex flex-row items-center justify-evenly">
                                        <span>
                                            <img src={share} alt="share" />
                                        </span>
                                        <p>Sharing option</p>
                                        <span><KeyboardArrowDownIcon /></span>
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
                                    <img src={uploadedpic1} alt="uploadedpic1" />
                                </div>
                                <div className={`w-36 flex justify-evenly ${classes.lcs}`}>
                                    <div className="h-10 w-10 bg-blue-400 rounded-full items-center flex justify-center">
                                        <ChatBubbleIcon />
                                    </div>
                                    <div className="h-10 w-10 bg-blue-400 rounded-full items-center flex justify-center">
                                        <img src={fillshare} alt="fillshare" />
                                    </div>
                                    <div className="h-10 w-10 bg-slate-400 rounded-full items-center flex justify-center">
                                        <FavoriteIcon />
                                    </div>
                                </div>
                                <div className="flex flex-row p-3 pt-0">
                                    <div className="w-32 flex flex-row">
                                        <img src={more1} alt="more1" />
                                        <img src={more2} alt="more2" className={classes.more2} />
                                        <img src={more3} alt="more3" className={classes.more3} />
                                        <img src={more4} alt="more4" className={classes.more4} />
                                    </div>
                                    <div className="w-1/3 flex flex-col text-left pl-3 ">
                                        <p>Abu Hurairah</p>
                                        <p className="text-slate-300 text-sm"><i>and a 100 more liked this</i></p>
                                    </div>
                                    <div className="w-5/12 flex flex-row text-left pl-3 items-center justify-evenly">
                                        <p className="pr-6 "><span><FavoriteBorderIcon /></span><i> 2K</i></p>
                                        <div className="flex flex-row pr-6 items-center"><span><img src={fillshare} alt="fillshare" /></span><p className="pl-2"><i> 24K</i></p></div>
                                        <p className=""><span><ChatBubbleIcon /></span><i> 200</i></p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${classes.feedpost1}`}>
                                <div className="profilein flex flex-row mt-3 p-4 ">
                                    <img src={profileicon} alt="profilepic" />
                                    <div className="w-4/5 flex flex-col text-left pl-3">
                                        <p className="flex items-center">Alishba Sayeed <span className="px-4"><img src={arrowright} alt="arrowright" /></span><i>posted in <span className="text-green-500">Masjid Quba</span></i></p>
                                        <p className="text-slate-300 text-sm"><i>july 13, 2021 at 03:32pm</i></p>
                                    </div>
                                    <div>
                                        <MoreVertIcon />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <img src={uploadedpic1} alt="uploadedpic1" />
                                </div>
                                <div className={`w-36 flex justify-evenly ${classes.lcs}`}>
                                    <div className="h-10 w-10 bg-blue-400 rounded-full items-center flex justify-center">
                                        <ChatBubbleIcon />
                                    </div>
                                    <div className="h-10 w-10 bg-blue-400 rounded-full items-center flex justify-center">
                                        <img src={fillshare} alt="fillshare" />
                                    </div>
                                    <div className="h-10 w-10 bg-slate-400 rounded-full items-center flex justify-center">
                                        <FavoriteIcon />
                                    </div>
                                </div>
                                <div className="flex flex-row p-3 pt-0">
                                    <div className="w-32 flex flex-row">
                                        <img src={more1} alt="more1" />
                                        <img src={more2} alt="more2" className={classes.more2} />
                                        <img src={more3} alt="more3" className={classes.more3} />
                                        <img src={more4} alt="more4" className={classes.more4} />
                                    </div>
                                    <div className="w-1/3 flex flex-col text-left pl-3 ">
                                        <p>Abu Hurairah</p>
                                        <p className="text-slate-300 text-sm"><i>and a 100 more liked this</i></p>
                                    </div>
                                    <div className="w-5/12 flex flex-row text-left pl-3 items-center justify-evenly">
                                        <p className="pr-6 "><span><FavoriteBorderIcon /></span><i> 2K</i></p>
                                        <div className="flex flex-row pr-6 items-center"><span><img src={fillshare} alt="fillshare" /></span><p className="pl-2"><i> 24K</i></p></div>
                                        <p className=""><span><ChatBubbleIcon /></span><i> 200</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3">
                            <div className={`mt-3 mx-auto ${classes.visitedmasjid}`}>
                                <p className="lg:text-xl py-3">My Primary Masjid</p>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="h-28 grid grid-cols-7 gap-1 ">
                                        <div class="col-span-2">
                                            <div className="h-28 w-20 bg-slate-500 rounded-xl flex flex-col justify-center items-center ml-2 relative">
                                                <img src={masjidicon1} alt="masjid" className={` ${classes.masjidicon1}`} />
                                                <p className="text-sm">Masjid Hira</p>
                                            </div>
                                            <img src={veracc} alt="verify" className={` ${classes.verify}`} />
                                        </div>
                                        <div class="col-span-2 flex ml-4 mt-3">
                                            <div className="flex flex-col justify-start">
                                                <p className="text-left text-sm">Name</p>
                                                <p className="text-left text-sm">Location</p>
                                                <p className="text-left text-sm">Imam</p>
                                                <p className="text-left text-sm">Mutawalli</p>
                                            </div>
                                        </div>
                                        <div class="col-span-3">
                                            <div className="flex flex-col mt-3">
                                                <p className="text-left text-sm">Masjid Hira</p>
                                                <p className="text-left text-sm">Aishbagh Lucknow</p>
                                                <p className="text-left text-sm flex flex-row items-center">: Hasan <span className="pl-2"><img src={call} alt="call" /></span>  <span className="pl-2"><img src={message} alt="message" /></span></p>
                                                <p className="text-left text-sm flex flex-row items-center">: Abdulah <span className="pl-2"><img src={call} alt="call" /></span>  <span className="pl-2"><img src={message} alt="message" /></span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                </div>
                                <div>
                                    <p className="py-2 pl-3 text-left">Masjid You have Visited</p>
                                    <div className="masjjids grid grid-cols-6 ">
                                        <div class="col-span-2">
                                            <div className="h-28 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                                                <img src={masjidicon1} alt="masjid" className={` ${classes.masjidicon1}`} />
                                                <p className="" style={{ fontSize: "8px" }}><i>Last Visited</i></p>
                                                <p className="" style={{ fontSize: "8px" }}><i>on 12th jan</i></p>
                                            </div>
                                        </div>
                                        <div class="col-span-2">
                                            <div className="h-28 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                                                <img src={masjidicon1} alt="masjid" className={` ${classes.masjidicon1}`} />
                                                <p className="" style={{ fontSize: "8px" }}><i>Last Visited</i></p>
                                                <p className="" style={{ fontSize: "8px" }}><i>on 2nd may</i></p>
                                            </div>
                                            <img src={veracc} alt="verify" className={` ${classes.verify1}`} />
                                        </div>
                                        <div class="col-span-2">
                                            <div className="h-28 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                                                <img src={masjidicon1} alt="masjid" className={` ${classes.masjidicon1}`} />
                                                <p className="" style={{ fontSize: "8px" }}><i>Last Visited</i></p>
                                                <p className="" style={{ fontSize: "8px" }}><i>on 2nd may</i></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masjjids grid grid-cols-6 ">
                                        <div class="col-span-2">
                                            <div className="h-20 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                                                <img src={masjidicon1} alt="masjid" className={` ${classes.masjidicon1}`} />
                                                <p className="" style={{ fontSize: "8px" }}><i>Last Visited</i></p>
                                                <p className="" style={{ fontSize: "8px" }}><i>on 12th jan</i></p>
                                            </div>
                                            <img src={veracc} alt="verify" className={` ${classes.verify1}`} />
                                        </div>
                                        <div class="col-span-2">
                                            <div className="h-20 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                                                <img src={masjidicon1} alt="masjid" className={` ${classes.masjidicon1}`} />
                                                <p className="" style={{ fontSize: "8px" }}><i>Last Visited</i></p>
                                                <p className="" style={{ fontSize: "8px" }}><i>on 2nd may</i></p>
                                            </div>
                                            <img src={veracc} alt="verify" className={` ${classes.verify1}`} />
                                        </div>
                                        <div class="col-span-2">
                                            <div className="h-20 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                                                <img src={masjidicon1} alt="masjid" className={` ${classes.masjidicon1}`} />
                                                <p className="" style={{ fontSize: "8px" }}><i>Last Visited</i></p>
                                                <p className="" style={{ fontSize: "8px" }}><i>on 2nd may</i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-3 mx-auto ${classes.local}`}>
                                <div className="grid grid-cols-6">
                                    <div className="col-span-4 ">
                                        <p className="lg:text-xl py-3 text-right">Local Jobs</p>
                                    </div>
                                    <div className="col-span-2 py-3">
                                        <MoreVertIcon />
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={more4} alt="more4" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left mb-3">
                                            <p className="text-lg text-bolder">Anwar Ibrahim</p>
                                            <p className="" style={{ fontSize: "11px" }}><i>Needs a plumber on 26th Jan</i></p>
                                            <p className="" style={{ fontSize: "10px" }}><span  ><AccessTimeIcon style={{ fontSize: "14px" }} /></span> 3 days work <span><FmdGoodIcon style={{ fontSize: "14px" }} /></span>15km away</p>
                                        </div>
                                        <div className="h-14 col-span-1 mx-auto">
                                            <VisibilityOffIcon />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={more4} alt="more4" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left mb-3">
                                            <p className="text-lg text-bolder">Anwar Ibrahim</p>
                                            <p className="" style={{ fontSize: "11px" }}><i>Needs a plumber on 26th Jan</i></p>
                                            <p className="" style={{ fontSize: "10px" }}><span ><AccessTimeIcon style={{ fontSize: "14px" }} /></span> 3 days work <span><FmdGoodIcon style={{ fontSize: "14px" }} /></span>15km away</p>
                                        </div>
                                        <div className="h-14 col-span-1 mx-auto">
                                            <VisibilityIcon />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={more4} alt="more4" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left">
                                            <p className="text-lg text-bolder">Anwar Ibrahim</p>
                                            <p className="" style={{ fontSize: "11px" }}><i>Needs a plumber on 26th Jan</i></p>
                                            <p className="" style={{ fontSize: "10px" }}><span ><AccessTimeIcon style={{ fontSize: "14px" }} /></span> 3 days work <span><FmdGoodIcon style={{ fontSize: "14px" }} /></span>15km away</p>
                                        </div>
                                        <div className="h-14 col-span-1 mx-auto">
                                            <VisibilityIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-3 mx-auto ${classes.help}`}>
                                <div className="grid grid-cols-6">
                                    <div className="col-span-4 ">
                                        <p className="lg:text-xl py-3 text-right">Help a Needy!</p>
                                    </div>
                                    <div className="col-span-2 py-3">
                                        <MoreVertIcon />
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={gulamicon} alt="gulamicon" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left mb-3 flex flex-col">
                                            <p className="text-lg text-bolder">Ghulam Ali</p>
                                            <div className="grid grid-cols-3">
                                                <div className="flex flex-col items-center">
                                                    <img src={validation} alt="validation" />
                                                    <p style={{ fontSize: "12px" }}>Validate</p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <img src={donate} alt="donate" />
                                                    <p style={{ fontSize: "12px" }}>Donate</p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <img src={spread} alt="spread" />
                                                    <p style={{ fontSize: "12px" }}>Spread</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={gulamicon} alt="gulamicon" />
                                            <img src={veracc} alt="verify" className={` ${classes.verify2}`} />
                                        </div>
                                        <div className="h-14 col-span-3 text-left mb-3 flex flex-col">
                                            <p className="text-lg text-bolder">Ghulam Ali</p>
                                            <div className="grid grid-cols-3">
                                                <div className="flex flex-col items-center">
                                                    <img src={validation} alt="validation" />
                                                    <p style={{ fontSize: "12px" }}>Validate</p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <img src={donate} alt="donate" />
                                                    <p style={{ fontSize: "12px" }}>Donate</p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <img src={spread} alt="spread" />
                                                    <p style={{ fontSize: "12px" }}>Spread</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={gulamicon} alt="gulamicon" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left mb-3 flex flex-col">
                                            <p className="text-lg text-bolder">Ghulam Ali</p>
                                            <div className="grid grid-cols-3">
                                                <div className="flex flex-col items-center">
                                                    <img src={validation} alt="validation" />
                                                    <p style={{ fontSize: "12px" }}>Validate</p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <img src={donate} alt="donate" />
                                                    <p style={{ fontSize: "12px" }}>Donate</p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <img src={spread} alt="spread" />
                                                    <p style={{ fontSize: "12px" }}>Spread</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={`mt-3 mx-auto ${classes.purchases}`}>
                                <div className="grid grid-cols-8">
                                    <div className="col-span-2 py-3 flex justify-center">
                                        <img src={cart} alt="cart" />
                                    </div>
                                    <div className="col-span-4 ">
                                        <p className="lg:text-xl py-3 text-right">Your Purchases</p>
                                    </div>
                                    <div className="col-span-2 py-3">
                                        <MoreVertIcon />
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-16 col-span-2 mx-auto">
                                            <img src={meat} alt="meat" />
                                        </div>
                                        <div className="h-16 col-span-3 text-left mb-3">
                                            <p className="text-lg text-bolder">Meat</p>
                                            <p className="text-slate-200" style={{ fontSize: "10px" }}>from</p>
                                            <p className="text-sm">Alladeen Meat Shop</p>
                                            <p className="text-slate-200" style={{ fontSize: "12px" }}><i>2 days ago</i></p>
                                        </div>
                                        <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                                            <img src={star} alt="start" />
                                            <p className="text-slate-200" style={{ fontSize: "12px" }}>3/5</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={tshirt} alt="tshirt" />
                                        </div>
                                        <div className="h-16 col-span-3 text-left mb-3">
                                            <p className="text-lg text-bolder">T-Shirt</p>
                                            <p className="text-slate-200" style={{ fontSize: "10px" }}>from</p>
                                            <p className="text-sm">V-Mart</p>
                                            <p className="text-slate-200" style={{ fontSize: "12px" }}><i>2 days ago</i></p>
                                        </div>
                                        <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                                            <img src={star} alt="start" />
                                            <p className="text-slate-200" style={{ fontSize: "12px" }}>3/5</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={ring} alt="ring" />
                                        </div>
                                        <div className="h-16 col-span-3 text-left mb-3">
                                            <p className="text-lg text-bolder">Ring</p>
                                            <p className="text-slate-200" style={{ fontSize: "10px" }}>from</p>
                                            <p className="text-sm">JK Jewellers</p>
                                            <p className="text-slate-200" style={{ fontSize: "12px" }}><i>2 days ago</i></p>
                                        </div>
                                        <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                                            <img src={star} alt="start" />
                                            <p className="text-slate-200" style={{ fontSize: "12px" }}>3/5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-3 mx-auto ${classes.advert}`}>
                                <div className="grid grid-cols-8">
                                    <div className="col-span-2 py-3 flex justify-center">
                                        <img src={advert} alt="advert" />
                                    </div>
                                    <div className="col-span-4 ">
                                        <p className="lg:text-xl py-3 text-right">Your Purchases</p>
                                    </div>
                                    <div className="col-span-2 py-3">
                                        <MoreVertIcon />
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-8 mx-auto">
                                        <div className=" col-span-3 mx-auto items-center">
                                            <p className="text-2xl text-red-400" style={{fontFamily: 'Waiting for the Sunrise'}}>Flash Sale</p>
                                            <p className="text-2xl" style={{fontFamily: 'Playfair Display'}}>THE HEKIM</p>
                                            <p className="pt-6" style={{ fontSize: "12px" }}>Get 20</p>
                                            <p className="" style={{ fontSize: "12px" }}>Discount with</p>
                                            <p className="" style={{ fontSize: "12px" }}>Coupon Code.</p>
                                        </div>
                                        <div className=" col-span-5 flex justify-center">
                                            <img src={advertimg} alt="advertimg" />
                                        </div>

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

export default Feed