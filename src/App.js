import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

// const Charts = React.lazy(() => import('./components/Charts/Charts'));
// const Stats = React.lazy(() => import('./components/Stats/Stats'));
const Main = React.lazy(() => import('./components/Main/Main'));

const routes = [
  {
    path: "/", name: "Main", Component: () =>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
  },
  // {
  //   path: "/stats", name: "Stats", Component: () =>
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <Stats crumbs={crumbs} />
  //     </Suspense>

  // },
  // {
  //   path: "/stats/:id",
  //   name: null,
  //   Component: () =>
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <Charts crumbs={crumbs} />
  //     </Suspense>

  // }
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
                  <div >
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
