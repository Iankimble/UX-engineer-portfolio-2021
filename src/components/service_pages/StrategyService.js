import { Container, Row, Col, Jumbotron, Table } from 'react-bootstrap';

function Strategy_service() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Container>
				<Row>
					<Col>
						<Jumbotron>Strategy</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<b style={{ fontSize: '45px' }}>Customer First</b>
					</Col>
					<Col>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book.
					</Col>
				</Row>
				<Row>
					<Col>
						<h2>Strategy Services</h2>
						<Table striped bordered hover size="sm">
							<thead />
							<tbody>
								<tr>
									<td>UX consultation</td>
									<td>User Research</td>
								</tr>
								<tr>
									<td>Wireframing </td>
									<td>Prototyping</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Strategy_service;
