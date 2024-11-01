const User = require("../models/user")
const { verify } = require("../helpers/token")

async function authenticated(req, res, next) {
	try {
		const tokenData = verify(req.cookies.token)
		const user = await User.findOne({_id: tokenData.id})

	if (!user) {
		res.send({error: "Authenticated user not found"})
		return
	}
		req.user = user
		next()

	}
	catch (e) {
		res.redirect('/authorization');

	}
	
}

module.exports = authenticated;