import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { login } from '../../actions';

class SignUpContainer extends Component {
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
      <Container className="SignUpContainer">
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" icon textAlign="center">
              <Icon name="mixcloud" circular />
              <Header.Content>Sign up to Cloudnostic</Header.Content>
            </Header>
            <Segment>
              <Form size="large">
                <Form.Input
                  fluid
                  icon="user outline"
                  iconPosition="left"
                  placeholder="Full Name"
                />
                <Form.Input
                  fluid
                  icon="mail outline"
                  iconPosition="left"
                  placeholder="Business email"
                />

                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  placeholder="Password"
                />

                <Form.Input
                  fluid
                  icon="building outline"
                  iconPosition="left"
                  placeholder="Company name"
                />

                <Form.Input
                  fluid
                  icon="mobile alternate"
                  iconPosition="left"
                  placeholder="Cell number"
                />

                <Button
                  primary
                  fluid
                  size="large"
                  onClick={this.onClickLogin}
                  loading={this.state.loginLoading}
                >
                  Sign Up
                </Button>

                {this.state.errorBoxMsg ? (
                  <Message negative> {this.state.errorBoxMsg}</Message>
                ) : null}
              </Form>
            </Segment>
            <Message>
              Already have account? <Link to="/">Sign In</Link>
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
)(SignUpContainer);
