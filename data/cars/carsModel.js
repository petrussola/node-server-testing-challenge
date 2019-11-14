const db = require("../dbconfig");

module.exports = {
  insert,
  remove
};

function insert(car) {
  return db("cars")
    .insert(car)
    .then(ids => {
      return findById(ids[0]);
    });
}

function findById(id) {
  return db("cars")
    .where({ id })
    .first();
}

function remove(id) {
  return db("cars")
    .where({ id })
    .del();
}
