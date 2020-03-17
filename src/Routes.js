import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';

const AsyncHomePage = asyncComponent(() =>
  import('./containers/HomeContainer/HomeContainer')
);
const AsyncLoginPage = asyncComponent(() =>
  import('./containers/LoginContainer/LoginContainer')
);

const AsyncSignUpPage = asyncComponent(() =>
  import('./containers/SignUpContainer/SignUpContainer')
);

const Routes = () => (
  <HashRouter>
    <div style={{ height: '100vh' }}>
      <Fragment>
        <Route path={'/'} exact component={AsyncLoginPage} />
        <Route path={'/signup'} exact component={AsyncSignUpPage} />
        <Route path={'/home'} component={AsyncHomePage} />
      </Fragment>
    </div>
  </HashRouter>
);

export default Routes;
