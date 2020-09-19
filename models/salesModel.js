const db = require('../data/dbConfig');

const get = () => {
	return db('sales');
};

const getById = (id) => {
	return db('sales').where({ id }).first();
};

const insert = (car) => {
	return db('sales')
		.insert(car)
		.then((id) => getById(id));
};

const update = (id, changes) => {
	return db('sales').where({ id }).update(changes);
};

const remove = (id) => {
	return db('sales').where({ id }).del();
};

module.exports = {
	get,
	getById,
	insert,
	update,
	remove,
};
