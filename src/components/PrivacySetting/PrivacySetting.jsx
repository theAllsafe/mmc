import React from 'react'
import Sidenav from '../SideNav/SideNav'
import { makeStyles } from '@material-ui/styles';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import { flexbox, styled } from '@mui/system';
const useStyles = makeStyles((theme) => ({
    maincont: {
        background: "#545A70",
        height: "150vh",
    },
    items: {
        background: "#202836",
        width: "120vh",
        marginLeft: '31%',
        marginTop: '8%'
    }
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

export default function PrivacySetting() {
    const classes = useStyles();
    const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };
    return (
        <div className={`${classes.maincont}`}>
            <div>
                <Sidenav />
            </div>
            <div className=' float-left mt-11'>
                <h1 className='text-3xl ml-9 align mt-1 items-start text-white font-bold '>Privacy Settings</h1>
            </div>
            <div className={` flex flex-col gap-8 py-6 rounded-xl ${classes.items}`} >

                <div >
                    <div className='flex flex-row gap-4 items-start'><SwitchUnstyled component={Root} {...label} defaultChecked /> <div className='flex flex-col gap-2 items-start text-white'><h1 className='font-bold tracking-wider'>Public Profile</h1> <h3 className='text-xs tracking-widest'>Enable to make your profile viewable by anyone.</h3></div></div>
                </div>
                <div >
                    <div className='flex flex-row gap-4 items-start'><SwitchUnstyled component={Root} {...label} defaultChecked /> <div className='flex flex-col gap-2 items-start text-white'><h1 className='font-bold tracking-wider'>Public Profile</h1> <h3 className='text-xs tracking-widest'>Enable to make your profile viewable by anyone.</h3></div></div>
                </div>
                <div >
                    <div className='flex flex-row gap-4 items-start'><SwitchUnstyled component={Root} {...label} defaultChecked /> <div className='flex flex-col gap-2 items-start text-white'><h1 className='font-bold tracking-wider'>Public Profile</h1> <h3 className='text-xs tracking-widest'>Enable to make your profile viewable by anyone.</h3></div></div>
                </div>
                <div >
                    <div className='flex flex-row gap-4 items-start'><SwitchUnstyled component={Root} {...label} defaultChecked /> <div className='flex flex-col gap-2 items-start text-white'><h1 className='font-bold tracking-wider'>Public Profile</h1> <h3 className='text-xs tracking-widest'>Enable to make your profile viewable by anyone.</h3></div></div>
                </div>
                <div >
                    <div className='flex flex-row gap-4 items-start'><SwitchUnstyled component={Root} {...label} defaultChecked /> <div className='flex flex-col gap-2 items-start text-white'><h1 className='font-bold tracking-wider'>Public Profile</h1> <h3 className='text-xs tracking-widest'>Enable to make your profile viewable by anyone.</h3></div></div>
                </div>

            </div>

        </div>
    )
}
