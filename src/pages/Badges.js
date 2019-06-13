import React from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import Link from "react-router-dom/Link";

class Badges extends React.Component {
    constructor(props) {
        super(props);
        console.log("1. constructor()");

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        console.log("3. componentDidMount()");

        this.timeoutId = setTimeout(() => {
            this.setState({
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
            });
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("5. componentDidUpdate()");

        console.log({
            prevProps,
            prevState
        });

        console.log({
            props: this.props,
            state: this.state
        });
    }

    componentWillUnmount() {
        console.log("6. componentWillUnmount()");
        clearTimeout(this.timeoutId);
    }

    render() {
        console.log("2/4. render()");

        return (
            <React.Fragment>
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
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
