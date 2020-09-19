exports.up = function (knex) {
	return knex.schema.createTable('sales', (table) => {
		table.increments('id');
		table.boolean('sold').notNullable();
		table.decimal('price').notNullable();
		table.integer('carId').references('id').inTable('cars');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('sales');
};
