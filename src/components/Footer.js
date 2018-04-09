import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
	render(){
		return (
			<div className="footer">
				<Container align='left'>
					<Row>
						<Col sm="3" className="dark">
							<h4><b>IAIF</b></h4>
							<p>
								IAIF adalah paragraf menjelaskan apa itu web iaif
								paragraf menjelaskan apa itu web iaif
								paragraf menjelaskan apa itu web iaif
								paragraf menjelaskan apa itu web iaif
								paragraf menjelaskan apa itu web iaif
							</p>
						</Col>
						<Col sm="3" className="light">
							<ul className="footer-link">
								<li><Link to='#'>Home</Link></li>
								<li><Link to='#'>Alumni</Link></li>
								<li><Link to='#'>About</Link></li>
								<li><Link to='#'>Feedback</Link></li>
							</ul>
						</Col>
						<Col sm="3" className="light">
							Contact Us
							<ul className="footer-info">
								<li><Link to='#'><span className='fa fa-envelope'></span> iaif@iaif.com</Link></li>
								<li><Link to='#'><span className='fa fa-phone'></span> 0857xxxxxxx</Link></li>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Footer;