import React from "react";
import { Switch, Route as ReactRouterDOMRoute } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import ViewNote from "../pages/ViewNote";
import ManageTags from "../pages/ManageTags";
import EditNote from "../pages/EditNote";
import CreateNote from "../pages/CreateNote";
import EditTag from "../pages/EditTags";
import Route from "./Route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route isPrivate path="/dashboard" component={Dashboard} />
      <ReactRouterDOMRoute path="/note">
        <Switch>
          <Route isPrivate path="/note/view/:noteId" component={ViewNote} />
          <Route isPrivate path="/note/edit/:noteId" component={EditNote} />
          <Route isPrivate path="/note/create" component={CreateNote} />
        </Switch>
      </ReactRouterDOMRoute>
      <ReactRouterDOMRoute path="/tags">
        <Switch>
          <Route isPrivate exact path="/tags" component={ManageTags} />
          <Route isPrivate path="/tags/edit" component={EditTag} />
        </Switch>
      </ReactRouterDOMRoute>
    </Switch>
  );
};

export default Routes;
