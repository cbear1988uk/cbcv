import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//Components
import EmployerList from './components/EmployerList';

//Apollo Client setup
const client = new ApolloClient({
  uri:"http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="page-wrapper">
        <div id="page-header">
          <h1>Collin Bull</h1>
          <p>Note: I have legal right to work in the UK and do not require visa sponsorship</p>
        </div>
        <div id="main">
          <EmployerList/>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
