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
          <div id="skill-content" key={skill.id}>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
            <div id="tags" className="grid-container">
                <div className="grid-item">Ruby</div>
                <div className="grid-item">JavaScript</div>
                <div className="grid-item">Java</div>
                <div className="grid-item">C#</div>
                <div className="grid-item">css</div>
                <div className="grid-item">HTML</div>
                <div className="grid-item">node.js</div>
                <div className="grid-item">React</div>
                <div className="grid-item">Vue</div>
                <div className="grid-item">MongoDB</div>
                <div className="grid-item">SQL</div>
                <div className="grid-item">Agile</div>
                <div className="grid-item">Azure DevOps</div>
                <div className="grid-item">ASP.Net</div>
                <div className="grid-item">Selenium</div>
            </div>
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
