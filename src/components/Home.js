import { Container, Button, Col, Row } from 'react-bootstrap';
import style from '../components/styles/primary_style.module.css';
import { Link } from 'react-router-dom';

// Condtional logic for if screensizes
//
function Home() {
	return (
		<div style={{ height: '92vh', textAlign: 'center' }}>
			<Container>
				<div>
					<Row style={{ height: '200px' }} />
					<Row>
						<Col sm={12} md={6} lg={6} xl={6} style={{ textAlign: 'center' }}>
							<h1>
								<b>Ian Kimble | UX Engineer</b>
							</h1>
							<p style={{ fontSize: '35px' }}>
								"To design and develop great digital products begins with empathy and is powered by
								imagination."
								<br />
								<Link to="/about">
									<Button className={style.primary_buttons}>Learn More</Button>
								</Link>
							</p>
						</Col>
						<Col sm={12} md={6} lg={6} xl={6} />
					</Row>
				</div>
			</Container>
		</div>
	);
}
export default Home;
