import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProductList from "../components/ProductList";
import TagBar from "../components/TagBar";

const Shop = () => {
	return (
		<Container>
			<Row style={{marginTop: 5}}>
				<TagBar/>
			</Row>
			<Row>
				<Col>
					<ProductList/>
				</Col>
			</Row>
		</Container>
	);
};

export default Shop;