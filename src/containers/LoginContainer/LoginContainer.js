import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
  Checkbox
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { login } from '../../actions';
import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage
} from '../../lib/browserStorage';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginLoading: false,
      errorBoxMsg: '',
      email: '',
      password: '',
      rememberMe: false
    };
  }

  onClickLogin = () => {
    this.showErrorBox('');
    if (!_.isEmpty(this.state.email) && !_.isEmpty(this.state.password)) {
      this.toggleLoginLoading();
      this.checkForRememberMe();
      this.props.login(this.state.email, this.state.password);
    } else {
      this.showErrorBox('Email or password cannot be blank');
    }
  };

  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps.loginPageErrorMsg)) {
      this.toggleLoginLoading();
      this.showErrorBox(nextProps.loginPageErrorMsg);
    }
  }

  checkForRememberMe = () => {
    if (this.state.rememberMe) {
      saveToLocalStorage('email', this.state.email);
    } else {
      removeFromLocalStorage('email');
    }
  };

  componentDidMount() {
    let emailFromStorage = getFromLocalStorage('email');
    let passwordFromStorage = getFromLocalStorage('password');
    if (!_.isEmpty(emailFromStorage)) {
      this.setState(state => {
        state.email = emailFromStorage;
        state.password = passwordFromStorage;
        state.rememberMe = true;
        return state;
      });
    }

    if (!_.isEmpty(this.props.loginPageErrorMsg)) {
      this.showErrorBox(this.props.loginPageErrorMsg);
    }
  }

  toggleLoginLoading = () => {
    this.setState(state => {
      state.loginLoading = !state.loginLoading;
      return state;
    });
  };

  showErrorBox = msg => {
    this.setState(state => {
      state.errorBoxMsg = msg;
      return state;
    });
  };

  onChangeEmail = (event, data) => {
    this.setState(state => {
      state.email = data.value;
      return state;
    });
  };

  onChangePassword = (event, data) => {
    this.setState(state => {
      state.password = data.value;
      return state;
    });
  };

  onChangeRememberMe = (event, data) => {
    this.setState(state => {
      state.rememberMe = data.checked;
      return state;
    });
  };

  render() {
    return (
      <Container className="LoginContainer">
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" icon textAlign="center">
              <Icon name="mixcloud" circular />
              <Header.Content>Sign in to Cloudnostic</Header.Content>
            </Header>
            <Segment>
              <Form size="large">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />

                <Form.Field>
                  <Checkbox
                    checked={this.state.rememberMe}
                    onChange={this.onChangeRememberMe}
                    label="Remember me"
                  />
                </Form.Field>

                <Button
                  primary
                  fluid
                  size="large"
                  onClick={this.onClickLogin}
                  loading={this.state.loginLoading}
                >
                  Login
                </Button>

                {this.state.errorBoxMsg ? (
                  <Message negative> {this.state.errorBoxMsg}</Message>
                ) : null}
              </Form>
            </Segment>
            <Message>
              Not registered yet? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentSession: state.currentSession,
    loginPageErrorMsg: state.loginPageErrorMsg
  };
};

export default connect(
  mapStateToProps,
  {
    login
  }
)(LoginContainer);
