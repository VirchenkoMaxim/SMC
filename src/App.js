import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Stats from './components/Stats/Stats';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import Charts from './components/Charts/Charts';
import users from './api/Users.json'
import user_statistic from './api/Statistic.json'

const routes = [
  { path: "/", name: "Main", Component: () => <Main /> },
  {
    path: "/stats", name: "Stats", Component: () =>
      <Stats users={users} crumbs={crumbs} user_statistic={user_statistic} />
  },
  {
    path: "/stats/:id",
    name: null,
    Component: () =>
      <Charts users={users} crumbs={crumbs} user_statistic={user_statistic} />
  }
];

let crumbs;
function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(({ name, path, Component }, key) => (
            <Route exact path={path} key={key}
              render={props => {
                crumbs = routes
                  // Get all routes that contain the current one.
                  .filter(({ path }) => props.match.path.includes(path))
                  // Swap out any dynamic routes with their param values.
                  // E.g. "/pizza/:pizzaId" will become "/pizza/1"
                  .map(({ path, ...rest }) => ({
                    path: Object.keys(props.match.params).length
                      ? Object.keys(props.match.params).reduce(
                        (path, param) => path.replace(
                          `:${param}`, props.match.params[param]
                        ), path
                      )
                      : path,
                    ...rest
                  }));
                // console.log(`Generated crumbs for ${props.match.path}`);
                // crumbs.map(({ name, path }) => console.log({ name, path }));
                return (
                  <div className="p-8">
                    <Component {...props} />
                  </div>
                );
              }}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
