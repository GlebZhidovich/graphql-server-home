import { getCustomer } from './db';

export const queries = {
  customer: (_, id) => getCustomer(id)
}
