import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//Components
import EmployerList from './components/EmployerList';
import EducationList from './components/EducationList';

//Apollo Client setup
const client = new ApolloClient({
  uri:"http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="background-image"></div>
      <div id="page-wrapper">
        <div id="page-header">
          <h1>Collin Bull</h1>
          <div id="download-button">
            <a href="./images/collin_cv.pdf" download><i className="fa fa-download"></i> Download CV</a>
          </div>
          <ul id="contact-info">
            <li>07519 551240</li>
            <li><a href="mailto:collinjbull@gmail.com">collinjbull@gmail.com</a></li>
          </ul>
          <p>Note: I have legal right to work in the UK and do not require visa sponsorship</p>
        </div>
        <div id="main">
          <EmployerList/>
          <EducationList/>
        </div>
        <p id="footer">cjbc 2020</p>
      </div>
    </ApolloProvider>
  );
}

export default App;
