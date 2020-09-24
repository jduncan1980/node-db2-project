module.exports = () => {
	return (req, res, next) => {
		const time = new Date();
		console.log(
			`Time:${time}-IP: ${req.ip}-Method:${req.method}-URL:${req.url}`
		);

		next();
	};
};
