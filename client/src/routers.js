import Admin from './page/admin'
import Auth from "./page/auth";
import Basket from "./page/basket";
import Product from "./page/product";
import Shop from "./page/shop";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: Admin
	},
	{
		path: BASKET_ROUTE,
		Component: Basket
	}
]
export const publicRoutes = [
	{
		path: SHOP_ROUTE,
		Component: Shop
	},
	{
		path: PRODUCT_ROUTE + '/:id',
		Component: Product
	},
	{
		path: LOGIN_ROUTE,
		Component: Auth
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Auth
	}
]