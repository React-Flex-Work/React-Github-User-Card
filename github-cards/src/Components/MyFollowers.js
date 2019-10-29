import React from 'react';
import MyFollowersCard from './MyFollowersCard';

function MyFollowers({ myFollowers }) {
    return (
        <div className="followers">
            {myFollowers.map(eachFollower =>
                <MyFollowersCard eachFollower={eachFollower} />
            )}
        </div>
    )
}

export default MyFollowers;