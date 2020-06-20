const graphql = require('graphql');
const _ = require('lodash');
const Employer = require('../models/employer');

const {GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const EmployerType = new GraphQLObjectType({
  name: 'Employer',
  fields: () => ({
    name: {type: GraphQLString},
    location: {type: GraphQLString},
    positionHeld: {type: GraphQLString},
    workDate: {type: GraphQLString},
    id: {type: GraphQLID},
    description: {type: GraphQLString},
    description2: {type: GraphQLString},
    description3: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    employer:{
      type: EmployerType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return Employer.findById(args.id);
      }
    },
    employers:{
      type: new GraphQLList(EmployerType),
      resolve(parents,args){
        return Employer.find({});
      }
    }
  }
});

//C.R.U.D.
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addEmployer: {
      type: EmployerType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        location: {type: new GraphQLNonNull(GraphQLString)},
        positionHeld: {type: new GraphQLNonNull(GraphQLString)},
        workDate: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        description2: {type: GraphQLString},
        description3: {type: GraphQLString}
      },
      resolve(parent, args){
        let employer = new Employer({
          name: args.name,
          location: args.location,
          positionHeld: args.positionHeld,
          workDate: args.workDate,
          description: args.description,
          description2: args.description2,
          description3: args.description3
        });
        return employer.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
