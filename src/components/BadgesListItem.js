import React from "react";
import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

function BadgesListItem(props) {
	return (
		<React.Fragment>
			<Gravatar
				className="BadgesListItem__avatar"
				email={props.badge.email}
			/>

			<div className="BadgesListItem__info">
				<p className="BadgesListItem__name">
					{props.badge.firstName} {props.badge.lastName}
				</p>

				<p className="BadgesListItem__twitter">
					@{props.badge.twitter}
				</p>

				<p className="BadgesListItem__jobTitle">
					{props.badge.jobTitle}
				</p>
			</div>
		</React.Fragment>
	);
}

export default BadgesListItem;
