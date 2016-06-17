
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
	  table.increments('id')
	  table.bigInteger('passportId')
	  table.string('name')
	  table.string('shortlist')
	  table.timestamps()
	})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
