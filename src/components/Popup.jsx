import React, { useState } from "react";
import "./Popup.css";
import Cross from "../assets/cross.svg";
import Upload from "../assets/upload.svg";
import Down from "../assets/down.svg";
import { AnimatePresence, motion } from "framer-motion";

const Popup = ({ setPopupState }) => {
  const [selector, setSelector] = useState(false);
  const [selected, setSelected] = useState("Default");
  const options = [
    {
      name: "Default",
      value: "Default",
    },
    {
      name: "Shivam Gupta",
      value: "Shivam Gupta",
    },
    {
      name: "Sumit Shakya",
      value: "Sumit Shakya",
    },
    {
      name: "Sukhvinder",
      value: "Sukhvinder",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupState((prev) => !prev);
  };
  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="popup"
    >
      <form onSubmit={handleSubmit}>
        <AnimatePresence>
          <motion.div
            key="modal121"
            initial={{ opacity: 1, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 1, y: 30, scale: 0.8 }}
            className="transcribe_file"
          >
            <div className="popup_headding">
              <span className="transcribe_headding">Transcribe File</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPopupState((prev) => !prev);
                }}
                className="cross"
              >
                <img src={Cross} />
              </button>
            </div>
            <div className="dropdown">
              <label style={{ fontWeight: "400" }} htmlFor="lang">
                Transcription Language
              </label>
              {/* <select className="s_selector" name="lang" id="lang">
              <option className="s_options" value="Shivam Gupta">
                Shivam Gupta
              </option>
              <option className="s_options" value="Ayushi">
                Ayushi
              </option>
              <option className="s_options" value="Diksha">
                Diksha
              </option>
            </select> */}
              <button
                className="s_selector"
                onClick={(e) => {
                  e.preventDefault();
                  setSelector((prev) => !prev);
                }}
                style={{
                  borderBottomLeftRadius: selector ? "0px" : "5px",
                  borderBottomRightRadius: selector ? "0px" : "5px",
                }}
              >
                <span>{selected}</span>
                <span>
                  <img src={Down} />
                </span>
              </button>
              {selector && (
                <motion.div
                  initial={{ opacity: 1, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 1, height: 0 }}
                  className="s_optionss"
                >
                  {options.map((option) => (
                    <button
                      className="s_options"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelected(option.value);
                        setSelector((prev) => !prev);
                      }}
                    >
                      {option.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            <div className="upload">
              <label className="upload" htmlFor="upload">
                <img src={Upload} />
                <span style={{ fontSize: "1.2rem" }}>
                  <span style={{ color: "#0048AD" }}>Click to upload</span>{" "}
                  <span style={{ color: "#475367" }}>or drag and drop</span>
                </span>
                <span style={{ color: "#98A2B3" }}>
                  The maximum file size is 1GB for audio and 10GB for videos.
                </span>
                <span style={{ color: "#98A2B3" }}>
                  Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv,
                  m4a, mov, wmv, wma
                </span>
              </label>
              <input type="file" name="upload" id="upload" />
            </div>
            <div className="input">
              <label htmlFor="import">Import from Link</label>
              <input
                className="inputt"
                type="text"
                name="import"
                placeholder="Paste a Drobpox, Google Drive or Youtube URL here"
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" className="checkboxx" name="speaker" />
              <label htmlFor="speaker">Speaker Identification</label>
            </div>
            <button className="submit" type="submit">
              Transcribe File
            </button>
          </motion.div>
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default Popup;
