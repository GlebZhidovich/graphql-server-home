const db = [
  {
    "id": "S2D3F2D321L",
    "name": "Oliver",
    "age": 21,
    "language": "en",
    "city": "London",
    "gender": "male"
  }
];

export const getCustomer = ({ id }) => {
  const customer = db.find(customer => customer.id === id);
  return customer;
}

