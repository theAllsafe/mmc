import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import Sidenav from "./Sidenav";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import { getuserById } from "../../store/actions/UserAction";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
    height: "150vh",
  },

  butcolor: {
    background: "#46D490",
  },
}));

const Setting = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getuserById());
  }, []);

  return (
    <>
      <div className={`${classes.maincont}`}>
        <div>
          <Sidenav />
        </div>

        <div className=" mt-14">
          {userList && (
            <>
              <ul className="text-white font-bold flex flex-col gap-5">
                <li className=" grow">
                  <div>
                    <span className="absolute block ml-10">
                      <PersonIcon />
                      First Name
                    </span>
                    <input
                      type="text"
                      className="pr-80 h-16 float-left ml-8 rounded-lg bg-inherit border border-green-300 text-center"
                      name="fName"
                      defaultValue={userList.fName}
                    />
                  </div>
                </li>
                <li className=" grow">
                  <div>
                    <span className="absolute block ml-10">
                      <PersonIcon /> Last Name
                    </span>
                    <input
                      type="text"
                      className="pr-80 h-16 float-left ml-8 rounded-lg bg-inherit border border-green-300 text-center"
                      name="lName"
                      defaultValue={userList.lName}
                    />
                  </div>
                </li>
                <li className=" grow">
                  <div>
                    <span className="absolute block ml-10">
                      <EmailIcon /> Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      defaultValue={userList.email}
                      className="pr-80 h-16 float-left ml-8 rounded-lg bg-inherit border border-green-300 text-center"
                    />
                  </div>
                </li>

                <li className=" flex float-left ml-60 mt-4">
                  <button
                    className={`p-3 px-10 rounded-lg ${classes.butcolor}`}
                  >
                    Save Changes
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Setting;
