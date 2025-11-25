import React, { useEffect } from "react";
const Footer = () => {
useEffect(() => {
const root = document.getElementById('root');
if (root) {
root.style.minHeight = '100vh';
root.style.display = 'flex';
root.style.flexDirection = 'column';
}
}, []);
return (
<footer className="text-dark text-center py-3 mt-5" style={{background: "#b8b8b8"}}>
<p className="mb-0 fw-semibold">
© {new Date().getFullYear()} De Jesus Portfolio — Built with React + Bootstrap
</p>
</footer>
);
};
export default Footer;