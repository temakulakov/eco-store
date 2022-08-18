const ApiError = require('../error/apiError')
const {User, Basket} = require("../models/models");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateJWT = (id, email, role) => {
	return jwt.sign({id: id, email: email, role},
		process.env.SECRET_KEY,
		{expiresIn: '24h'})
}

class UserController {
	async registration(req, res, next) {
		const {email, password, role} = req.body
		if (!email || !password) {
			return next(ApiError.badRequest('Don\'t correct email or password'))
		}
		const candidate = await User.findOne({where: {email}})
		if (candidate) {
			return next(ApiError.badRequest("A user with this email exists"))
		}
		const hashPassword = await bcrypt.hash(password, 5)
		const user = await User.create({email, role, password: hashPassword})
		const basket = await Basket.create({userId: user.id})
		const token = generateJWT(user.id, user.emai, user.role)
		return res.status(200).json({token})
	}
	
	async login(req, res, next) {
		const {email, password} = req.body
		const user = await User.findOne({where: {email}})
		if (!user) {
			return next(ApiError.internal('Email don\'t correct'))
		}
		let comparePassword = bcrypt.compareSync(password, user.password)
		if (!comparePassword) {
			return next(ApiError.internal('Password don\'t correct'))
		}
		const token = generateJWT(user.id, user.email, user.role)
		return res.status(200).json({token})
	}
	
	async check(req, res, next) {
		const token = generateJWT(req.user.id, req.user.email, req.user.role)
		return res.status(200).json({token})
	}
	
	async delete(req, res) {
		const {id} = req.body
		if (!id) {
			const users = await User.destroy({where: {}})
			return res.status(200).json(users)
		}
		const user = await User.destroy({where: {id: id}})
		return res.status(200).json(user)
	}
}

module.exports = new UserController()