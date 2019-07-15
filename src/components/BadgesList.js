import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import BadgesListItem from "./BadgesListItem";

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState("");
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });

        setFilteredBadges(result);
    }, [badges, query]);

    return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    const filterSearchInput = (
        <div className="form-group">
            <label>Filter Badges</label>
            <input
                type="text"
                value={query}
                className="form-control"
                onChange={e => {
                    setQuery(e.target.value);
                }}
            />
        </div>
    );

    if (filteredBadges.length === 0) {
        return (
            <>
                {filterSearchInput}
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            </>
        );
    }

    return (
        <div className="BadgesList">
            {filterSearchInput}
            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
                    return (
                        <li key={badge.id} className="BadgesListItem">
                            <Link
                                className="text-reset text-decoration-none"
                                to={`/badges/${badge.id}`}
                            >
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BadgesList;
