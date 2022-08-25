import {observer} from "mobx-react-lite";
import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {Context} from "../index";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import 'bootstrap/dist/css/bootstrap.css'
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
	const {user} = useContext(Context)
	const navigate = useNavigate()
	return (
		<Navbar bg="light">
			<Container>
				<NavLink style={{color: 'black'}} to={SHOP_ROUTE}>EcoStore</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				{user.isAuth ?
					<Nav className="navbar-nav ms-auto">
						{useLocation().pathname === ADMIN_ROUTE ? <Button size={"sm"} variant={"outline-dark"}
						                                                  onClick={() => navigate(SHOP_ROUTE)}
						                                                  style={{marginRight: '5px', borderRadius: '5px'}}>Выйти из
							админ
							панели</Button> : <Button size={"sm"} variant={"outline-dark"}
						                            onClick={() => navigate(ADMIN_ROUTE)}
						                            style={{marginRight: '5px', borderRadius: '5px'}}>Админ
							панель</Button>}
						
						<Button style={{borderRadius: '5px'}} size={"sm"} variant={"outline-dark"}
						        onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
					</Nav>
					:
					<Nav className="navbar-nav ms-auto">
						<Button size={"sm"} variant={"outline-dark"} onClick={() => {
							user.setIsAuth(true)
						}
						}>Войти</Button>
					</Nav>
				}
			</Container>
		</Navbar>
	);
});

export default NavBar;