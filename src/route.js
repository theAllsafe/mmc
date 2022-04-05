import React from "react";
// import { Switch, Route } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus/Aboutus";
import Ads from "./components/Ads/Ads";
import Contactus from "./components/Contactus/Contactus";
import LandingPage from "./components/LandingPage/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Termsofuse from "./components/Termsofuse/Termsofuse";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import BasicDetails from "./components/BasicDetails/BasicDetails";
import OtherDetails from "./components/OtherDetails/OtherDetails";
import UploadProfilePage from "./components/UploadProfilepage/UploadProfilepage";
import Password from "./components/Password/Password";
import Complete from "./components/Complete/Complete";
import IndividualLogin from "./components/Login/LoginType/IndividualLogin";
import MosqueLogin from "./components/Login/LoginType/MosqueLogin";
import BusinessLogin from "./components/Login/LoginType/BusinessLogin";
import WaqfLogin from "./components/Login/LoginType/WaqfLogin";
import Feed from "./components/Feed/Feed";

const BaseRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Aboutus" component={Aboutus} />
      <Route exact path="/Ads" component={Ads} />
      <Route exact path="/Contactus" component={Contactus} />
      <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
      <Route exact path="/Termsofuse" component={Termsofuse} />
      <Route exact path="/SignupOption" component={Signup} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/BasicDetails" component={BasicDetails} />
      <Route exact path="/OtherDetails/:id" component={OtherDetails} />
      <Route
        exact
        path="/UploadProfilePage/:id"
        component={UploadProfilePage}
      />
      <Route exact path="/Password/:id" component={Password} />
      <Route exact path="/Complete" component={Complete} />
      <Route exact path="/IndividualLogin" component={IndividualLogin} />
      <Route exact path="/MosqueLogin" component={MosqueLogin} />
      <Route exact path="/BusinessLogin" component={BusinessLogin} />
      <Route exact path="/WaqfLogin" component={WaqfLogin} />
      <Route exact path="/feed" component={Feed} />
    </Switch>
  );
};

export default BaseRoute;