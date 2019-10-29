import React from 'react';

function MyFollowersCard(props) {
    console.log(props);
    const { eachFollower: { login, avatar_url, id, html_url } } = props
    return (
        <div className="follower-card">
            <h3>{login}</h3>
            <img src={avatar_url} alt="what my followers look like" width="10%" key={id} />
            <a href={html_url}>Visit Me!</a>
        </div>
    )
}

export default MyFollowersCard;