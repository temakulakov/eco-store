import React, {useState} from 'react';
import {Card, Container, Form, Button, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const click = async () => {
		if (isLogin) {
			const response = await login(email, password)
			console.log(response)
		} else {
			const response = await registration(email, password)
			console.log(response)
		}
	}
	return (
		<Container
			className={"d-flex justify-content-center align-items-center"}
			style={{height: window.innerHeight - 54}}
		>
			<Card style={{width: 450, padding: 15}}>
				<h2 style={{marginBottom: 5, marginInline: "Auto"}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className={"d-flex flex-column"}>
					<Form.Control
						key={0}
						value={email}
						onChange={e => setEmail(e.target.value)}
						style={{marginTop: 10, maxWidth: 400, marginInline: "Auto"}}
						placeholder={"Введите email"}
					/>
					<Form.Control
						kry={1}
						value={password}
						onChange={e => setPassword(e.target.value)}
						style={{marginTop: 10, maxWidth: 400, marginInline: "Auto"}}
						placeholder={"Введите пароль"}
						type={'password'}
					/>
					{isLogin ?
						<Row style={{margin: 0, padding: 0}}>
							<Row style={{display: "inline-block", margin: 10, fontSize: 14, padding: 0}}>
								Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{padding: 0}}>Зарегестрируйтесь.</NavLink>
							</Row>
							<Row style={{padding: 0, margin: 0}}>
								<Button variant={"outline-success"}
								        style={{width: 150, marginInline: "Auto"}} onClick={() => click()}>Войти</Button>
							</Row>
						</Row>
						:
						<Row style={{margin: 0, padding: 0}}>
							<Row style={{display: "inline-block", margin: 10, fontSize: 14, padding: 0}}>
								Есть аккаунт? <NavLink to={LOGIN_ROUTE} style={{padding: 0}}>Авторизация.</NavLink>
							</Row>
							<Row style={{padding: 0, margin: 0}}>
								<Button variant={"outline-success"}
								        style={{width: 150, marginInline: "Auto"}} onClick={() => click()}>Продолжить</Button>
							</Row>
						</Row>
					}
				
				</Form>
			</Card>
		</Container>
	);
};

export default Auth;