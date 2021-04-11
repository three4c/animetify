import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export const anisonProgramType = new GraphQLObjectType({
  name: 'anisonProgram',
  fields: {
    animeClassification: {
      type: GraphQLString,
    },
    animeName: {
      type: GraphQLString,
    },
    animeDescription: {
      type: GraphQLString,
    },
    broadcastOrder: {
      type: GraphQLString,
    },
    musicId: {
      type: GraphQLInt,
    },
    musicName: {
      type: GraphQLString,
    },
    artistName: {
      type: GraphQLString,
    },
    broadcastStartDate: {
      type: GraphQLString,
    },
  },
});
