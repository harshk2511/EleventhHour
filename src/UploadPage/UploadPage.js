import React from "react";

import "./UploadPage.css";

const uploadPage = () => {
  return (
    <React.Fragment>
      <form>
        <div className="upload__title">
          <p>Upload</p>
        </div>
        <div className="upload__content">
          <label className="upload__label" htmlFor="nameofdoc">
            Name of Document
          </label>
          <input
            id="nameofdoc"
            name="nameofdoc"
            placeholder="Name"
            type="text"
            className="upload__textbox"
          />
          <br />
          <label className="upload__label" htmlFor="branch">
            Branch
          </label>
          <div className="dropdown">
            <button className="dropbtn">Choose Branch</button>
            <div className="dropdown-content">
              <p>CSE</p>
              <p>IT</p>
              <p>ECE</p>
              <p>EEE</p>
              <p>Mech</p>
              <p>Chemical</p>
              <p>Mining</p>
            </div>
          </div>
          <br />
          <label className="upload__label" htmlFor="doctype">
            Document Type
          </label>
          <div className="dropdown">
            <button className="dropbtn">Choose Document Type</button>
            <div className="dropdown-content">
              <p>PDF</p>
              <p>DOCX</p>
              <p>PPT</p>
              <p>Others</p>
            </div>
          </div>
        <br />
        <label className="upload__label" htmlFor="course">
          Course
        </label>
        <input
          id="course"
          name="course"
          type="text"
          className="upload__textbox"
          placeholder="Course Name"
        />
        <br />
        <input type="file" id="filebtn" name="file" hidden />
        <label htmlFor="filebtn" className="fileuploadbtn">
          Choose File
        </label>
        <br />
        <button className="inverted">UPLOAD</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default uploadPage;
