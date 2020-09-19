
exports.up = function(knex) {

    return knex.schema.createTable('Users', function(table){
        
        table.increments('codUser')
        table.string('nome').notNullable()
        table.string('email').notNullable()

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('Users')
  
};