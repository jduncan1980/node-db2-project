const express = require('express');
const sales = require('../models/salesModel');
const router = express.Router();
const { validateSale, validateSalesId } = require('../middleware/validate');

router.get('/', async (req, res, next) => {
	try {
		const response = await sales.get();
		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', validateSalesId(), async (req, res, next) => {
	try {
		res.status(200).json(req.sale);
	} catch (error) {
		next(error);
	}
});

router.post('/', validateSale(), async (req, res, next) => {
	try {
		const sale = await sales.insert(req.body);
		res.status(201).json(sale);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', validateSalesId(), async (req, res, next) => {
	try {
		await sales.remove(req.params.id);
		res.status(200).json(req.sale);
	} catch (error) {
		next(error);
	}
});

router.put(
	'/:id',
	validateSalesId(),
	validateSale(),
	async (req, res, next) => {
		try {
			await sales.update(req.params.id, req.body);
			const response = await sales.getById(req.params.id);
			res.status(200).json(response);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
