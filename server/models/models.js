const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
	email: {type: DataTypes.STRING, unique: true,},
	password: {type: DataTypes.STRING,},
	role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('backet', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
})

const BasketProduct = sequelize.define('backet_device', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
})

const Product = sequelize.define('backet_device', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
	name: {type: DataTypes.STRING, unique: true, allowNull: false},
	price: {type: DataTypes.INTEGER},
	img: {type: DataTypes.INTEGER},
})

const ProductInfo = sequelize.define('product_info', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
	description: {type: DataTypes.STRING, allowNull: true}
})

const Tag = sequelize.define('tag', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
	name: {type: DataTypes.STRING, unique: true,},
})

const FeedBack = sequelize.define('feedback', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
	rate: {type: DataTypes.INTEGER, allowNull: false},
	text: {type: DataTypes.STRING,  allowNull: false}
})

const TagProduct = sequelize.define('tag_product', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(FeedBack)
FeedBack.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Tag.hasMany(Product)
Product.belongsTo(Tag)

Product.hasMany(ProductInfo)
ProductInfo.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Tag.belongsToMany(Product, {through: TagProduct})
Product.belongsToMany(Tag, {through: TagProduct})

module.exports = {
	User,  ProductInfo, Basket, BasketProduct, Product, Tag, FeedBack, TagProduct
}