import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
	render() {
		if (this.props.badges.length === 0) {
			return (
				<div>
					<h3>No badges were found</h3>
					<Link className="btn btn-primary" to="/badges/new">
						Create new badge
					</Link>
				</div>
			);
		}

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
