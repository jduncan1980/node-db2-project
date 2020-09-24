exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('sales')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('sales').insert([
				{ sold: false, price: 11999.99, carId: 1 },
				{ sold: true, price: 12999.99, carId: 2 },
				{ sold: false, price: 15999.99, carId: 3 },
				{ sold: false, price: 11999.99, carId: 4 },
			]);
		});
};
