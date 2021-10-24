import React from 'react';

const ProfileStatistic = ({ value, title }) => {
    return (
        <div className="profile-heading">
            <div className="profile-statistic">
                <strong>
                    {value}
                </strong>
                <br />
                {title}
            </div>
        </div>
    )
}

export default ProfileStatistic;
