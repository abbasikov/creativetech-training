import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Segment } from 'semantic-ui-react';

class SettingsContainer extends Component {
  render() {
    return (
      <Grid padded>
        <Grid.Row>
          <Header dividing size="huge" as="h1">
            Settings
          </Header>
        </Grid.Row>
        <Grid.Row textAlign="center">
          <Grid.Column>
            <Segment>This is Settings section</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(SettingsContainer);
