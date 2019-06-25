import React from "react";

import "./styles/PageError.css";

function PageError(props) {
	return <h3 className="PageError">{props.error.message}</h3>;
}

export default PageError;
