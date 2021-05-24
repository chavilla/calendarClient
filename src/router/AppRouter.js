import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import CalendarScreen from "../components/calendar/CalendarScreen";
import NoFound from "../components/nomatch/NoFound";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={ LoginScreen } />
          <Route exact path="/" component={ CalendarScreen } />
		  <Route exact path="*" component={ NoFound } />
		  <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
