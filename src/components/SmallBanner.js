import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class SmallBanner extends React.Component{
	render(){
		return (
			<div className="banner">
				<h4>Web portal ikatan alumni informatika</h4>
				<Link to='/signup'>
					<Button color="light" size="lg" className="redirect-btn">Daftar Sekarang</Button> 
				</Link>
			</div>
		);
	}
}

export default SmallBanner;