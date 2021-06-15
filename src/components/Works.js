import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import style from '../components/styles/primary_style.module.css';
import { Link } from 'react-router-dom';

function Works() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Container>
				<h2>Works</h2>
				<Col>
					<Row>
						<Col>
							<Card className={style.work_card}>
								<Card.Body style={{ marginTop: '80px' }}>
									<Card.Title>
										<h2>
											<b>Coindexter</b>
										</h2>
									</Card.Title>
									<Card.Text style={{ fontSize: '25px' }}>
										A simple budgeting calculator that allows users to visualize their monthly
										expenses.
									</Card.Text>
									<Link to="/works/coindexter">
										<Button variant="primary" className={style.project_card_buttons}>
											Learn More
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className={style.work_card}>
								<Card.Body style={{ marginTop: '80px' }}>
									<Card.Title>
										<h2>
											<b>FST BRK</b>
										</h2>
									</Card.Title>
									<Card.Text style={{ fontSize: '25px' }}>
										A Basketball inspired brand of art, clothing and merchandise.<br />
									</Card.Text>
									<Link to="/works/fstbrk">
										<Button variant="primary" className={style.project_card_buttons}>
											Learn More
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card className={style.work_card}>
								<Card.Body style={{ marginTop: '80px' }}>
									<Card.Title>
										<h2>
											<b>Black Tech Philly</b>
										</h2>
									</Card.Title>
									<Card.Text style={{ fontSize: '25px' }}>
										Informational page for a non profit organization commited to connecting Black
										and Brown technologist virtually.
									</Card.Text>
									<Link to="/works/btp">
										<Button variant="primary" className={style.project_card_buttons}>
											Learn More
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className={style.work_card}>
								<Card.Body style={{ marginTop: '80px' }}>
									<Card.Title>
										<h2>
											<b>Dealmaker</b>
										</h2>
									</Card.Title>
									<Card.Text style={{ fontSize: '25px' }}>
										Simple project management tool for contractors and clients.
										<br />
										<br />
									</Card.Text>
									<Link to="/works/dealmaker">
										<Button variant="primary" className={style.project_card_buttons}>
											Learn More
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
			</Container>
		</div>
	);
}

export default Works;
