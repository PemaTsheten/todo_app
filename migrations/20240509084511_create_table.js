/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('todo_items',(table)=>{
    table.increments()
    table.string('todo').notNullable()
    table.date('finish_by').notNullable()
    table.boolean('has_done').defaultTo(false)

  }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('todo_items')
};
