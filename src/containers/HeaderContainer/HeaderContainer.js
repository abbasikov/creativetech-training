import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logout, whoAmI } from '../../actions';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'messages'
    };
  }

  componentDidMount() {
    this.props.whoAmI();
  }

  render() {
    // const { activeItem } = this.state;
    return (
      <Menu borderless inverted fluid fixed={'top'}>
        <Menu.Item>
          <Link to={'/home/dashboard'}>
            <Icon name="mixcloud" circular />
            Cloudnostic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Dropdown item simple text="Profile">
            <Dropdown.Menu>
              <Dropdown.Item>
                Hello, {this.props.currentUser.fullName}
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  this.props.logout(this.props.history);
                }}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { logout, whoAmI }
)(HeaderContainer);
