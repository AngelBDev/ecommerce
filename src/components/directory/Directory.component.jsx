import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from './../menu-item/Menu-item.component';
import sections from './directory.data';

export default class Directory extends Component {
	constructor(props) {
		super(props);

		this.state = { sections: sections };
	}

	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ id, ...sections }) => {
					return <MenuItem key={id} {...sections} />;
				})}
			</div>
		);
	}
}
