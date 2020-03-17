import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Segment } from 'semantic-ui-react';

class ApplicationsContainer extends Component {
  render() {
    return (
      <Grid padded>
        <Grid.Row>
          <Header dividing size="huge" as="h1">
            Applications
          </Header>
        </Grid.Row>
        <Grid.Row textAlign="center">
          <Grid.Column>
            <Segment>This is Applications section</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(ApplicationsContainer);
