const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

// dummy data
var employers = [
  {name: 'Ofgem', location: 'Glasgow, Scotland', positionHeld: 'Junior Developer',
workDate: 'July 2019 - April 2020', description: 'blah blah blah', id: '1'}
];

const EmployerType = new GraphQLObjectType({
  name: 'Employer',
  fields: () => ({
    name: {type: GraphQLString},
    location: {type: GraphQLString},
    positionHeld: {type: GraphQLString},
    workDate: {type: GraphQLString},
    description: {type: GraphQLString},
    id: {type: GraphQLID}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    employer:{
      type: EmployerType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(employers, {id: args.id});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
