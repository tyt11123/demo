
exports.up = function(knex) {
    return knex.schema.createTable('links', table => {
        table.increments();
        table.string('url');
        table.string('title');
        table.string('tags');
        table.timestamps(false, true);
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('links');
};
