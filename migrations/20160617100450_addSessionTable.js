
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('sessions', function (table) {
	  table.integer('id')
	  table.string('name')
	})
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sessions')
}
