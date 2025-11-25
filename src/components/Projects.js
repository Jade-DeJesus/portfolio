import React from "react";
import projects from "../data/projects1";

const Projects = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">My Projects</h2>

      <div className="row">

        {projects.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>

                <p><strong>Tech:</strong> {p.tech.join(", ")}</p>

                <a 
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline-dark me-2"
                >
                  Repo
                </a>

                <a 
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm"
                  style={{ backgroundColor: "#9a9a9a", color: "white" }}
                >
                  Live
                </a>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
