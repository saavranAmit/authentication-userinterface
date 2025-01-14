import React, { useEffect, useState } from "react";
import Navbar from "../sidebar/Sidebar";
import { NavLink } from "react-router-dom";
import SearchBar from "../subComponents/serchbar";
import CenterBody from "../Center/Body";
import { database, database2 } from "../subComponents/Database/database";
import SideBar from "../subComponents/SideBar";

export default function Main() {
    const [databse, setDatabase] = useState()
    const [databse2, setDatabase2] = useState()
    useEffect(() => {
        setDatabase(database)
    }, [])

    useEffect(() => {
        setDatabase2(database2)
    }, [])
    return (
        <div className="main-container">
            <div className="left-container">
                <div className="left-upper">
                    <div className="upper-logo"><h1>LOGO</h1></div>
                </div>
                <div className="left-lower">
                    <div className="left-lower-upper">
                        <Navbar />
                    </div>
                    <div className="left-lower-lower" ><div className="logOut"><NavLink to='/home'><div className='iconsss'><svg xmlns="http://www.w3.org/2000/svg" width="18.894" height="14.5" viewBox="0 0 18.894 14.5">
                        <g id="logout" transform="translate(-1.25 -3.75)">
                            <path id="Path_30" data-name="Path 30" d="M13.114,11.909a.659.659,0,0,0-.659-.659H1.909a.659.659,0,1,0,0,1.318H12.455A.659.659,0,0,0,13.114,11.909Z" transform="translate(0 -0.909)" fill="#88c2bb" fill-rule="evenodd" />
                            <path id="Path_31" data-name="Path 31" d="M5.451,7.458a.659.659,0,0,0-.932,0L1.443,10.534a.659.659,0,0,0,0,.932l3.076,3.076a.659.659,0,0,0,.932-.932L2.841,11l2.61-2.61A.659.659,0,0,0,5.451,7.458Zm7.527-2.39A5.839,5.839,0,0,0,7.77,8.3.659.659,0,0,1,6.594,7.7,7.153,7.153,0,0,1,20.144,11a7.335,7.335,0,0,1-.257,1.931.659.659,0,1,1-1.272-.347A6.02,6.02,0,0,0,18.826,11,5.89,5.89,0,0,0,12.978,5.068ZM6.885,13.411a.659.659,0,0,1,.886.291,5.839,5.839,0,0,0,5.208,3.23,5.765,5.765,0,0,0,3.475-1.16.659.659,0,1,1,.791,1.054,7.083,7.083,0,0,1-4.266,1.424A7.157,7.157,0,0,1,6.594,14.3.659.659,0,0,1,6.885,13.411Z" transform="translate(0)" fill="#88c2bb" fill-rule="evenodd" />
                        </g>
                    </svg></div><p>Log Out</p></NavLink></div></div>
                </div>
            </div>
            <div className="center-container">
                <div className="center-upper">
                    <SearchBar />
                </div>
                <div className="scroll-content">
                    {database.map((data, i) => {
                        return (
                            <>
                                <div className="center-lower" key={i}>

                                    <CenterBody key={i} profile={data.profile} profileName={data.profileName} username={data.username} content={data.content} post={data.post} likes={data.likes} comments={data.comments} share={data.share} moreCon={data.moreCon} />


                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="right-container">
                <div className="right-upper">
                    <p>Become a Seller</p>
                </div>
                <div className="right-lower">
                    <div className="artist">
                        <p style={{ fontWeight: "600" }}>Artists</p>
                        <p style={{ color: "#8D8D8D" }}>Photographers</p>
                    </div>
                    <div className="right-loop">
                        {database2.map((data, i) => {
                            return (
                                <>
                                    <SideBar key={i} background={data.background} name={data.name} username={data.username} sideProfile={data.sideProfile} />
                                </>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}