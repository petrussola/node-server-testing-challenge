exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { make: "Toyota" },
        { make: "Ford" },
        { make: "Nissan" }
      ]);
    });
};
