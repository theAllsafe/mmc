import React, { useState } from "react";
import { api } from "../../helper/instance";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import { styled } from "@mui/system";

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

const grey = {
  400: "#BFC7CF",
  500: "#AAB4BE",
  600: "#6F7E8C",
};

const Chatparticipate = ({ notificationList }) => {
  const [chat_ParticipateNotifiaction, setChat_ParticipateNotifiaction] =
    useState(notificationList?.chat_ParticipateNotifiaction);
  const handleNotification = () => {
    api
      .post(`notification/add`, {
        general_Notifications: notificationList?.general_Notifications,
        general_Sounds: notificationList?.general_Sounds,
        social_FriendRequestNotification:
          notificationList?.social_FriendRequestNotification,
        social_CommentNotification:
          notificationList?.social_CommentNotification,
        chat_MessageNotification: notificationList?.chat_MessageNotification,
        chat_ParticipateNotifiaction:
          !notificationList?.chat_ParticipateNotifiaction,
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
    <>
      <div>
        <div className="flex flex-row gap-4 items-start">
          <SwitchUnstyled
            component={Root}
            {...label}
            name="chat_ParticipateNotifiaction"
            value={chat_ParticipateNotifiaction}
            defaultChecked={
              notificationList?.chat_ParticipateNotifiaction ||
              chat_ParticipateNotifiaction
            }
            onChange={(e) => setChat_ParticipateNotifiaction(e.target.checked)}
            onClick={handleNotification}
          />
          <div className="flex flex-col gap-2 items-start text-white">
            <h1 className="font-bold tracking-wider">New Participant</h1>
            <h3 className="text-sm tracking-widest text-gray-500">
              Enable to make your profile viewable by anyone.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatparticipate;
