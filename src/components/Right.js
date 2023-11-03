import React from "react";
import "./Right.css";
import Search from "../assets/search.svg";
import bell from "../assets/bell.svg";
import profile from "../assets/profile.svg";
import Allfiles from "../assets/allfiles.svg";
import Texts from "../assets/text.svg";
import Saved from "../assets/saved.svg";

const Right = ({ setPopupState }) => {
  const data = [
    {
      name: "Peng Meeting",
      type: "Audio",
      duration: "00:00:00",
      dateCreated: "12/12/2020",
      lastUpdated: "12/12/2020",
      action: "",
    },
    {
      name: "Tofunmi Idowu",
      type: "Audio",
      duration: "00:20:00",
      dateCreated: "13/12/2020",
      lastUpdated: "13/12/2020",
      action: "",
    },
    {
      name: "random silly name",
      type: "Video",
      duration: "00:09:00",
      dateCreated: "14/12/2020",
      lastUpdated: "14/12/2020",
      action: "",
    },
    {
      name: "Peng Meeting",
      type: "Audio",
      duration: "00:00:00",
      dateCreated: "12/12/2020",
      lastUpdated: "12/12/2020",
      action: "",
    },
    {
      name: "Tofunmi Idowu",
      type: "Audio",
      duration: "00:20:00",
      dateCreated: "13/12/2020",
      lastUpdated: "13/12/2020",
      action: "",
    },
    {
      name: "random silly name",
      type: "Video",
      duration: "00:09:00",
      dateCreated: "14/12/2020",
      lastUpdated: "14/12/2020",
      action: "",
    },
    {
      name: "Peng Meeting",
      type: "Audio",
      duration: "00:00:00",
      dateCreated: "12/12/2020",
      lastUpdated: "12/12/2020",
      action: "",
    },
  ];
  return (
    <div className="right">
      <div className="top">
        <div className="search">
          <img src={Search} alt="Search" />
        </div>
        <input type="text" placeholder="Search" />
        <div className="notification">
          <img src={bell} alt="Notification" />
        </div>
        <img className="profile" src={profile} alt="Profile" />
      </div>

      <div className="top_headding">
        <div className="left_name">
          <div className="name">Welcome Shakirat</div>
          <div className="tagline">
            Upload your audio and Video to covert to text
          </div>
        </div>
        <button
          onClick={() => setPopupState((prev) => !prev)}
          className="Transcribe"
        >
          Transcribe File
        </button>
      </div>

      <div className="three_box">
        <div className="boxes">
          <div className="boxss">
            <img src={Allfiles} />
          </div>
          <div className="number">100</div>
          <div className="tagline">Uploaded Files</div>
        </div>
        <div className="boxes">
          <div className="boxss">
            <img src={Texts} />
          </div>
          <div className="number">50</div>
          <div className="tagline">Transcribed</div>
        </div>
        <div className="boxes">
          <div className="boxss">
            <img src={Saved} />
          </div>
          <div className="number">20</div>
          <div className="tagline">Saved</div>
        </div>
      </div>

      <div className="table_box">
        <span>Recent Files</span>
        <hr />
        <br />
        <div className="table">
          <div className="thead">
            <input className="th0" type="checkbox" />
            <div className="th1">Name</div>
            <div className="th2">Type</div>
            <div className="th3">Duration</div>
            <div className="th4">Date Created</div>
            <div className="th5">Last Updated</div>
            <div className="th6">Action</div>
          </div>
          <div className="tbody">
            {data.map((item) => (
              <div className="tr">
                <input className="td0" type="checkbox" />
                <div className="td td1">{item.name}</div>
                <div className="td td2">{item.type}</div>
                <div className="td td3">{item.duration}</div>
                <div className="td td4">{item.dateCreated}</div>
                <div className="td td5">{item.lastUpdated}</div>
                <div className="td td6">{item.action}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
