import { nanoid } from 'nanoid'

let db = [
  {
    'id': 'S2D3F2D321L',
    'name': 'Oliver',
    'age': 21,
    'language': 'en',
    'city': 'London',
    'gender': 'male'
  }
];

export const getCustomer = ({ id }) => {
  return db.find(customer => customer.id === id);
}

export const getCustomers = () => db;

export const addCustomer = ({ customer }) => {
  const id = nanoid();
  customer.id = id;
  db.push(customer);
  return customer;
}

export const updateCustomer = ({ id, customer }) => {
  const index = db.findIndex(customer => customer.id === id);
  const oldCustomer = db[index];
  db[index] = { ...oldCustomer, ...customer };
  return db[index];
}

export const delCustomer = ({ id }) => {
  const index = db.findIndex(customer => customer.id === id);
  if (index === -1) return;
  const newDb = [...db];
  const [delElem] = newDb.splice(index, 1);
  db = [...newDb];
  return delElem;
}
