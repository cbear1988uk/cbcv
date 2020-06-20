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
      id
    }
  }
`

class EmployerList extends Component{
  displayEmployers(){
    var data = this.props.data;
    if(data.loading){
      return(<div>Loading Employers..</div>);
    }else{
      return data.employers.map(employer => {
        return(
          <div key={employer.id}>
            <li>{employer.name}, {employer.location}</li>
            <li>{employer.positionHeld} - {employer.workDate}</li>
            <li>{employer.description}</li>
          </div>
        );
      })
    }
  }
  render(){
    return(
      <div id="page-wrap">
        <ul id="employer-list">
          {this.displayEmployers()}
        </ul>
      </div>
    );
  }
}

export default graphql(getEmployersQuery)(EmployerList);
