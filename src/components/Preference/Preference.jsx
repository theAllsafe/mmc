import React from 'react'
import Sidenav from '../SideNav/SideNav'
import { makeStyles } from '@material-ui/styles';
import Devices from '../Preference/res/Devices.svg';
import Authicon from '../Preference/res/Authicon.svg';
import Cashicon from '../Preference/res/Cashicon.svg';
import Walleticon from '../Preference/res/Walleticon.svg';
import Search from '../Preference/res/Search.svg';
import Group from '../Preference/res/Group.svg';
import Mosque from '../Preference/res/Mosque.svg';
import Cacheicon from '../Preference/res/Cacheicon.svg';
import Reedemicon from '../Preference/res/Reedemicon.svg';


const useStyles = makeStyles((theme) => ({
    maincont: {
        background: "#545A70",
        height: "150vh"
    },
}));

export default function Preference() {
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
                            <img src={Devices} /></a><h1 className='text-white font-bold text-xl'>Devices</h1>
                            <h2 className='text-white font-medium text-lg'>Manage connected devices</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='pt-7'>
                            <img src={Authicon} />
                        </a><h1 className='text-white font-bold text-xl'>Authentication </h1>
                            <h2 className='text-white font-medium text-lg'>Manage settings</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Mosque} />
                        </a><h1 className='text-white font-bold text-xl'>Masjid</h1>
                            <h2 className='text-white font-medium text-lg'>Manage masjid settings</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Group} />
                        </a><h1 className='text-white font-bold text-xl'>Groups</h1>
                            <h2 className='text-white font-medium text-lg'>manage group settings</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Search} />
                        </a><h1 className='text-white font-bold text-xl'>Search</h1>
                            <h2 className='text-white font-medium text-lg'>Manage search settings</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Cacheicon} />
                        </a><h1 className='text-white font-bold text-xl'>Cache</h1>
                            <h2 className='text-white font-medium text-lg'>Manage cache settings</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Reedemicon} />
                        </a><h1 className='text-white font-bold text-xl'>Redeem</h1>
                            <h2 className='text-white font-medium text-lg'>Redeem your points</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Walleticon} />
                        </a><h1 className='text-white font-bold text-xl'>Wallet</h1>
                            <h2 className='text-white font-medium text-lg'>Manage wallet settings</h2></div> </div>
                    <div className='h-44 w-22  border-solid border-2 border-green-300 rounded-lg'>
                        <div className='flex flex-col items-start pl-7 gap-2 '><a className='  pt-7'>
                            <img src={Cashicon} />
                        </a><h1 className='text-white font-bold text-xl'>Cash</h1>
                            <h2 className='text-white font-medium text-lg'>Encash your wallet</h2></div> </div>




                </div>



            </div>
        </div >
    )
}
