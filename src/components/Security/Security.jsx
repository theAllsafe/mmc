import { text } from '@fortawesome/fontawesome-svg-core';
import { makeStyles } from '@material-ui/styles';
import { height } from '@mui/system';
import React from 'react';
import Sidenav from '../SideNav/SideNav';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LockIcon from '@mui/icons-material/Lock';


import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';


const useStyles = makeStyles((theme) => ({
    maincont: {
        background: "#545A70",
        height: "150vh"
    },

    butcolor: {
        background: "#46D490"
    }
    ,

}));
const blue = {
    500: '#007FFF',
};

const grey = {
    400: '#BFC7CF',
    500: '#AAB4BE',
    600: '#6F7E8C',
};

const Root = styled('span')(
    ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin: 10px;
    cursor: pointer;
  
    &.${switchUnstyledClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    & .${switchUnstyledClasses.track} {
      background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
      border-radius: 10px;
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  
    & .${switchUnstyledClasses.thumb} {
      display: block;
      width: 14px;
      height: 14px;
      top: 3px;
      left: 3px;
      border-radius: 16px;
      background-color: #fff;
      position: relative;
      transition: all 200ms ease;
    }
  
    &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.${switchUnstyledClasses.checked} {
      .${switchUnstyledClasses.thumb} {
        left: 22px;
        top: 3px;
        background-color: #fff;
      }
  
      .${switchUnstyledClasses.track} {
        background: #46D490;
      }
    }
  
    & .${switchUnstyledClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      margin: 0;
    }
    `,
);

export default function () {
    const classes = useStyles();
    const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };
    return (
        <div className={`${classes.maincont}`} >
            <div>
                <Sidenav />
            </div>

            < div className=' mt-14'>

                <ul className='text-white font-bold flex flex-col gap-5'>
                    <li> <h1 className='text-3xl float-left ml-8 '>Security</h1></li>





                    <li className=' grow'>

                        <div>
                            <span className='absolute block ml-10'><LockIcon /> Current Password</span>
                            <input type="text" className='pr-80 h-16 float-left ml-8 rounded-lg bg-inherit border border-green-300' />
                        </div>
                    </li>
                    <li>

                        <div>
                            <span className='absolute block ml-10'><LockIcon /> Current Password</span>
                            <input type="text" className='float-left p-5 ml-8 mr-10 rounded-lg bg-inherit  border border-green-300' />
                        </div>
                        <div>
                            <span className='absolute float-right -ml-80 pl-3'><LockIcon /> Repeat Password</span>
                            <input type="text" className='float-left p-5 rounded-lg bg-inherit border border-green-300' />
                        </div>
                    </li>

                    <li>

                        <span className='text-xs float-left ml-8 -mt-3 font-thin text-zinc-400'>You can enable 2 factor authentication anytime to improve your account privacy and security.</span></li>
                    <li>
                        <div className='flex ml-8'>
                            <div> <SwitchUnstyled component={Root} {...label} defaultChecked /></div>
                            <div className=''> <div className=' flex justify-start ml-7'><h1>Enable 2 factor authorization

                            </h1>
                            </div>
                                <span className='text-s ml-7 float-left font-extralight text-zinc-400'> This will send an additional code to your phone number.</span>

                            </div>


                        </div>
                    </li>


                    <li>
                        <div>
                            <span className='absolute block ml-10'><PhoneIphoneIcon /> Phone Number</span>
                            <input type="text" className='float-left p-5 ml-8 mr-10 rounded-lg bg-inherit  border border-green-300' />
                        </div>
                    </li>

                    <li className=' flex float-left ml-60 mt-4'>
                        <button className={`p-3 px-10 rounded-lg ${classes.butcolor}`} >
                            Save Changes
                        </button>
                    </li>
                </ul>

            </div>

        </div>




    )
}
