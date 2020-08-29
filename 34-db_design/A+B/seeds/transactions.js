
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transaction').del()
    .then(function () {
      // Inserts seed entries
      return knex('transaction').insert([
        {id: 1, credit_card_id: '1234 4321 4567 7654', value: -300},
        {id: 2, credit_card_id: '1234 4321 4567 7654', value: 100},
        {id: 3, credit_card_id: '2345 6789 9876 5432', value: 520},
        {id: 4, credit_card_id: '2345 6789 9876 5432', value: -50},
        {id: 5, credit_card_id: '1234 7890 0987 7654', value: -400},
        {id: 6, credit_card_id: '1234 7890 0987 7654', value: 530},
        {id: 7, credit_card_id: '7890 4321 4567 4321', value: 200},
        {id: 8, credit_card_id: '7890 4321 4567 4321', value: -100}
      ]);
    });
};
