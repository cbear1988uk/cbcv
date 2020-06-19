import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getEmployersQuery = gql`
  {
    employers{
      name
      location
      positionHeld
      workDate
      description
    }
  }
`

class EmployerList extends Component{
  render(){
    return(
      <div>
        <ul id="employer-list">
          <li>Employer Name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getEmployersQuery)(EmployerList);
