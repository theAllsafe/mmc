import React from 'react'
import FeedNav from '../Feed/FeedNav'
import { makeStyles } from "@material-ui/core/styles";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SecurityIcon from '@mui/icons-material/Security';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupportIcon from '@mui/icons-material/Support';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import Profileimg from './res/Profileimg.svg'
const useStyles = makeStyles((theme) => ({
    maincont: {
        background: "#545A70"
    },
    sidenav: {
        background: "#202836"

    },
    largeIcon: {
        '& svg': {
            fontSize: 34
        }

    }
    ,
}));
export default function Sidenav() {
    const classes = useStyles();
    return (
        <div>
            <div>
                <FeedNav />
            </div>
            <div className='h-60 w-90 float-left'  >
                <div className={` ml-20 mt-10 p-10 flex  flex-col justify-around gap-13 rounded-3xl ${classes.sidenav}`}>
                    <div className='flex flex-col gap-2'>
                        <img src={Profileimg} className='w-15 h-15' />
                        <h1 className='text-white font-bold text-xl '>Wamique Ahmad</h1>
                        <h4 className='text-white text-lg ' >New Delhi, India</h4>
                        <hr className='hrtag' />
                    </div>

                    <ul className='flex flex-col gap-6 text-white p-10 pb-0 text-xl tracking-wider pt-5'>
                        <li className='flex flex-row gap-9 justify-start'><div><ManageAccountsIcon className='iconsidenav' /></div> General </li>
                        <li className='flex flex-row gap-9'> <div><SecurityIcon className='iconsidenav' /></div> Security</li>
                        <li className='flex flex-row gap-9'><div><WarningAmberIcon className='iconsidenav' /></div>Account</li>
                        <hr />
                        <li className='flex flex-row gap-9'><div><LockIcon className='iconsidenav' /></div>Privacy</li>
                        <li className='flex flex-row gap-9'><div><SettingsInputComponentIcon className='iconsidenav' /></div> Preferences</li>
                        <li className='flex flex-row gap-9'><div><NotificationsIcon className='iconsidenav' /></div>Notifications</li>
                        <li className='flex flex-row gap-9'><div><SupportIcon className='iconsidenav' /></div>help</li>
                    </ul >
                </div >


            </div >
        </div >
    )
}
