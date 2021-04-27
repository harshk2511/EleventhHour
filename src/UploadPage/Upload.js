import React, { useState } from "react";
import { VALIDATOR_REQUIRE } from "../Shared/Components/Util/validators";

import "./Upload.css";

const Upload = () => {
  //const [nod, setnod] = useState(" ");
  //const [crse, setcrse] = useState(" ");
  let crse;
  let nod;
  let branch;
  let doctype;

  const setNodValue = (evt) => {
      nod = evt.target.value;
  }

  const setCrseValue = (evt) => {
      crse = evt.target.value;
  }

  const setBranchValue = (evt) => {
      branch = evt.target.value;
  }

  const setDocTypeValue = (evt) => {
      doctype = evt.target.value;
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(nod);
    console.log(crse);
    console.log(branch);
    console.log(doctype);
    try {
      const response = await fetch(
        "http://localhost:5000/branches/files/upload",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
          body: JSON.stringify({
            nameofdoc: nod.toString(),
            branch: branch.toString(),
            doctype: doctype.toString(),
            course: crse.toString(),
          })
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <form action="/upload" onSubmit={formSubmitHandler}>
        <div className="title">
          <h1>Upload</h1>
        </div>
        <div className="upload_form">
          <div className="element">
            <label className="upload__label" htmlFor="nameofdoc">
              Name of Document
            </label>
            <input
              id="nameofdoc"
              name="nameofdoc"
              placeholder="Name"
              type="text"
              value={nod}
              className="upload__textbox"
              onChange={setNodValue}
              required
            />
          </div>
          <div className="element">
            <label className="upload__label" htmlFor="branch">
              Branch
            </label>
            <select name="branch" id="branch" onChange={setBranchValue} required>
              <option disabled selected value="0">
                Choose Branch
              </option>
              <option value="Chemical">Chemical</option>
              <option value="CS">CS</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="IT">IT</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Metallurgy">Metallurgy</option>
              <option value="Mining">Mining</option>
            </select>
          </div>
          <div className="element">
            <label className="upload__label" htmlFor="doctype">
              Document Type
            </label>
            <select name="doctype" id="doctype" onChange={setDocTypeValue}>
              <option disabled selected value="0">
                Choose Document Type
              </option>
              <option value="PDF">PDF</option>
              <option value="PPT">PPT</option>
              <option value="DOCX">Docx</option>
              <option value="Image">Image</option>
              <option value="Video">Video</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="element">
            <label className="upload__label" htmlFor="course">
              Course
            </label>
            <input
              id="course"
              name="course"
              type="text"
              value={crse}
              className="upload__textbox"
              placeholder="Course Name"
              onChange={setCrseValue}
              required
            />
          </div>
          <div className="element">
            <label className="upload__label" htmlFor="document">
              Choose File
            </label>
            <input
              type="file"
              name="document"
              id="document"
              className="document"
              required
            />
          </div>
          <button className="upload_btn" type="submit">
            Upload
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Upload;
