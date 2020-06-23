import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getGeneralInfoQuery = gql`
  {
    generalInfos{
      title
      description
      id
    }
  }
`

class GeneralInfoList extends Component{
  displayGeneralInfos(){
    var data = this.props.data;
    if(data.loading){
      return(<div>Loading Info..</div>);
    }else{
      return data.generalInfos.map(generalInfo =>{
        return(
          <div id="general-info-content" key={generalInfo.id}>
            <h2>{generalInfo.title}</h2>
            <p>{generalInfo.description}</p>
          </div>
        );
      })
    }
  }
  render(){
    return(
      <div id="cv-content">
        <div id="headshot-image"></div>
        <ul id="about-me-list">
          {this.displayGeneralInfos()}
        </ul>
      </div>
    );
  }
}

export default graphql(getGeneralInfoQuery)(GeneralInfoList);
