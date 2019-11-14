const db = require("../dbconfig");

module.exports = {
  insert
};

function insert(car) {
  return db("cars")
    .insert(car)
    .then(ids => {
      return findById(ids[0]);
    });
}

function findById(id) {
  return db("cars").where({ id }).first();
}
