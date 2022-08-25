import React from 'react';
import {Button, Card, Container} from "react-bootstrap";

const Product = () => {
	const product = {id: 1, name: "Product one", price: 2000, img: "https://i.imgflip.com/6polbf.jpg", tags: [1, 2]}
	const product_info = {id: 1, description: "TEXT FOR ONE", productId: 1}
	const tags = [
		{id: 1, name: "Tag One"},
		{id: 2, name: "Tag Two"},
		{id: 3, name: "Tag Three"},
		{id: 4, name: "Tag Four"},
		{id: 5, name: "Tag Five"},
	]
	return (
		<Container>
			<Card style={{width: '18rem'}}>
				<Card.Img variant="top"
				          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"/>
				<Card.Body>
					<Card.Title>{product.name}</Card.Title>
					<Card.Text>
						{product_info.description}
					</Card.Text>
					{product.tags.map(tag => <Button key={tag.id} style={{padding: 4, fontSize: 13, borderRadius: '20px'}}
					                                 variant={"light"}>tags[tag].name</Button>)}
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Product;