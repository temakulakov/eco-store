const {Product, ProductInfo} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/apiError')
const fs = require('fs')

class ProductController {
	async create(req, res, next) {
		try {
			let {name, price, tagId, info} = req.body
			const {img} = req.files
			let fileName = uuid.v4() + ".jpg"
			const candidate = await Product.findOne({where: {name: name}})
			if (candidate) {
				return res.status(401).json({"message": "Name for product already used"})
			}
			const product = await Product.create({name, price, img: fileName, tagId})
			if (info) {
				await ProductInfo.create({productId: product.id, description: info})
			}
			await img.mv(path.resolve(__dirname, '..', 'static', fileName))
			
			return res.status(200).json(product)
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
		
	}
	
	async getAll(req, res) {
		const {tagId} = req.query
		if (!tagId) {
			const products = await Product.findAndCountAll()
			return res.status(200).json(products)
		} else {
			const products = await Product.findAndCountAll({where: {tagId: tagId}})
			return res.status(200).json(products)
		}
	}
	
	
	async getOne(req, res) {
		const {id} = req.params
		const product = await Product.findOne({
			where: {id: id},
			include: {model: ProductInfo, as: 'info'}
		})
		return res.status(200).json(product)
	}
	
	async delete(req, res) {
		const {id} = req.body
		if (!id) {
			return res.status(401).json({"message": "Enter id product"})
		}
		const imagePath = await Product.findOne({where: {id: id}})
		const product = await Product.destroy({where: {id: id}, include: {model: ProductInfo, as: 'info'}})
		
		return res.status(200).json(product)
	}
}

module.exports = new ProductController()