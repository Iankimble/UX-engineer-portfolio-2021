import { Container, Row, Col, Jumbotron, Table } from 'react-bootstrap';

function Development_service() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Container>
				<Row>
					<Col>
						<Jumbotron> Web Development</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<b style={{ fontSize: '45px' }}>Building Businesses</b>
					</Col>
					<Col>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book.
					</Col>
				</Row>
				<Row>
					<Col>
						<h2>Web Develoment Services</h2>
						<Table striped bordered hover size="sm">
							<thead />
							<tbody>
								<tr>
									<td> Ecommerce Development</td>
									<td>Technology assessment and Consultation</td>
									<td />
								</tr>
								<tr>
									<td>Web Design </td>
									<td>Subscription Site development</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Development_service;
