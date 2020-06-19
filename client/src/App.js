import React from 'react';
import ApolloClient from 'apollo-bost';
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
      <div className="main">
        <h1>Collin Bull</h1>
        <EmployerList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
