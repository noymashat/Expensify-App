// Higher Order Component - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state
import React from "react";
import ReactDom from "react-dom";

const Info = props => (
	<div>
		<h1>Info</h1>
		<p>the info is: {props.info}</p>
	</div>
);

const withAdminWarning = WrappedComponent => {
	return props => (
		<div>
			{props.isAdmin && <p>This is private info, please don't share.</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = WrappedComponent => {
	return props => (
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>No Authentication</p>
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
ReactDom.render(
	<AuthInfo isAuthenticated={false} info="These are the details" />,
	document.getElementById("app")
);
