import React, { Component } from "react";

class BadgeForm extends Component {
    handleClick = e => {
        console.log("Button was clicked");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was submitted");
    };

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            onChange={this.props.onChange}
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            onChange={this.props.onChange}
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.props.onChange}
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            onChange={this.props.onChange}
                            value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            className="form-control"
                            type="text"
                            name="twitter"
                            onChange={this.props.onChange}
                            value={this.props.formValues.twitter}
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={this.handleClick}
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;
