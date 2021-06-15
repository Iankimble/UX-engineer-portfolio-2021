import { Link, withRouter } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import style from '../styles/primary_style.module.css';

function NavigationBar() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" className={style.nav_bar}>
				<Container>
					<Navbar.Brand>
						<Link to="/">Home</Link>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Nav style={{ margin: '10px' }}>
								<Link to="/works">Works</Link>
							</Nav>

							{/* <Nav style={{ margin: '10px' }}>
								<Link to="/services">Services</Link>
							</Nav> */}

							<Nav style={{ margin: '10px' }}>
								<Link to="/about">About</Link>
							</Nav>

							{/* <Nav style={{ margin: '10px' }}>
								<Link to="/faqs">FAQs</Link>
							</Nav> */}

							<Nav style={{ margin: '10px' }}>
								<Link to="/contact">Contact</Link>
							</Nav>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default withRouter(NavigationBar);
