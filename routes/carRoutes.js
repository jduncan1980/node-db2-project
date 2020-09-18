const express = require('express');
const cars = require('../models/carModel');
const router = express.Router();
const { validateCar, validateCarId } = require('../middleware/validate');

router.get('/', async (req, res, next) => {
	try {
		const response = await cars.get();
		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', validateCarId(), async (req, res, next) => {
	try {
		// const Car = await cars.getById(req.params.id);
		res.status(200).json(req.car);
	} catch (error) {
		next(error);
	}
});

router.post('/', validateCar(), async (req, res, next) => {
	try {
		const car = await cars.insert(req.body);
		res.status(201).json(car);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', validateCarId(), async (req, res, next) => {
	try {
		await cars.remove(req.params.id);
		res.status(200).json(req.car);
	} catch (error) {
		next(error);
	}
});

router.put('/:id', validateCarId(), validateCar(), async (req, res, next) => {
	try {
		await cars.update(req.params.id, req.body);
		const response = await cars.getById(req.params.id);
		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
