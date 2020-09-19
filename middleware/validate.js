const cars = require('../models/carModel');
const sales = require('../models/salesModel');

const validateCarId = () => {
	return (req, res, next) => {
		cars
			.getById(req.params.id)
			.then((car) => {
				if (car) {
					req.car = car;
					next();
				} else {
					res.status(404).json({ message: 'Car Not Found.' });
				}
			})
			.catch((err) => {
				next(err);
			});
	};
};

const validateCar = () => {
	return (req, res, next) => {
		if (
			!req.body.vin ||
			!req.body.make ||
			!req.body.model ||
			!req.body.mileage
		) {
			res.status(400).json({ message: 'Missing Car Data.' });
		} else {
			next();
		}
	};
};

const validateSalesId = () => {
	return (req, res, next) => {
		sales
			.getById(req.params.id)
			.then((sale) => {
				if (sale) {
					req.sale = sale;
					next();
				} else {
					res.status(404).json({ message: 'Sale Not Found.' });
				}
			})
			.catch((err) => {
				next(err);
			});
	};
};

const validateSale = () => {
	return (req, res, next) => {
		cars.getById(req.body.carId).then((car) => {
			console.log(car);
			console.log(req.body);
			if (req.body.sold === undefined || !req.body.price || !req.body.carId) {
				res.status(400).json({ message: 'Missing Sale Data!' });
			} else if (!car) {
				res.status(404).json({ message: 'Valid Car Not Found!' });
			} else {
				next();
			}
		});
	};
};

module.exports = {
	validateCarId,
	validateCar,
	validateSalesId,
	validateSale,
};
