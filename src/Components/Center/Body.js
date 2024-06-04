import React from "react";

export default function CenterBody({ profile, profileName, username, content, post, likes, comments, share, moreCon }) {
    return (
        <>
            <div className="centerBody">
                <div className="centerBody-inner">
                    <div className="centerBody-inner-upper">
                        <div className="centerBody-inner-upper-in profile">
                            <div className="about-account">
                                <div className="profile-picture">
                                    <img src={profile} alt="Profie"></img>
                                </div>
                                <div className="about">
                                    <div className="name"><p>{profileName}</p></div>
                                    <div className="username"><p>{username}</p></div>
                                </div>
                            </div>
                            <div className="dot-dot-dot">
                                <div className="upper-dot dott"></div>
                                <div className="middle-dot dott"></div>
                                <div className="lower-dot dott"></div>
                            </div>
                        </div>
                        <div className="centerBody-inner-upper-in content">
                            <p>{content} <span>{moreCon}</span></p>
                        </div>
                        <div className="centerBody-inner-upper-in images">
                            <img src={post} alt="Profie"></img>
                        </div>
                    </div>
                </div>
                <div className="centerBody-inner-lower">
                    <div className="feedback">
                        <div className="feed-back likes">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="23.52" height="21.768" viewBox="0 0 23.52 21.768">
                                <path id="heart" d="M23.363,5.427a7.172,7.172,0,0,0-9.6-.785A7.162,7.162,0,0,0,3.774,5.8a7.939,7.939,0,0,0,.393,10.479l7.3,7.633a3.174,3.174,0,0,0,4.587,0l7.3-7.633A7.933,7.933,0,0,0,23.363,5.427ZM21.7,14.582,14.4,22.2a.868.868,0,0,1-1.27,0l-7.3-7.658a5.429,5.429,0,0,1,0-7.363,4.876,4.876,0,0,1,7.058,0,1.142,1.142,0,0,0,1.67,0,4.876,4.876,0,0,1,7.058,0,5.429,5.429,0,0,1,.094,7.363Z" transform="translate(-1.988 -3.121)" fill="#101010" />
                            </svg></div>
                            <p>{likes}</p>
                        </div>
                        <div className="feed-back comments">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="22.024" height="22.018" viewBox="0 0 22.024 22.018">
                                <path id="comment" d="M25.564,20.848a10.889,10.889,0,1,0-4.716,4.718l4.69,1.172a.989.989,0,0,0,1.2-1.2Zm-2.012.109.865,3.461-3.461-.866a1,1,0,0,0-.723.1,8.915,8.915,0,1,1,3.417-3.417A.984.984,0,0,0,23.553,20.957Z" transform="translate(-4.875 -4.875)" fill="#101010" stroke="#101010" stroke-width="0.25" />
                            </svg></div>
                            <p>{comments}</p>
                        </div>
                        <div className="feed-back share">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                <path id="share" d="M21.707,11.293l-8-8A1,1,0,0,0,12,4V7.545A11.015,11.015,0,0,0,2,18.5V20a1,1,0,0,0,1.784.621,11.456,11.456,0,0,1,7.887-4.049c.05-.006.175-.016.329-.026V20a1,1,0,0,0,1.707.707l8-8a1,1,0,0,0,0-1.414ZM14,17.586V15.5a1,1,0,0,0-1-1c-.255,0-1.3.049-1.562.085a14.005,14.005,0,0,0-7.387,2.948A9.013,9.013,0,0,1,13,9.5a1,1,0,0,0,1-1V6.414L19.586,12Z" transform="translate(-2 -3)" />
                            </svg></div>
                            <p>{share}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}