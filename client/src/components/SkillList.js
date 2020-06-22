import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getSkillsQuery = gql`
  {
    skills{
      title
      description
      id
    }
  }
`

class SkillList extends Component{
  displaySkills(){
    var data = this.props.data;
    if(data.loading){
      return(<div>Loading Skills..</div>);
    }else{
      return data.skills.map(skill =>{
        return(
          <div>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        );
      })
    }
  }
  render(){
    return(
      <div id="cv-content">
        <ul id="skill-list">
          {this.displaySkills()}
        </ul>
      </div>
    );
  }
}

export default graphql(getSkillsQuery)(SkillList);
