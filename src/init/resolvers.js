import { queries as customerQueries } from '../fetching/customer/queries';
import { mutations as customerMutations } from '../fetching/customer/mutations';

export const resolvers = {
  Query: {
    ...customerQueries
  },
  Mutation: {
    ...customerMutations
  }
};
