
exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'john', email: 'john@gmail.com'},
        {id: 2, name: 'rick', email: 'rick@gmail.com'},
        {id: 3, name: 'phillis', email: 'phillis@gmail.com'}
      ]);
    });
};
