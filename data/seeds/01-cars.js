exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('cars')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('cars').insert([
				{
					vin: '1C3CCCAB9FN642044',
					make: 'Dodge',
					model: '2012 Caravan',
					mileage: 53032,
					trans: 'Auto',
					title: 'Clean',
				},
				{
					vin: 'WMWZC5C50EWP79842',
					make: 'Toyota',
					model: '2016 Camry',
					mileage: 79232,
					trans: 'Auto',
					title: 'Salvage',
				},
				{
					vin: 'WP1AB29P58LA09327',
					make: 'Hyundai',
					model: '2018 Elantra',
					mileage: 9022,
					trans: 'Auto',
					title: 'Clean',
				},
				{
					vin: '1FMEU2D84AUF02120',
					make: 'Toyota',
					model: '2016 Corolla',
					mileage: 32332,
					trans: 'Manual',
					title: 'Clean',
				},
			]);
		});
};
