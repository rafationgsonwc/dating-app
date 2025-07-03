"use client";

export default function Navbar() {

    const handleLogout = () => {
        localStorage.removeItem("authUser");
        window.location.href = "/";
    }
    return (
        <div className="side-navbar">
            <div className="side-navbar-content">
                <div className="side-navbar-item" onClick={() => {
                    window.location.href = "/explore";
                }}>
                    <i className="la la-search"></i>
                    <span>Explore</span>
                </div>
                <div className="side-navbar-item" onClick={() => {
                    window.location.href = "/matches";
                }}>
                    <i className="la la-heart"></i>
                    <span>Matches</span>
                </div>
                <div className="side-navbar-item" onClick={() => {
                    window.location.href = "/chat";
                }}>
                    <i className="la la-comments"></i>
                    <span>Chat</span>
                </div>
                <div className="side-navbar-item" onClick={() => {
                    window.location.href = "/profile";
                }}>
                    <i className="la la-user"></i>
                    <span>Profile</span>
                </div>
                <div className="side-navbar-item" onClick={handleLogout}>
                    <i className="la la-sign-out"></i>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
}