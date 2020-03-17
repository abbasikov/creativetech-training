import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import asyncComponent from '../../components/AsyncComponent';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import VerticalSidebarContainer from '../VerticalSidebarContainer/VerticalSidebarContainer';
import { getFromSessionStorage } from '../../lib/browserStorage';
import { setAuth, handleError } from '../../actions';

const AsyncDashboardContainer = asyncComponent(() =>
  import('../../containers/DashboardContainer/DashboardContainer')
);

const AsyncClustersContainer = asyncComponent(() =>
  import('../../containers/ClustersContainer/ClustersContainer')
);

const AsyncApplicationsContainer = asyncComponent(() =>
  import('../../containers/ApplicationsContainer/ApplicationsContainer')
);

const AsyncCloudProvidersContainer = asyncComponent(() =>
  import('../../containers/CloudProvidersContainer/CloudProvidersContainer')
);

const AsyncSettingsContainer = asyncComponent(() =>
  import('../../containers/SettingsContainer/SettingsContainer')
);

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimmed: false,
      visible: true
    };
  }

  componentWillMount() {
    let session = getFromSessionStorage('currentSession');
    if (session) {
      let currentSession = JSON.parse(session);
      this.props.setAuth(currentSession);
    }
  }

  componentDidMount() {
    // let savedMenu = getFromSessionStorage('active-vertical-menu');
    // if (savedMenu) {
    //   let goToPath = `/home/${savedMenu}`;
    //   if (this.props.history.location.pathname !== goToPath) {
    //     this.props.history.push(goToPath);
    //   }
    // } else {
    //   this.props.history.push('/home/dashboard');
    // }
  }

  render() {
    //const { dimmed, visible } = this.state;

    return (
      <div style={{ height: '100%' }} className="HomeContainer">
        <Grid padded className="tablet computer only">
          <HeaderContainer {...this.props} />
        </Grid>
        <Grid padded>
          <Grid.Column
            id="sidebar"
            tablet={3}
            computer={2}
            only="tablet computer"
          >
            <VerticalSidebarContainer {...this.props} />
          </Grid.Column>
          <Grid.Column id="content" tablet={13} computer={14} floated="right">
            <Route
              path={'/home/dashboard'}
              component={AsyncDashboardContainer}
            />
            <Route path={'/home/clusters'} component={AsyncClustersContainer} />
            <Route
              path={'/home/applications'}
              component={AsyncApplicationsContainer}
            />
            <Route
              path={'/home/cloudproviders'}
              component={AsyncCloudProvidersContainer}
            />
            <Route path={'/home/settings'} component={AsyncSettingsContainer} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentSession: state.currentSession,
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {
    setAuth,
    handleError
  }
)(HomeContainer);
