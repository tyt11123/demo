
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('account').del()
    .then(function () {
      // Inserts seed entries
      return knex('account').insert([
        {id: 1, name: 'alex'},
        {id: 2, name: 'xccelerate'}
      ]);
    });
};
