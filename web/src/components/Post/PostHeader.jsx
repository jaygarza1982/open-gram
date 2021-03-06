import React from 'react'

export default function PostHeader({picURL, username}) {
    return (
        <div className="post-header-grid">
            <img className="profile-pic" src={picURL} alt={`Profile picture of ${username}`} />
            <div className="post-username">{username}</div>
        </div>
    )
}
