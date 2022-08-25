import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../index";

const CreateModal = ({show, onHide, target}) => {
	const {product} = useContext(Context)
	return (
		<Modal
			target={target}
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				
				<Modal.Title id="contained-modal-title-vcenter">
					{target === 'TAG' ? 'Добавить тег' : target === 'PRODUCT' ? 'Добавить товар' : 'Ошибка'}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control style={{margin: 6, marginLeft: 4}}
					              placeholder={target === 'TAG' ? 'Введите название тега' : target === 'PRODUCT' ? 'Введите название товара' : 'Ошибка'}
					/>
				</Form>
				{target === 'PRODUCT' ?
					<Form.Control type={'number'}
					              style={{margin: 6, marginLeft: 4}}
					              placeholder={'Введите цену товара'}/> : ''}
				{target === 'PRODUCT' ?
					<Form.Control style={{margin: 6, marginLeft: 4, height: 100}}
					              placeholder={'Введите описание товара'}
					/> : ''}
				{target === 'PRODUCT' ? <Dropdown>
					
					<Dropdown.Toggle style={{marginLeft: 4}}>Выберите тег</Dropdown.Toggle>
					<Dropdown.Menu>
						{product.isTags.map(tag =>
							<Dropdown.Item key={tag.id}>{tag.name}</Dropdown.Item>)}
					</Dropdown.Menu>
				</Dropdown> : ''}
				{target === 'PRODUCT' ?
					<Form.Control type={'file'}
					              style={{margin: 6, marginLeft: 4}}
					              placeholder={'Введите цену товара'}/> : ''}
			</Modal.Body>
			<Modal.Footer>
				<Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
				<Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateModal;