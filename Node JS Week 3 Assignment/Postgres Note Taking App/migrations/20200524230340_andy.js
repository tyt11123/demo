exports.up = function(knex,Promise){
  return knex.schema.createTable('andy',(table)=>{
    table.increments().primary();
    table.string("note");
    table.timestamps(false,true);
  });
}

exports.down = function(knex,Promise){
  return knex.schema.dropTable('andy');
}