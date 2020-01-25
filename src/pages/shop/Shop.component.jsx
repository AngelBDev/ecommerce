import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from './../../components/collection-preview/Collection-preview.component';

export default class Shop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='shopPage'>
				{collections.map(({ id, ...otherCollectionProps }) => {
					return <CollectionPreview key={id} {...otherCollectionProps} />;
				})}
			</div>
		);
	}
}
