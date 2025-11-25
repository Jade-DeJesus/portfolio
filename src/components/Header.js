import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
return (
<nav className="navbar navbar-expand-lg px-3" style={{background: "#b8b8b8"}}>
<div className="container-fluid">
<Link className="navbar-brand text-dark fw-bold" to="/">De Jesus</Link>


<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarNav"
>
<span className="navbar-toggler-icon"></span>
</button>


<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ms-auto">


<li className="nav-item">
<Link className="nav-link text-dark fw-semibold" to="/">Home</Link>
</li>


<li className="nav-item">
<Link className="nav-link text-dark fw-semibold" to="/about">About</Link>
</li>


<li className="nav-item">
<Link className="nav-link text-dark fw-semibold" to="/projects">Projects</Link>
</li>


</ul>
</div>
</div>
</nav>
);
};
export default Header;