import {makeAutoObservable} from "mobx";


export default class UserStore {
	constructor() {
		this._isAuth = true
		this._user = {}
		makeAutoObservable(this)
	}
	
	get isAuth() {
		return this._isAuth
	}
	
	get isUser() {
		return this._user
	}
	
	setIsAuth(bool) {
		this._isAuth = bool
	}
	
	setUser(user) {
		this._user = user
	}
}