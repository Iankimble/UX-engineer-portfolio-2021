import { Jumbotron, Container, Col, Row, Button } from 'react-bootstrap';
import style from '../components/styles/primary_style.module.css';
import { Link } from 'react-router-dom';

function Services() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Container>
				<h2>Services</h2>
				<br />
				<Jumbotron>
					<img src="" alt="workflow" style={{ height: '100px', width: '100px' }} />
					<br />
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s.
					</p>
				</Jumbotron>
				<Row>
					<Col sm={12} md={6} lg={6} xl={6}>
						<h3 style={{ textAlign: 'left' }}>
							<i>Strategy</i>
						</h3>
						<img
							src=""
							alt="strategy"
							style={{ height: '100px', width: '100px', backgroundColor: 'grey' }}
						/>
					</Col>
					<Col sm={12} md={6} lg={6} xl={6}>
						<hr />
						<p style={{ fontSize: '35px' }}>
							<b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b>
							<br />
						</p>
						<Link to="/services/strategy">
							<Button className={style.project_card_buttons}>Learn More</Button>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={6} lg={6} xl={6}>
						<h3 style={{ textAlign: 'left' }}>
							<i>Design</i>
						</h3>
						<img src="" alt="design" style={{ height: '100px', width: '100px', backgroundColor: 'grey' }} />
					</Col>
					<Col sm={12} md={6} lg={6} xl={6}>
						<hr />
						<p style={{ fontSize: '35px' }}>
							<b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b>
							<br />
						</p>
						<Link to="/services/design">
							<Button className={style.project_card_buttons}>Learn More</Button>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={6} lg={6} xl={6}>
						<h3 style={{ textAlign: 'left' }}>
							<i>Development</i>
						</h3>
						<img
							src=""
							alt="development"
							style={{ height: '100px', width: '100px', backgroundColor: 'grey' }}
						/>
					</Col>
					<Col sm={12} md={6} lg={6} xl={6}>
						<hr />
						<p style={{ fontSize: '35px' }}>
							<b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b>
							<br />
						</p>
						<Link to="/services/development">
							<Button className={style.project_card_buttons}>Learn More</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Services;
