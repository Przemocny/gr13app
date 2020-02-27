import React from 'react';
import HomePage from './pages/Home';
import {HashRouter as Router, Route, Switch, Link, Redirect, withRouter} from 'react-router-dom';

import ReduxComponent from './redux-app/ReduxComponent'

const PageNotFound = () => {
  return <div>404 - page not found</div>;
};

// withRouter HOC - high order component



// client side
// url -> inny komponent -> render

// server side
// url -> server -> nowy komponent -> render


const Post = withRouter(
    (props) => {
    return <React.Fragment>
      <div>Post</div>
      <div>{props.match.params.postSlug}</div>
    <Link to="/">wróc do home</Link>

    </React.Fragment>;
  }
);

function MainApp () {
  return (
    <div className="app">

      <Router>
        <Switch>

          <Route path="/" exact>
           <ReduxComponent/>
          </Route>

          <Route path="/blog" exact>
            <HomePage />
          </Route>

          <Route path="/blog/:postSlug" exact>
            <Post />
          </Route>

          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MainApp;
