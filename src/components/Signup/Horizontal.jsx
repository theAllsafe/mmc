import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import PropTypes from 'prop-types';

const steps = ['st1', 'st2', 'st3','st4', 'st5', 'st6'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  
// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//     [`&.${stepConnectorClasses.alternativeLabel}`]: {
//       top: 22,
//     },
//     [`&.${stepConnectorClasses.active}`]: {
//       [`& .${stepConnectorClasses.line}`]: {
//         backgroundImage:
//           'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
//       },
//     },
//     [`&.${stepConnectorClasses.completed}`]: {
//       [`& .${stepConnectorClasses.line}`]: {
//         backgroundImage:
//           'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
//       },
//     },
//     [`& .${stepConnectorClasses.line}`]: {
//       height: 9,
//       border: 0,
//       backgroundColor: '#515F60',
//       borderRadius: 1,
//     },
//   }));
  
//   const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
//     backgroundColor: '#ccc',
//     zIndex: 1,
//     color: '#fff',
//     width: 50,
//     height: 50,
//     display: 'flex',
//     borderRadius: '50%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     ...(ownerState.active && {
//       backgroundImage:
//         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//       boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//     }),
//     ...(ownerState.completed && {
//       backgroundImage:
//         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//     }),
//   }));
  
//   function ColorlibStepIcon(props) {
//     const { active, completed, className } = props;
  
//     const icons = {
//       1: <SettingsIcon />,
//       2: <GroupAddIcon />,
//       3: <VideoLabelIcon />,
//       4: <SettingsIcon />,
//       5: <GroupAddIcon />,
//       6: <VideoLabelIcon />,
//     };
  
//     return (
//       <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
//         {icons[String(props.icon)]}
//       </ColorlibStepIconRoot>
//     );
//   }
  
//   ColorlibStepIcon.propTypes = {
//     /**
//      * Whether this step is active.
//      * @default false
//      */
//     active: PropTypes.bool,
//     className: PropTypes.string,
//     /**
//      * Mark the step as completed. Is passed to child components.
//      * @default false
//      */
//     completed: PropTypes.bool,
//     /**
//      * The label displayed in the step icon.
//      */
//     icon: PropTypes.node,
//   };

  return (
    <Box sx={{ width: '50%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>


      {/* <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}


{/* <Stepper activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel StepIconComponent={ColorlibStepIcon} ></StepLabel>
            </Step>
          );
        })}
      </Stepper>  */}

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 4, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Let me in' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
