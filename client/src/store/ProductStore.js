import {makeAutoObservable} from "mobx";


export default class ProductStore {
	constructor() {
		this._tags = [
			{id: 1, name: "Tag One"},
			{id: 2, name: "Tag Two"},
			{id: 3, name: "Tag Three"},
			{id: 4, name: "Tag Four"},
			{id: 5, name: "Tag Five"},
		]
		this._products = [
			{id: 1, name: "Product one", price: 2000, img: "https://i.imgflip.com/6polbf.jpg", tags: 1},
			{id: 2, name: "Product two", price: 2000, img: "https://i.imgflip.com/6polbf.jpg", tags: 2},
			{id: 3, name: "Product three", price: 2000, img: "https://i.imgflip.com/6polbf.jpg", tags: 3},
		]
		this._product_infos = [
			{id: 1, description: "TEXT FOR ONE", productId: 1},
			{id: 2, description: "TEXT FOR TWO", productId: 2},
			{id: 3, description: "TEXT FOR THREE", productId: 3},
		]
		this._selectedTag = false
		makeAutoObservable(this)
	}
	
	get isProducts() {
		return this._products
	}
	
	get isName() {
		return this._name
	}
	
	get isPrice() {
		return this._price
	}
	
	get isImg() {
		return this._img
	}
	
	get isTags() {
		return this._tags
	}
	
	get isSelectedTag() {
		return this._selectedTag
	}
	
	setName(name) {
		this._name = name
	}
	
	setPrice(price) {
		this._price = price
	}
	
	setImg(img) {
		this._img = img
	}
	
	setTags(tags) {
		this._tags = tags
	}
	
	setSelectedTag(id) {
		this._selectedTag = this._tags[id].id
	}
}