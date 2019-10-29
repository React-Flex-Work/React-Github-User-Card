import React from 'react';

function MyGitCard(props) {
    return (
        <div className="my-card">
            <h2>{props.myCard.name}</h2>
            <h3>On Github as: {props.myCard.login}</h3>
            <img src={props.myCard.avatar_url} alt="my github pic" width="25%" key={props.myCard.id} />
            <div className="my-info">
                <p>Location: {props.myCard.location}</p>
                <p>Bio: {props.myCard.bio}</p>
                <p>Followers: {props.myCard.followers}</p>
                <p>Following: {props.myCard.following}</p>
                <a href={props.myCard.html_url}>Check out my Page!</a>
            </div>
        </div>
    )
}

export default MyGitCard;