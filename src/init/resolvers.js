import { queries as customerQueries } from '../fetching/customer/queries';

export const resolvers = {
  Query: {
    ...customerQueries
  },
};
