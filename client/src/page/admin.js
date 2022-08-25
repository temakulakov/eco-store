import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateModal from "../components/createModal";

const Admin = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const [target, setTarget] = useState('undefined')
	return (
		<Container className={"d-flex flex-column"}>
			<Button variant={"outline-primary"} style={{marginTop: 5}} onClick={() => {
				setTarget('TAG')
				setModalVisible(true)
			}
			}>Добавить
				тэг</Button>
			<Button variant={"outline-primary"} style={{marginTop: 5}} onClick={() => {
				setTarget('PRODUCT')
				setModalVisible(true)
			}
			}>Добавить
				продукт</Button>
			<CreateModal show={modalVisible} onHide={() => setModalVisible(false)} target={target}/>
		</Container>
	);
};

export default Admin;