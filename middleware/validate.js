const cars = require('../models/carModel');

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

module.exports = {
	validateCarId,
	validateCar,
};
