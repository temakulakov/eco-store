const {Tag} = require('../models/models')
const ApiError = require('../error/apiError')

class TagController {
	async create(req, res) {
		const {name} = req.body
		const candidate = Tag.findOne({where: {name: name}})
		if (candidate) {
			return res.status(401).json({"message": "Tag already exist"})
		}
		const tag = await Tag.create({name})
		return res.status(200).json(tag)
	}
	
	async get(req, res) {
		const tags = await Tag.findAll()
		return res.status(200).json(tags)
	}
	
	async delete(req, res) {
		const {id} = req.body
		if (!id) {
			const tags = await Tag.destroy({where: {}})
			return res.status(200).json(tags)
		}
		const tag = await Tag.destroy({where: {id: id}})
		return res.status(200).json(tag)
	}
}

module.exports = new TagController()