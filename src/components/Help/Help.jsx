import React from 'react'
import Sidenav from '../SideNav/SideNav'
import { makeStyles } from '@material-ui/styles';
import Userguide from '../Help/res/Userguide.svg';
import Chaticon from '../Help/res/Chaticon.svg';
import Blockedicon from '../Help/res/Blockedicon.svg';
import Archiveicon from '../Help/res/Archiveicon.svg';
import Reporticon from '../Help/res/Reporticon.svg';
import Rewardicon from '../Help/res/Rewardicon.svg';
import Mesageicon from '../Help/res/Mesageicon.svg';
import Partnersicon from '../Help/res/Partnersicon.svg';
import Sponsericon from '../Help/res/Sponsericon.svg';


const useStyles = makeStyles((theme) => ({
    maincont: {
        background: "#545A70",
        height: "150vh"
    },
}));

export default function Help() {
    const classes = useStyles();
    return (
        <div className={`${classes.maincont}`}>
            <div>
                <Sidenav />
            </div>
            <div className='flex flex-col'>
                <div className='text-left ml-8'>
                    <h1 className='text-3xl align mt-14 items-start text-white font-bold '>Assistance</h1>
                </div>
                <div className='grid grid-cols-3 p-4 gap-y-4 gap-x-4 pr-20'>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Userguide} /></a><h1 className='text-white font-bold text-xl'>User Guide</h1>
                            <h2 className='text-white font-medium text-lg'>Learn More about the App</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='pt-7'>
                            <img src={Mesageicon} />
                        </a><h1 className='text-white font-bold text-xl'>Message</h1>
                            <h2 className='text-white font-medium text-lg'>Contact the support team</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Chaticon} />
                        </a><h1 className='text-white font-bold text-xl'>Chat</h1>
                            <h2 className='text-white font-medium text-lg'>Download your data</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Blockedicon} />
                        </a><h1 className='text-white font-bold text-xl'>Blocked Users</h1>
                            <h2 className='text-white font-medium text-lg'>Manage Blocked Users</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Archiveicon} />
                        </a><h1 className='text-white font-bold text-xl'>Archives</h1>
                            <h2 className='text-white font-medium text-lg'>Manage Archives</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Reporticon} />
                        </a><h1 className='text-white font-bold text-xl'>Report</h1>
                            <h2 className='text-white font-medium text-lg'>Report Offenses</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Rewardicon} />
                        </a><h1 className='text-white font-bold text-xl'>Rewards</h1>
                            <h2 className='text-white font-medium text-lg'>See your Rewards</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Partnersicon} />
                        </a><h1 className='text-white font-bold text-xl'>Partners</h1>
                            <h2 className='text-white font-medium text-lg'>Partner Programs</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Sponsericon} />
                        </a><h1 className='text-white font-bold text-xl'>Sponsors</h1>
                            <h2 className='text-white font-medium text-lg'>Sponsor Programs</h2></div> </div>




                </div>



            </div>
        </div >

    )
}
