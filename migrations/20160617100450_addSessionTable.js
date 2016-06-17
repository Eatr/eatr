
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('sessions', function (table) {
	  table.bigInteger('id')
	  table.string('name')
	})
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sessions')
}
