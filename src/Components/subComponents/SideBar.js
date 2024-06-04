import React from "react";

export default function SideBar({ background, name, username, sideProfile }) {
    return (
        <div className="sidebar-loop">
            <div className="sidebar-backImage">
                <img src={background} alt="backGround" />
            </div>

            <div className="sidebar-profile">
                <div className="sidebar-proImage">
                    <img src={sideProfile} alt="backGround" />
                </div>
                <div className="sidebar-about">
                    <p style={{ fontSize: "16px", color: "#fff" }}>{name}</p>
                    <p style={{ fontSize: "12px", color: "#fff" }}>{username}</p>
                </div>
            </div>
        </div>
    )
}