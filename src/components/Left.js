import React from "react";
import "./Left.css";
import Home from "../assets/home.svg";
import AllFiles from "../assets/allfiles.svg";
import Saved from "../assets/saved.svg";
import Integrations from "../assets/integrations.svg";
import Trash from "../assets/trash.svg";
import Settings from "../assets/settings.svg";
import HelpAndSupport from "../assets/helpandsupport.svg";
import Rocket from "../assets/rocket.svg";

const Left = () => {
  return (
    <div className="left">
      <div className="box">
        <div className="headding">abc firm</div>

        <div className="elements selected">
          <img src={Home} /> Home
        </div>
        <div className="elements">
          <img src={AllFiles} /> All files
        </div>
        <div className="elements">
          <img src={Saved} /> Saved
        </div>
        <div className="elements">
          <img src={Integrations} /> Integrations
        </div>
        <div className="elements">
          <img src={Trash} /> Trash
        </div>
        <div className="elements">
          <img src={Settings} /> Settings
        </div>
        <div className="elements">
          <img src={HelpAndSupport} /> Help And Support
        </div>
      </div>
      <div className="bottom">
        <img src={Rocket} />
        <div className="one">Upgrade Account</div>
        <div className="two">Access to Unlimited Transcription</div>
        <div className="three">Upgrade</div>
      </div>
    </div>
  );
};

export default Left;
