const graphql = require('graphql');
const _ = require('lodash');
const Employer = require('../models/employer');
const Education = require('../models/education');
const GeneralInfo = require('../models/generalInfo');

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

const EducationType = new GraphQLObjectType({
  name: 'Education',
  fields: () => ({
    name: {type: GraphQLString},
    location: {type: GraphQLString},
    dateAttended: {type: GraphQLString},
    description: {type: GraphQLString},
    achievements: {type: GraphQLString},
    id: {type: GraphQLID}
  })
});

const GeneralInfoType = new GraphQLObjectType({
  name: 'GeneralInfo',
  fields: () => ({
      title: {type: GraphQLString},
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
        return Employer.findById(args.id);
      }
    },
    employers:{
      type: new GraphQLList(EmployerType),
      resolve(parents, args){
        return Employer.find({});
      }
    },
    education:{
      type: EducationType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return Education.findById(args.id);
      }
    },
    educations:{
      type: new GraphQLList(EducationType),
      resolve(parent, args){
        return Education.find({})
      }
    },
    generalInfo:{
      type: GeneralInfoType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return GeneralInfo.findById(args.id);
      }
    },
    generalInfos:{
      type: new GraphQLList(GeneralInfoType),
      resolve(parent, args){
        return GeneralInfo.find({})
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
    },
    addEducation: {
      type: EducationType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        location: {type: new GraphQLNonNull(GraphQLString)},
        dateAttended: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        achievements: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parent, args){
        let education = new Education({
          name: args.name,
          location: args.location,
          dateAttended: args.dateAttended,
          description: args.description,
          achievements: args.achievements
        });
        return education.save();
      }
    },
    addGeneralInfo: {
      type: GeneralInfoType,
      args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parent, args){
        let generalInfo = new GeneralInfo({
          title: args.title,
          description: args.description
        });
        return generalInfo.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
