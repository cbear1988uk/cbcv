import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getEducationQuery = gql`
  {
    educations{
      name
      location
      dateAttended
      description
      achievements
      id
    }
  }
`

class EducationList extends Component{
  displayEducations(){
    var data = this.props.data;
    if(data.loading){
      return(<div>Loading Education..</div>);
    }else{
      return data.educations.map(education => {
        return(
          <div id="education-content" key={education.id}>
            <h2>{education.name}</h2>
            <li>{education.location}</li>
            <li>{education.dateAttended}</li>
            <p>{education.description}</p>
            <h2>Achievements:</h2>
            <p>{education.achievements}</p>
          </div>
        );
      })
    }
  }
  render(){
    return(
      <div id="cv-content">
        <h3>Education</h3>
        <ul id="education-list">
          {this.displayEducations()}
        </ul>
      </div>
    );
  }
}

export default graphql(getEducationQuery)(EducationList);
