import { getCustomer, getCustomers } from './db';

export const queries = {
  customer: (_, id) => getCustomer(id),
  customers: () => getCustomers()
}
