import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Lilly"
                                lastName="Kaufman"
                                avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                                jobTitle="Kickass senior dev"
                                twitter="richardkaufman"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;
