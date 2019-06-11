import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
    render() {
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        return (
                            <li key={badge.id} className="BadgesListItem">
                                <img
                                    src={badge.avatarUrl}
                                    alt="Avatar"
                                    className="BadgesListItem__avatar"
                                />

                                <div className="BadgesListItem__info">
                                    <p className="BadgesListItem__name">
                                        {badge.firstName} {badge.lastName}
                                    </p>

                                    <p className="BadgesListItem__twitter">
                                        @{badge.twitter}
                                    </p>

                                    <p className="BadgesListItem__jobTitle">
                                        {badge.jobTitle}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;
