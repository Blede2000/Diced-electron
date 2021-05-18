import React from "react";
import { Link } from "react-router-dom";

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
            <div className="mid">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.11353 8.61179L12.1446 1L23.1757 8.61179V20.5732C23.1757 21.15 22.9175 21.7031 22.4577 22.111C21.998 22.5189 21.3745 22.748 20.7244 22.748H3.56488C2.91474 22.748 2.29123 22.5189 1.83151 22.111C1.37179 21.7031 1.11353 21.15 1.11353 20.5732V8.61179Z"
                                        stroke="#6a6a6a"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8.46753 22.748V11.874H15.8216V22.748"
                                        stroke="#6a6a6a"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="/characters">
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.3158 1H4.1563C2.57681 1 1.29639 2.28938 1.29639 3.87991V21.1594C1.29639 22.7499 2.57681 24.0393 4.1563 24.0393H21.3158C22.8953 24.0393 24.1757 22.7499 24.1757 21.1594V3.87991C24.1757 2.28938 22.8953 1 21.3158 1Z"
                                        stroke="#6a6a6a"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M16.0045 9.22833H9.46753V15.811H16.0045V9.22833Z"
                                        stroke="#6a6a6a"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="bottom">
                <div className="add">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 1V15"
                            stroke="#141414"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M1 8H15"
                            stroke="#141414"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Sidebar;
