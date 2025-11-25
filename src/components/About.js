import React from "react";

const About = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-3">About Me</h2>

      <p>
        Short bio: your background, major skills, and what you are looking for.
      </p>

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
