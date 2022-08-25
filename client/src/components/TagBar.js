import {observer} from "mobx-react-lite";
import React, {useContext} from 'react';
import {Button, Container} from "react-bootstrap";
import {Context} from "../index";

const TagBar = observer(() => {
	const {product} = useContext(Context)
	return (
		<Container>
			{product.isTags.map(tag =>
				<Button active={tag.id === product.isSelectedTag} key={tag.id - 1} variant={"Light"}
				        style={{marginRight: 4, cursor: "pointer", borderRadius: '20px'}}
				        onClick={() => product.setSelectedTag(tag.id - 1)}>{tag.name}</Button>
			)}
		</Container>
	);
});

export default TagBar;