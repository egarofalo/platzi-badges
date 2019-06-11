import React from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
    state = {
        data: [
            {
                id: "Badge01",
                firstName: "Edgardo",
                lastName: "Garofalo",
                twitter: "edgardogarofalo",
                avatarUrl:
                    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar",
                jobTitle: "Desarrollador FullStack",
                email: "egarofalo83@gmail.com"
            },
            {
                id: "Badge02",
                firstName: "Pablo",
                lastName: "Garofalo",
                twitter: "pablogarofalo",
                avatarUrl:
                    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro",
                jobTitle: "Dr. en economía",
                email: "pgarofalo2004@gmail.com"
            },
            {
                id: "Badge03",
                firstName: "Federico",
                lastName: "Parizi",
                twitter: "fparizi",
                avatarUrl:
                    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash",
                jobTitle: "Desarrollador FullStack",
                email: "fedeparizi@gmail.com"
            }
        ]
    };

    render() {
        return (
            <div>
                <Navbar />

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges_conf-logo"
                                src={confLogo}
                                alt="Conf Logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <a href="/badges/new" className="btn btn-primary">
                            New Badge
                        </a>
                    </div>

                    <div className="Badges__list">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Badges;
