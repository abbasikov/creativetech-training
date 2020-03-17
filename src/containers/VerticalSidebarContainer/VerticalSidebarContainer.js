import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  saveToSessionStorage,
  getFromSessionStorage,
  removeFromSessionStorage
} from '../../lib/browserStorage';

class VerticalSidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'dashboard'
    };
  }

  componentWillMount() {
    let savedMenu = getFromSessionStorage('active-vertical-menu');
    if (savedMenu) {
      this.setState(state => {
        state.activeMenu = savedMenu;
        return state;
      });
    } else {
      saveToSessionStorage('active-vertical-menu', this.state.activeMenu);
    }
  }

  componentWillUnmount() {
    removeFromSessionStorage('active-vertical-menu');
  }

  onClickMenuItem = (event, data) => {
    saveToSessionStorage('active-vertical-menu', data.name);
    this.setState(state => {
      state.activeMenu = data.name;
      return state;
    });
    let goToPath = `/home/${data.name}`;
    if (this.props.history.location.pathname !== goToPath) {
      this.props.history.push(goToPath);
    }
  };

  render() {
    let { activeMenu } = this.state;
    return (
      <Menu vertical fluid text>
        <Menu.Item
          as="a"
          name="dashboard"
          active={activeMenu === 'dashboard'}
          onClick={this.onClickMenuItem}
        >
          <Icon name="dashboard" />
          &nbsp;&nbsp;Dashboard
        </Menu.Item>
        <Menu.Item
          as="a"
          name="clusters"
          active={activeMenu === 'clusters'}
          onClick={this.onClickMenuItem}
        >
          <Icon name="sitemap" />
          &nbsp;&nbsp;Clusters
        </Menu.Item>
        <Menu.Item
          as="a"
          name="applications"
          active={activeMenu === 'applications'}
          onClick={this.onClickMenuItem}
        >
          <Icon name="grid layout" />
          &nbsp;&nbsp;Applications
        </Menu.Item>
        <Menu.Item
          as="a"
          name="cloudproviders"
          active={activeMenu === 'cloudproviders'}
          onClick={this.onClickMenuItem}
        >
          <Icon name="cloud" />
          &nbsp;&nbsp;Cloud Providers
        </Menu.Item>
        <Menu.Item
          as="a"
          name="settings"
          active={activeMenu === 'settings'}
          onClick={this.onClickMenuItem}
        >
          <Icon name="settings" />
          &nbsp;&nbsp;Settings
        </Menu.Item>
        <Menu.Item as="a" name="settings">
          <Icon name="settings" />
          &nbsp;&nbsp;TBD
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(VerticalSidebarContainer);
