import React from 'react';
import {Card, CardImg, Col, Image} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductItem = ({product}) => {
	const navigate = useNavigate()
	return (
		<Col onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)} style={{maxWidth: 250, padding: 0, margin: 5}}>
			<Card style={{width: '15rem', margin: 0}}>
				<Card.Img src={product.img} style={{width: '100%'}}/>
				<Card.Text style={{margin: 0, paddingLeft: 15}}>Tag 1</Card.Text>
				<Card.Header>Name 1</Card.Header>
			</Card>
		</Col>
	);
};

export default ProductItem;