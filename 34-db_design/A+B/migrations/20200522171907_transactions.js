
exports.up = function(knex) {
  return knex.schema.createTable('transaction', (table)=> {
      table.increments();
      table.string('credit_card_id');
      table.foreign('credit_card_id').references('credit_card.id');
      table.integer('value');
      table.timestamps(false,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('transaction');
};
