import { Container, Row, Col, Jumbotron, Table } from 'react-bootstrap';

function Design_service() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Container>
				<Row>
					<Col>
						<Jumbotron>Design</Jumbotron>
					</Col>
				</Row>
				<Row>
					<Col>
						<b style={{ fontSize: '45px' }}>Bringing your vision to reality</b>
					</Col>
					<Col>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book.
					</Col>
				</Row>
				<Row>
					<Col>
						<h2>Design Services</h2>
						<Table striped bordered hover size="sm">
							<thead />
							<tbody>
								<tr>
									<td> Brand Design</td>
									<td>Design Consultation</td>
									<td>2D Animation</td>
								</tr>
								<tr>
									<td>Logo Design </td>
									<td>Illustration</td>
									<td>Promotional Design</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Design_service;
