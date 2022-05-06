import React, { useEffect, useState } from "react";
import Sidenav from "../Usersetting/Sidenav";
import { makeStyles } from "@material-ui/styles";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import { api } from "../../helper/instance";
import { styled } from "@mui/system";
import { getNotificationList } from "../../store/actions/NotificationAction";
import { useDispatch, useSelector } from "react-redux";
import Generalsounds from "./Generalsounds";
import Friendrequest from "./Friendrequest";
import Comment from "./Comment";
import Chatmessage from "./Chatmessage";
import Chatparticipate from "./Chatparticipate";
const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
    height: "150vh",
  },
  items: {
    background: "#202836",
    width: "120vh",
    marginLeft: "31%",
    marginTop: "8%",
  },
}));
// const blue = {
//   500: "#007FFF",
// };

const grey = {
  400: "#BFC7CF",
  500: "#AAB4BE",
  600: "#6F7E8C",
};

const Root = styled("span")(
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
      background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
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
    `
);

export default function Notifications() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { notificationList } = useSelector((state) => state.notification);
  useEffect(() => {
    dispatch(getNotificationList());
  }, []);

  // console.log(notificationList);

  const [general_Notifications, setGeneral_Notification] = useState(
    notificationList?.general_Notifications
  );

  const handleNotification = () => {
    api
      .post(`notification/add`, {
        general_Notifications: !notificationList?.general_Notifications,
        general_Sounds: notificationList?.general_Sounds,
        social_FriendRequestNotification:
          notificationList?.social_FriendRequestNotification,
        social_CommentNotification:
          notificationList?.social_CommentNotification,
        chat_MessageNotification: notificationList?.chat_MessageNotification,
        chat_ParticipateNotifiaction:
          notificationList?.chat_ParticipateNotifiaction,
      })
      .then((res) => {
        console.log("notification is", res);
        if (res.data.status === true) {
          alert(res.data.message);
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something Wrong!!!!!");
      });
  };

  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };
  return (
    <div className={`${classes.maincont}`}>
      <div>
        <Sidenav />
      </div>
      <div className=" float-left mt-11">
        <h1 className="text-3xl ml-9 align mt-1 items-start text-white font-bold ">
          Privacy Settings
        </h1>
      </div>
      {notificationList ? (
        <>
          <div
            className={` flex flex-col gap-3 py-6 rounded-xl ${classes.items}`}
            key={notificationList.id}
          >
            <h1 className="text-white justify-start flex text-xl font-semibold ml-7">
              General Notifications
            </h1>
            {/* general notification switch */}
            <div>
              <div className="flex flex-row gap-4 items-start">
                <SwitchUnstyled
                  component={Root}
                  {...label}
                  name="general_Notifications"
                  value={general_Notifications}
                  defaultChecked={notificationList?.general_Notifications}
                  onChange={(e) => setGeneral_Notification(e.target.checked)}
                  onClick={handleNotification}
                />
                <div className="flex flex-col gap-2 items-start text-white">
                  <h1 className="font-bold tracking-wider">Notifications</h1>
                  <h3 className="text-sm tracking-widest text-gray-500">
                    Enable to make your profile viewable by anyone.
                  </h3>
                </div>
              </div>
            </div>
            {/* general sounds switch */}
            <Generalsounds notificationList={notificationList} />
            <hr className="text-gray-500" />

            <h1 className="text-white justify-start flex text-xl font-semibold ml-7">
              Social Notifications
            </h1>
            {/* social friend request switch */}
            <Friendrequest notificationList={notificationList} />
            {/* social comment switch */}
            <Comment notificationList={notificationList} />
            <hr className="text-gray-500" />

            <h1 className="text-white justify-start flex text-xl font-semibold ml-7">
              Chat Notifications
            </h1>
            {/* chat message switch */}
            <Chatmessage notificationList={notificationList} />
            {/* chat participate switch */}
            <Chatparticipate notificationList={notificationList} />
            <hr className="text-gray-500" />
          </div>
        </>
      ) : (
        <>
          <div
            className={` flex flex-col gap-3 py-6 rounded-xl ${classes.items}`}
          >
            <h1 className="text-white justify-start flex text-xl font-semibold ml-7">
              General Notifications
            </h1>
            {/* general notification switch */}
            <div>
              <div className="flex flex-row gap-4 items-start">
                <SwitchUnstyled
                  component={Root}
                  {...label}
                  name="general_Notifications"
                  value={general_Notifications}
                  defaultChecked={general_Notifications}
                  onChange={(e) => setGeneral_Notification(e.target.checked)}
                  onClick={handleNotification}
                />
                <div className="flex flex-col gap-2 items-start text-white">
                  <h1 className="font-bold tracking-wider">Notifications</h1>
                  <h3 className="text-sm tracking-widest text-gray-500">
                    Enable to make your profile viewable by anyone.
                  </h3>
                </div>
              </div>
            </div>
            {/* general sounds switch */}
            <Generalsounds notificationList={notificationList} />
            <hr className="text-gray-500" />

            <h1 className="text-white justify-start flex text-xl font-semibold ml-7">
              Social Notifications
            </h1>
            {/* social friend request switch */}
            <Friendrequest notificationList={notificationList} />
            {/* social comment switch */}
            <Comment notificationList={notificationList} />
            <hr className="text-gray-500" />

            <h1 className="text-white justify-start flex text-xl font-semibold ml-7">
              Chat Notifications
            </h1>
            {/* chat message switch */}
            <Chatmessage notificationList={notificationList} />
            {/* chat participate switch */}
            <Chatparticipate notificationList={notificationList} />
            <hr className="text-gray-500" />
          </div>
        </>
      )}

      <h1 className="text-white  float-left ml-11 mt-4">
        If you'd like to learn more about Notification settings, you can read
        about it in the user guide.
      </h1>
    </div>
  );
}
