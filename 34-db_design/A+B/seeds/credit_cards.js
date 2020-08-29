
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('credit_card').del()
    .then(function () {
      // Inserts seed entries
      return knex('credit_card').insert([
        {id: 1, number: '1234 4321 4567 7654', account_id: 1},
        {id: 2, number: '2345 6789 9876 5432', account_id: 1},
        {id: 3, number: '1234 7890 0987 7654', account_id: 2},
        {id: 4, number: '7890 4321 4567 4321', account_id: 2}
      ]);
    });
};
