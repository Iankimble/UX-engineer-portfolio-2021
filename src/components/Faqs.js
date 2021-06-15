import { Container, Col, Row, Jumbotron } from 'react-bootstrap';

function Faqs() {
	return (
		<div style={{ textAlign: 'center' }}>
			<h2>Frequently Asked Questions</h2>
			<Container>
				<Jumbotron />
				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3>Question ?</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
				</Row>
				<hr />
				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3>Question ?</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
				</Row>
				<hr />
				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3>Question ?</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
				</Row>
				<hr />
				<Row style={{ textAlign: 'left' }}>
					<hr />
					<Col>
						<h3>Question ?</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Faqs;
