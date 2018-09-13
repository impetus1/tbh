import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Heyq <strong>{user.name}</strong>!<br />{secretData}</CardText>}
  </Card>
);
const DashboardPage = () => (
	<Card className="container">
		<CardTitle title="Dashboard Page" subtitle="This Is the Dashboard page ."/>
		
	</Card>
);


Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard && DashboardPage;
