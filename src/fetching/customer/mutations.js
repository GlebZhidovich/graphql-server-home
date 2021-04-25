import { addCustomer, updateCustomer, delCustomer } from './db';

export const mutations = {
  addCustomer: (_, data) => addCustomer(data),
  updateCustomer: (_, data) => updateCustomer(data),
  delCustomer: (_, data) => delCustomer(data)
}
