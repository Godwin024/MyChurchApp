import React from "react";
import "./View.css";
// import { Link } from "react-router-dom";

const View_Attendance = () => {
  const List = [
    {
      Name: "Mr Adam",
      images: "./public/adam.jpg",
      role: "Admininstrator",
      gender: "Male",
    },
    {
      Name: "Cynthia Joy",
      images: "./public/female.jpg",
      role: "Usher",
      gender: "female",
    },
    {
      Name: "Henry Trust",
      images: "./public/henry.jpg",
      role: "Member",
      gender: "male",
    },
  ];

  return (
    <div className="homiee">
      <div className="AdminWrap">
        <div className="adminRight">
          <div className="adminRightWrap">
            <h1>SERVICE ATTENDEES</h1>
            {List.map((props) => (
              <div className="card">
                <div className="images">
                  <img src={props.images} />
                </div>
                <div className="text">
                  <h5>{props.Name}</h5>
                </div>
                <div className="text">
                  <p>{props.role}</p>
                </div>
                <div className="text">
                  <p>{props.gender}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_Attendance;