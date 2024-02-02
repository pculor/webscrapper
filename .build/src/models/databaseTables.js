"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const databaseTable = `
DROP TABLE IF EXISTS datalog CASCADE;


CREATE TABLE datalog (
  id SERIAL primary key,
  imageDescription text []
);
`;
exports.default = databaseTable;
//# sourceMappingURL=databaseTables.js.map