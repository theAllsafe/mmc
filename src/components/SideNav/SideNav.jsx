import React from 'react'
import FeedNav from '../Feed/FeedNav'
import Profileimg from '../Usersetting/res/Profileimg.svg'
import { styled } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import SecurityIcon from '@mui/icons-material/Security';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupportIcon from '@mui/icons-material/Support';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

const useStyles = makeStyles((theme) => ({
    sidenavback: {
        background: "#202836",
        height: "120vh",
        width: '45vh',
        marginLeft: '6%',
        marginTop: '2%'
    },

}));
export default function Sidenav() {
    const classes = useStyles();
    return (
        <div>

            <div>
                <FeedNav />
            </div>
            <div className={` flex flex-col gap-4 rounded-3xl float-left ${classes.sidenavback}`}>
                <div className='flex flex-col items-center mt-5 gap-3'>
                    <img src={Profileimg} className='' />
                    <h1 className='text-white font-bold text-xl '>Wamique Ahmad</h1>
                    <h4 className='text-white text-lg ' >New Delhi, India</h4>
                </div>
                <hr className='mt-6' />
                <NavLink exact to='/' activeClassName='active-navLink' className='demo'>
                    <div className='flex flex-row gap-12 p-3'><ManageAccountsIcon className='iconallside' /> <h1 className='text-white text-xl tracking-wider'>General</h1></div>
                </NavLink>
                <NavLink exact to='/security' activeClassName='active-navLink' className='demo'>
                    <div className='flex flex-row gap-12 p-2'><SecurityIcon className='iconallside' /> <h1 className='text-white text-xl tracking-wider'>Security</h1></div>
                </NavLink>
                <NavLink exact to='/Profile' activeClassName='active-navLink' className='demo'>
                    <div className='flex flex-row gap-12 p-2'><WarningAmberIcon className='iconallside' /> <h1 className='text-white text-xl tracking-wider'>Account</h1></div>
                </NavLink>
                <hr />
                <NavLink exact to='/Privacy' activeClassName='active-navLink' className='demo'>
                    <div className='flex flex-row gap-12 p-2'><LockIcon className='iconallside' /> <h1 className='text-white text-xl tracking-wider'>Privacy</h1></div>
                </NavLink>
                <NavLink exact to='/Preferences' activeClassName='active-navLink' className='demo'>
                    <div className='flex flex-row gap-12 p-2'><SettingsInputComponentIcon className='iconallside' /> <h1 className='text-white text-xl tracking-wider'>Preferences</h1></div>
                </NavLink>
                <hr />
                <NavLink exact to='/Notifications' activeClassName='active-navLink' className='demo'>
                    <div className='flex flex-row gap-12 p-2'><NotificationsIcon className='iconallside' /> <h1 className='text-white text-xl tracking-wider'>Notifications</h1></div>
                </NavLink>
                <NavLink exact to='/Help' activeClassName='active-navLink' className='demo'>
                    <div className='flex flex-row gap-12 p-2'><SupportIcon className='iconallside' /> <h1 className='text-white text-xl tracking-wider'>Help</h1></div>
                </NavLink>

            </div>
        </div>
    )
}
