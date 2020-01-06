import React, { ComponentType } from "react";
import { Route } from "react-router-dom";

interface Props {
  component: ComponentType<any>;
  exact?: boolean;
  path: string;
  routes?: { path: string; component: ComponentType<any> }[];
}

const RouteWithSubRoutes: React.FC<Props> = ({
  component: Component,
  exact,
  path,
  routes
}) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <Component {...props} routes={routes} />
    )}
  />
);

export default RouteWithSubRoutes;
