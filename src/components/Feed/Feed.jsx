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
import timetablebg from './res/timetablebg.svg';
import publish from './res/publish.svg';
import profileicon from './res/profile.svg';
import postcheck from './res/postcheck.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ImageIcon from '@mui/icons-material/Image';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { Link } from "react-router-dom";
// import { api } from "../../../helper/instance";

const useStyles = makeStyles((theme) => ({
    maincont: {
        height: "235vh",
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
        height: "33%",
        background: "#202836",
        borderRadius: "35px",
        color: "white",
    },
    post: {
        height: "21.5%",
        background: "#202836",
        borderRadius: "35px",
        color: "white",
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
        height: "18%",
        background: "#202836",
        borderRadius: "20px",
        color: "white",
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
    
}));



const Feed = () => {

    const classes = useStyles();

    return (
        <div>
            <FeedNav />
            <div className={`w-100 ${classes.maincont}`}>
                <div className="container mx-auto pt-3">
                    <div className="grid grid-cols-12 gap-3">
                        <div class="col-span-3 ">
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
                                        <textarea className={classes.texta} rows="5" cols="65" placeholder="Write something..."></textarea>
                                    </div>
                                </div>
                                <div className="w-1/2 h-20 flex flex-row">
                                    <div className="h-10 w-24 bg-slate-400 ml-3">
                                        <span></span>
                                        <p></p>
                                    </div>
                                    <div className="h-10 w-32 bg-slate-400 ml-3">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3 bg-pink-100">10</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed