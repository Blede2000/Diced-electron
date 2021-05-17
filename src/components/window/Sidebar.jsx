import React from "react";

const Sidebar = () => {
    return (
        <header className="sidebar">
            <div className="top">
                {/* //Change this to component later */}
                <img
                    src="static://static/profile-placeholder.jpg"
                    alt=""
                    className="profilePic"
                />
            </div>
            <div className="mid"></div>
            <div className="bottom"></div>
        </header>
    );
};

export default Sidebar;
