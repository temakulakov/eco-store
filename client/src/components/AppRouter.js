import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import Shop from "../page/shop";
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routers";

const AppRouter = () => {
	const {user} = useContext(Context)
	
	return (
		<Routes>
			{user.isAuth && authRoutes.map(({path, Component}) =>
				<Route key={path} path={path} element={<Component/>} exact/>
			)}
			{publicRoutes.map(({path, Component}) =>
				<Route key={path} path={path} element={<Component/>} exact/>
			)}
			<Route path={'*'} element={<Shop/>}/>
		</Routes>
	);
};

export default AppRouter;