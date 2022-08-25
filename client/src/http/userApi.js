import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, password) => {
	const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
	return jwtDecode(data.token)
}
export const login = async (email, password) => {
	const {data} = await $host.post('api/user/login', {email, password, role: 'ADMIN'})
	return jwtDecode(data.token)
}
export const check = async () => {
	const responce = await $host.post('api/auth/registration')
	return responce
}