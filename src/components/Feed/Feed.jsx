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
import GoogleFontLoader from 'react-google-font-loader';
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
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "auto",
        },
        [theme.breakpoints.between(768, 1024)]: {
            backgroundPosition: "4% 40%",
            backgroundAttachment: "initial",
        },
    },
    img5: {
        marginTop: "13px",
    },
    badge: {
        marginTop: "23px",
    },
    recommended: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        paddingBottom: "20px",
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "4% auto",
        },
    },
    post: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        paddingBottom: "15px",
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "4% auto",
        },
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
            right: '27%',
            [theme.breakpoints.between(320, 426)]: {
                right: '33%',
                width: "6px",
                height: "6px",
            },
            [theme.breakpoints.between(426, 1024)]: {
                right: '40%',
            },
            [theme.breakpoints.between(1024, 1441)]: {
                right: '31%',
            },
            [theme.breakpoints.between(1441, 2561)]: {
                right: '32%',
            },
        },
    },
    tjob: {
        fontSize: "13px",
        [theme.breakpoints.between(1024, 1280)]: {
            fontSize: "11px",
        },
    },
    ttxt: {
        fontSize: "12px",
        [theme.breakpoints.between(1024, 1280)]: {
            fontSize: "8px",
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
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "4% auto",
        },
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
        height: "28%",
        [theme.breakpoints.between(320, 376)]: {
            width: "95%",
            margin: "4% auto",
            height: "33%",
        },
        [theme.breakpoints.between(375, 426)]: {
            width: "95%",
            margin: "4% auto",
            height: "34%",
        },
        [theme.breakpoints.between(426, 600)]: {
            width: "95%",
            margin: "4% auto",
            height: "35%",
        },
        [theme.breakpoints.between(600, 768)]: {
            width: "95%",
            margin: "4% auto",
            height: "37%",
        },
        [theme.breakpoints.between(768, 1024)]: {
            width: "95%",
            margin: "4% auto",
            height: "37%",
        },
        [theme.breakpoints.between(1024, 1280)]: {
            width: "95%",
            margin: "4% auto",
            height: "24%",
        },
        [theme.breakpoints.between(1536, 2561)]: {
            width: "100%",
            margin: "4% auto",
            height: "32%",
        },
    },
    feedpost2: {
        background: "#202836",
        borderRadius: "20px",
        color: "white",
        height: "28%",
        [theme.breakpoints.between(320, 376)]: {
            width: "95%",
            margin: "4% auto",
            height: "34%",
        },
        [theme.breakpoints.between(375, 426)]: {
            width: "95%",
            margin: "4% auto",
            height: "34%",
        },
        [theme.breakpoints.between(426, 600)]: {
            width: "95%",
            margin: "4% auto",
            height: "35%",
        },
        [theme.breakpoints.between(600, 768)]: {
            width: "95%",
            margin: "4% auto",
            height: "37%",
        },
        [theme.breakpoints.between(768, 1024)]: {
            width: "95%",
            margin: "4% auto",
            height: "37%",
        },
        [theme.breakpoints.between(1024, 1280)]: {
            width: "95%",
            margin: "4% auto",
            height: "24%",
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
    visitedmasjid: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "4% auto",
        },
    },
    loctxt: {
        [theme.breakpoints.between(1024, 1280)]: {
            fontSize: "11px",
        },
    },
    verify: {
        position: "relative",
        left: "80%",
        bottom: "87%",
        [theme.breakpoints.between(375, 426)]: {
            left: "71%",
        },
        [theme.breakpoints.between(426, 531)]: {
            left: "56%",
        },
        [theme.breakpoints.between(531, 600)]: {
            left: "50%",
        },
        [theme.breakpoints.between(600, 768)]: {
            left: "46%",
        },
        [theme.breakpoints.between(768, 1024)]: {
            left: "39%",
        },
        [theme.breakpoints.between(1024, 1280)]: {
            left: "92%",
        },
        [theme.breakpoints.between(1280, 1440)]: {
            left: "88%",
        },
    },
    verify1: {
        position: "relative",
        left: "60%",
        bottom: "79%",
        [theme.breakpoints.between(375, 426)]: {
            left: "53%",
        },
        [theme.breakpoints.between(426, 531)]: {
            left: "43%",
        },
        [theme.breakpoints.between(531, 600)]: {
            left: "38%",
        },
        [theme.breakpoints.between(600, 768)]: {
            left: "35%",
        },
        [theme.breakpoints.between(768, 1024)]: {
            left: "28%",
        },
        [theme.breakpoints.between(1024, 1280)]: {
            left: "69%",
        },
        [theme.breakpoints.between(1280, 1440)]: {
            left: "66%",
        },
    },
    local: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        paddingBottom: "15px",
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "4% auto",
        },
    },
    localtxt: {
        fontSize: "11px",
        [theme.breakpoints.between(1024, 1280)]: {
            fontSize: "9px",
        },
    },
    localbotxt: {
        fontSize: "10px",
        [theme.breakpoints.between(1024, 1280)]: {
            fontSize: "8px",
        },
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
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "4% auto",
        },
    },
    purchases: {
        background: "#202836",
        borderRadius: "35px",
        color: "white",
        paddingBottom: "15px",
        [theme.breakpoints.between(320, 1024)]: {
            width: "95%",
            margin: "4% auto",
        },
    },
    advert: {
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



const Feed = () => {

    const classes = useStyles();
    const [jobColor, setJobColor] = useState("#FFFFFF");
    const [reqColor, setReqColor] = useState("#545A70");
    const [advColor, setAdvColor] = useState("#545A70");
    const [content, setContent] = useState('job')

    const HandleJob = () => {
        setAdvColor("#545A70");
        setReqColor("#545A70");
        setJobColor("#FFFFFF");
        setContent('job')
    };
    const HandleReq = () => {
        setAdvColor("#545A70");
        setReqColor("#FFFFFF");
        setJobColor("#545A70");
        setContent('req')
    };
    const HandleAdv = () => {
        setAdvColor("#FFFFFF");
        setReqColor("#545A70");
        setJobColor("#545A70");
        setContent('adv')
    };
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
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3" style={{ fontFamily: 'Raleway' }}>
                        <div class="lg:col-span-3">
                            <div className={` ${classes.timetable}`}>
                                <p className="lg:text-xl py-3">Namaz time table</p>
                                <p className="border-t border-white"></p>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-14 col-span-2 mx-auto flex items-center">
                                        <img src={img1} alt="img1" className="w-12 lg:w-16 h-auto" />
                                    </div>
                                    <div className="h-14 col-span-3 text-left">
                                        <p className="text-xs pt-3">Fajr</p>
                                        <p className="text-lg text-bolder">05 : 21 am</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-14 col-span-2 mx-auto flex items-center">
                                        <img src={img2} alt="img2" className="w-12 lg:w-16 h-auto" />
                                    </div>
                                    <div className="h-14 col-span-3 text-left">
                                        <p className="text-xs pt-3">Zohar</p>
                                        <p className="text-lg text-bolder">12 : 32 pm</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-14 col-span-2 mx-auto flex items-center">
                                        <img src={img3} alt="img3" className="w-12 lg:w-16 h-auto" />
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
                                    <div className="h-14 col-span-2 mx-auto flex items-center">
                                        <img src={img4} alt="img4" className="w-12 lg:w-16 h-auto" />
                                    </div>
                                    <div className="h-14 col-span-3 text-left">
                                        <p className="text-xs pt-3">Manghrib</p>
                                        <p className="text-lg text-bolder">06 : 25 pm</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 mx-auto w-75">
                                    <div className="h-16 col-span-2 mx-auto">
                                        <img src={img5} alt="img5" className={`w-8  h-auto ${classes.img5}`} />
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
                                {/* <p className="lg:text-xl py-3">Recommended Jobs <span className="ml-4"><MoreVertIcon /></span></p> */}
                                <div className=" w-5/6 lg:w-11/12 py-3 flex justify-between lg:justify-evenly  mx-auto">
                                    <p className="lg:text-xl">Recommended Jobs</p>
                                    <div><MoreVertIcon /></div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={profileicon} alt="img1" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left">
                                            <p style={{ fontSize: "15px", fontWeight: "600" }}>Zain Architecture</p>
                                            <p style={{ fontSize: "11px" }} >Posted job in Plumbers</p>
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
                                            <p style={{ fontSize: "15px", fontWeight: "600" }}>Pumps & Pipes</p>
                                            <p style={{ fontSize: "11px" }}>Posted job in Plumbers</p>
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
                                            <p style={{ fontSize: "14px", fontWeight: "600" }}>Kissan Plumbings</p>
                                            <p style={{ fontSize: "11px" }}>Posted job in Plumbers</p>
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
                                            <p style={{ fontSize: "15px", fontWeight: "600" }}>Areeb Fisheries</p>
                                            <p style={{ fontSize: "11px" }}>Posted job in Plumbers</p>
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
                                            <p style={{ fontSize: "15px", fontWeight: "600" }}>Ahsan Motors</p>
                                            <p style={{ fontSize: "11px" }}>Posted job in Plumbers</p>
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
                                        <div className={`border-r-2 border-slate-400 h-14 flex justify-center flex-col items-center ${classes.vborder}`} onClick={HandleJob}>
                                            <img src={Job} alt="jobicon" />
                                            <p className="text-xs" style={{ color: jobColor }}>JOB</p>
                                        </div>
                                        <div className={`border-r-2 border-slate-400 h-14 flex justify-center flex-col items-center ${classes.vborder}`} onClick={HandleReq}>
                                            <img src={Requirement} alt="Requirementicon" />
                                            <p className="text-xs" style={{ fontSize: "11px", color: reqColor }}>REQUIREMENT</p>
                                        </div>
                                        <div className="h-14  mx-auto flex flex-col items-center" onClick={HandleAdv}>
                                            <img src={Adv} alt="Advicon" />
                                            <p className="text-xs" style={{ color: advColor }}>ADVERT</p>
                                        </div>
                                        <div>
                                            <h1>
                                                {content}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-3 mx-auto w-75">
                                        <div className="h-14 mx-auto">
                                            <div className={` ${classes.sbox}`}>
                                                <img src={Piping} alt="Pipingicon" className="pt-3 pl-3" />
                                            </div>
                                        </div>
                                        <div className="h-14 text-left">
                                            <p className={`text-bolder ${classes.tjob}`}>You posted a job</p>
                                            <p className={classes.ttxt}><i>10 days ago</i></p>
                                            <p className={`text-red-300 ${classes.ttxt}`}>in PLUMBERS</p>
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
                                            <p className={`text-bolder ${classes.tjob}`}>You posted a job</p>
                                            <p className={classes.ttxt}><i>10 days ago</i></p>
                                            <p className={`text-red-300 ${classes.ttxt}`}>in FISHERIES</p>
                                        </div>
                                        <div className="h-14 mx-auto">
                                            <img src={filesearch} alt="Pipingicon" className="pt-3 pl-3" />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div class="lg:col-span-6">
                            <div className={`line text-xs md:text-base w-full md:w-3/4  flex flex-row justify-evenly text-slate-400 lg:mt-5 m-auto ${classes.menutxt}`}>
                                <p style={{ color: "#46D490" }} className={`border-b-4 w-20 md:w-24 border-green-500 ${classes.menutxt}`}>FEEDS</p>
                                <p className={classes.notif}>MASJID</p>
                                <p>FRIENDS</p>
                                <p>GROUP</p>
                            </div>
                            <div className={`${classes.writes}`}>
                                <div className="flex flex-row justify-evenly w-1full pt-2">
                                    <div className="flex flex-row p-auto items-center font-bold"> <span><img src={publish} alt="publish" /></span> <p className="pl-2">Publish</p></div>
                                    <div className="flex flex-row border-x-2 border-slate-400 px-2.5 md:px-16 text-slate-400 ">
                                        <ImageIcon />
                                        <p className="pl-2">Pictures</p>
                                    </div>
                                    <p className="flex flex-row p-auto text-slate-400"> <span className="pr-2"><VideocamOutlinedIcon /></span>Videos</p>
                                </div>
                                <p className="border-t border-slate-400 my-2"></p>
                                <div className="flex flex-row pl-3">
                                    <div class="flex justify-center">
                                        <img src={profileicon} alt="profile" className={`h-10 w-10 xl:mx-6  ${classes.profileicon}`} />
                                    </div>
                                    <div class="pl-3">
                                        <textarea className={classes.texta} rows="5" cols="26" placeholder="Write something..."></textarea>
                                    </div>
                                </div>
                                <div className="lg:w-3/5 w-11/12 flex flex-row">
                                    <div className="h-10 w-28 bg-slate-400 text-slate-800 rounded-3xl ml-3 flex flex-row items-center justify-evenly">
                                        <span>
                                            <PhotoCameraOutlinedIcon />
                                        </span>
                                        <p className="text-sm md:text-base">Media</p>
                                    </div>
                                    <div className="h-10 w-44 bg-slate-400 text-slate-800 rounded-3xl ml-3 flex flex-row items-center justify-evenly">
                                        <span>
                                            <img src={share} alt="share" />
                                        </span>
                                        <p className="text-sm md:text-base">Sharing option</p>
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
                            <div className={`${classes.feedpost2}`}>
                                <div className="profilein flex flex-row mt-3 p-4 ">
                                    <img src={profileicon} alt="profilepic" />
                                    <div className="w-4/5 flex flex-col text-left pl-3">
                                        <p className="flex items-center text-sm md:text-base">Alishba Sayeed <span className="pr-4 md:px-4"><img src={arrowright} alt="arrowright" /></span><i>posted in <span className="text-green-500">Masjid Quba</span></i></p>
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
                        <div class="lg:col-span-3">
                            <div className={`mt-3 mx-auto ${classes.visitedmasjid}`}>
                                <p className="text-xl py-3">My Primary Masjid</p>
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
                                                <p className="text-left text-sm lg:text-xs xl:text-sm">Name</p>
                                                <p className="text-left text-sm lg:text-xs xl:text-sm">Location</p>
                                                <p className="text-left text-sm lg:text-xs xl:text-sm">Imam</p>
                                                <p className="text-left text-sm lg:text-xs xl:text-sm">Mutawalli</p>
                                            </div>
                                        </div>
                                        <div class="col-span-3">
                                            <div className="flex flex-col mt-3">
                                                <p className="text-left text-sm lg:text-xs xl:text-sm">Masjid Hira</p>
                                                <p className={`text-left text-sm xl:text-sm ${classes.loctxt}`}>Aishbagh Lucknow</p>
                                                <p className="text-left text-sm lg:text-xs xl:text-sm flex flex-row items-center">: Hasan <span className="pl-2"><img src={call} alt="call" /></span>  <span className="pl-2"><img src={message} alt="message" /></span></p>
                                                <p className="text-left text-sm lg:text-xs xl:text-sm flex flex-row items-center">: Abdulah <span className="pl-2"><img src={call} alt="call" /></span>  <span className="pl-2"><img src={message} alt="message" /></span></p>
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
                                    <div className="col-span-5 ">
                                        <p className="text-xl py-3 text-center">Local Jobs</p>
                                    </div>
                                    <div className="col-span-1 py-3">
                                        <MoreVertIcon />
                                    </div>
                                </div>
                                <div>
                                    <p className="border-t border-slate-400 my-2"></p>
                                    <div className="grid grid-cols-6 mx-auto w-75">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={more4} alt="more4" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left mb-3 lg:mb-0 xl:mb-3">
                                            <p className="text-lg text-bolder">Anwar Ibrahim</p>
                                            <p className={classes.localtxt}> <i>Needs a plumber on 26th Jan</i></p>
                                            <p className={classes.localbotxt} ><span  ><AccessTimeIcon style={{ fontSize: "14px" }} /></span> 3 days work <span><FmdGoodIcon style={{ fontSize: "14px" }} /></span>15km away</p>
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
                                        <div className="h-14 col-span-3 text-left mb-3 lg:mb-0 xl:mb-3">
                                            <p className="text-lg text-bolder">Anwar Ibrahim</p>
                                            <p className={classes.localtxt}><i>Needs a plumber on 26th Jan</i></p>
                                            <p className={classes.localbotxt}><span ><AccessTimeIcon style={{ fontSize: "14px" }} /></span> 3 days work <span><FmdGoodIcon style={{ fontSize: "14px" }} /></span>15km away</p>
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
                                            <p className={classes.localtxt}><i>Needs a plumber on 26th Jan</i></p>
                                            <p className={classes.localbotxt}><span ><AccessTimeIcon style={{ fontSize: "14px" }} /></span> 3 days work <span><FmdGoodIcon style={{ fontSize: "14px" }} /></span>15km away</p>
                                        </div>
                                        <div className="h-14 col-span-1 mx-auto">
                                            <VisibilityIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-3 mx-auto ${classes.help}`}>
                                <div className="grid grid-cols-6">
                                    <div className="col-span-5 ">
                                        <p className="text-xl py-3 text-center">Help a Needy!</p>
                                    </div>
                                    <div className="col-span-1 py-3">
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
                                            <div className="grid grid-cols-3 gap-2">
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
                                            <div className="grid grid-cols-3 gap-2">
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
                                    <div className="grid grid-cols-6 mx-auto w-75 ">
                                        <div className="h-14 col-span-2 mx-auto">
                                            <img src={gulamicon} alt="gulamicon" />
                                        </div>
                                        <div className="h-14 col-span-3 text-left mb-3 flex flex-col">
                                            <p className="text-lg text-bolder">Ghulam Ali</p>
                                            <div className="grid grid-cols-3 gap-2">
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
                                        <img src={cart} alt="cart" className="lg:w-8" />
                                    </div>
                                    <div className="col-span-4 ">
                                        <p className="text-lg lg:text-base xl:text-xl py-3 text-center">Your Purchases</p>
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
                                            <p className="text-sm lg:text-xs">Alladeen Meat Shop</p>
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
                                        <p className="text-xl py-3 text-center">Advert</p>
                                    </div>
                                    <div className="col-span-2 py-3">
                                        <MoreVertIcon />
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