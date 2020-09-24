const db = require('../data/dbConfig');

const get = () => {
	return db('cars');
};

const getById = (id) => {
	return db('cars').where({ id }).first();
};

const insert = (car) => {
	return db('cars')
		.insert(car)
		.then((id) => getById(id));
};

const update = (id, changes) => {
	return db('cars').where({ id }).update(changes);
};

const remove = (id) => {
	return db('cars').where({ id }).del();
};

module.exports = {
	get,
	getById,
	insert,
	update,
	remove,
};
