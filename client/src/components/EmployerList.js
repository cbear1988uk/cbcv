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
      description2
      description3
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
            <h2>{employer.name}</h2>
            <li>{employer.location}</li>
            <li>{employer.positionHeld} - {employer.workDate}</li>
            <p>{employer.description}</p>
            <p>{employer.description2}</p>
            <p>{employer.description3}</p>
          </div>
        );
      })
    }
  }
  render(){
    return(
      <div id="cv-content">
        <ul id="employer-list">
          {this.displayEmployers()}
        </ul>
      </div>
    );
  }
}

export default graphql(getEmployersQuery)(EmployerList);
