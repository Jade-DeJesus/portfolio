import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.png";


const Home = () => {
return (
<div className="container text-center py-5">
<img src={profilePic} alt="Profile" className="responsive-img mb-4" />


<h1 className="fw-bold">Hi — I’m De Jesus, Catherine Jade M.</h1>
<p className="lead mt-3">
I build web apps with React. I love clean interfaces, effective UX, and learning new tech.
</p>


<Link to="/skills" className="btn btn-primary btn-lg mt-3" style={{background:"#9a9a9a", border:"none"}}>
See my work
</Link>
</div>
);
};
export default Home;