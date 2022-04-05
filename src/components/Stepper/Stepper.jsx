import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import addData from "./res/addData.svg";
import uploadImage from "./res/uploadImage.svg";
import password from "./res/password.svg";
import complete from "./res/complete.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  step: {
    width: "80%",
    marginLeft: "10%",
    [theme.breakpoints.down(426)]: {
      marginLeft: "0 !important",
    },
  },
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#BBDDCD",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#BBDDCD",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 8,
    border: 0,
    backgroundColor: "#515F60",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#46D490",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#46D490",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const icons = {
    1: <SentimentSatisfiedAltIcon />,
    2: <AccountCircleOutlinedIcon />,
    // 3: <PersonAddAltOutlinedIcon />,
    3: <img src={addData} alt="logo" className="abc h-5 w-5" />,
    4: <img src={uploadImage} alt="logo" className="abc h-5 w-5" />,
    5: <img src={password} alt="logo" className="abc h-5 w-5" />,
    6: <img src={complete} alt="logo" className="abc h-5 w-5" />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["st1", "st2", "st3", "st4", "st5", "st6"];

export default function Steppers(props) {
  const classes = useStyles();

  return (
    <Stack className={classes.step} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={parseInt(localStorage.getItem("setpperId"))}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

// const Stack = styled.div`
// width: 80%;
// margin-left: 0px;
// `;
