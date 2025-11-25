import React from "react";

const About = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-3">About Me</h2>

      <p>Hello! Here is some information about me:</p>

      <div className="mt-4">
        <h4>Personal Information</h4>
        <ul className="list-group w-50">
          <li className="list-group-item"><strong>Name:</strong> Catheirne Jade Monterozo De Jesus</li>
          <li className="list-group-item"><strong>Age:</strong> 23</li>
          <li className="list-group-item"><strong>Birthdate:</strong> May 14, 2002</li>
          <li className="list-group-item"><strong>Gender:</strong> Female</li>
          <li className="list-group-item"><strong>Nationality:</strong> Filipino</li>
          <li className="list-group-item"><strong>Place of Birth:</strong> Santa Cruz, Marinduque</li>
          <li className="list-group-item"><strong>Civil Status:</strong> Single</li>
        </ul>
      </div>

      <h4 className="mt-4">Skills</h4>
      <ul className="list-group w-50">
        <li className="list-group-item">JavaScript (ES6+)</li>
        <li className="list-group-item">React</li>
        <li className="list-group-item">HTML & CSS</li>
        <li className="list-group-item">Version Control (Git)</li>
        <li className="list-group-item">Laravel</li>
      </ul>
    </div>
  );
};

export default About;
