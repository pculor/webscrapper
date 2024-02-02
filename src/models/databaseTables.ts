const databaseTable = `
DROP TABLE IF EXISTS datalog CASCADE;


CREATE TABLE datalog (
  id SERIAL primary key,
  imageDescription text []
);
`;

export default databaseTable;