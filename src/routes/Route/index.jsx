import React from "react";
import PropTypes from "prop-types";
import { Route as ReactRouterDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

const Route = ({ component: Component, isPrivate, ...rest }) => {
  const { data } = useAuth();

  return (
    <ReactRouterDOMRoute
      {...rest} //eslint-disable-line
      render={({ location }) => {
        return isPrivate === !!data ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { location },
            }}
          />
        );
      }}
    />
  );
};

Route.propTypes = {
  component: PropTypes.elementType.isRequired,
  isPrivate: PropTypes.bool,
};

Route.defaultProps = {
  isPrivate: false,
};

export default Route;
