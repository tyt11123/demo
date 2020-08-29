exports.up = function(knex,Promise){
  return knex.schema.createTable('users',(table)=>{
    table.increments().primary();
    table.string("username");
    table.string("password");
    table.timestamps(false,true);
  });
}

exports.down = function(knex,Promise){
  return knex.schema.dropTable('users');
}

// one user will have one table
// instead of using 1 single notes table