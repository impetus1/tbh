import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
const styles = {
  card: {
    position: 'relative',
    width: '350px',
    color: 'red'
    //borderStyle: 'solid',
    //borderColor: 'yellowgreen'
    //boxShadow: 'rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px'
  },
  cardHeader: {
    paddingBottom: '40px'
  }
}

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }
 
  render() {
    return (
      <Card className="container" style={{borderWidth: 0}}>
        <CardTitle title="Welcome to Tampa Bay Harvest" subtitle="Welcome Home." />
          {Auth.isUserAuthenticated() ? (
            <CardText style={{ fontSize: '16px', color: 'green' }}>Hey, you're logged in!!</CardText>
          ) : (
            <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in. sadface</CardText>
          )}
      </Card>
      
      
    )
  }
};

export default HomePage;
