exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table
      .integer("make", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
