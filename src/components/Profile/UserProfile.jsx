import React from 'react'
import Sidenav from '../Usersetting/Sidenav'
import { makeStyles } from '@material-ui/styles';
import Historyicon from '../Profile/res/Historyicon.svg'
import DConnectedAppsicon from '../Profile/res/Downloadicon.svg'
import ConnectedAppsicon from '../Profile/res/ConnectedAppsicon.svg'
import Manageacount from '../Profile/res/Manageacount.svg'
import Integration from '../Profile/res/Integration.svg'
import Shopsetting from '../Profile/res/Shopsetting.svg'
import Systemsetting from '../Profile/res/Systemsetting.svg'
import Payementinfo from '../Profile/res/Payementinfo.svg'
import Profileicon from '../Profile/res/Profileicon.svg'
import Downloadicon from '../Profile/res/Downloadicon.svg'

const useStyles = makeStyles((theme) => ({
    maincont: {
        background: "#545A70",
        height: "150vh"
    },
}));

export default function UserProfile() {
    const classes = useStyles();
    return (
        <div className={`${classes.maincont}`}>
            <div>
                <Sidenav />
            </div>
            <div className='flex flex-col'>
                <div className='text-left ml-8'>
                    <h1 className='text-3xl align mt-14 items-start text-white font-bold '>Account</h1>
                </div>
                <div className='grid grid-cols-3 p-4 gap-y-4 gap-x-4 pr-20'>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Profileicon} /></a><h1 className='text-white font-bold text-xl'>Personal Information</h1>
                            <h2 className='text-white font-medium text-lg'>Access your personal info</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='pt-7'>
                            <img src={Historyicon} /></a><h1 className='text-white font-bold text-xl'>History</h1>
                            <h2 className='text-white font-medium text-lg'>Access private history</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Downloadicon} /></a><h1 className='text-white font-bold text-xl'>Download</h1>
                            <h2 className='text-white font-medium text-lg'>Download your data</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={ConnectedAppsicon} /></a><h1 className='text-white font-bold text-xl'>Connected Apps</h1>
                            <h2 className='text-white font-medium text-lg'>Manage connected apps</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Payementinfo} /></a><h1 className='text-white font-bold text-xl'>Payment Info</h1>
                            <h2 className='text-white font-medium text-lg'>Manage payment info</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Manageacount} /></a><h1 className='text-white font-bold text-xl'>Account</h1>
                            <h2 className='text-white font-medium text-lg'>Manage account info</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Integration} /></a><h1 className='text-white font-bold text-xl'>Integrations</h1>
                            <h2 className='text-white font-medium text-lg'>Manage Integrations</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Shopsetting} /></a><h1 className='text-white font-bold text-xl'>Shop Settings</h1>
                            <h2 className='text-white font-medium text-lg'>Manage your store</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Systemsetting} /></a><h1 className='text-white font-bold text-xl'>System Settings</h1>
                            <h2 className='text-white font-medium text-lg'>Manage preferences</h2></div> </div>




                </div>



            </div>
        </div >

    )
}
