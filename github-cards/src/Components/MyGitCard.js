import React from 'react';

function MyGitCard(props) {
    return (
        <div className="my-card">
            <h1>{props.myCard.name}</h1>
            <h2>On Github as: {props.myCard.login}</h2>
            <img src={props.myCard.avatar_url} alt="my github pic" width="25%" key={props.myCard.id} />
            <div className="my-info">
                <p>Location: {props.myCard.location}</p>
                <p>Bio: {props.myCard.bio}</p>
                <p>Followers: {props.myCard.followers}</p>
                <p>Following: {props.myCard.following}</p>
                <div className="heat-map">
                    <h3>My 2019 Github Heat Map</h3>
                    <img src="http://ghchart.rshah.org/chards79" alt="Chards79's Github Heat Map" />
                </div>
                <a href={props.myCard.html_url}>Check out my Page!</a>
            </div>
        </div>
    )
}

export default MyGitCard;