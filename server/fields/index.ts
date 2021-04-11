import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';
import { getAnisonProgramList } from './resolvers';
import { anisonProgramType } from './types';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'anisonProgramList',
    fields: {
      anisonProgramList: {
        type: GraphQLList(anisonProgramType),
        args: {
          title: { type: GraphQLString },
          year: { type: GraphQLString },
          season: { type: GraphQLString },
          song: { type: GraphQLString },
          all: { type: GraphQLBoolean },
        },
        resolve: (_, { title, year, season, song, all }) =>
          getAnisonProgramList(title, year, season, song, all),
      },
    },
  }),
});
