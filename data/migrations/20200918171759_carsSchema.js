exports.up = function (knex) {
	return knex.schema.createTable('cars', (table) => {
		table.increments('id');
		table.string('vin', 128).notNullable().unique();
		table.string('make', 128).notNullable();
		table.string('model', 128).notNullable();
		table.integer('mileage').notNullable();
		table.string('trans');
		table.string('title');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists();
};
