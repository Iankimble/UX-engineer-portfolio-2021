import { Container, Col, Row, Jumbotron, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from '../components/styles/primary_style.module.css';

function About() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Container>
				<h2>Ian Kimble | UX Engineer</h2>
				<br />
				<Row>
					<Col>
						<div>
							<video width="500px" height="300px" controls>
								Your browser does not support the video tag.
							</video>
						</div>
					</Col>
					<Col>
						<p style={{ fontSize: '25px' }}>
							There will never be a shortage of problems to solve- my job as a UX engineer is to explore
							them; to question and ideate, to discover and learn, to build and break and build again,
							until a solution can be found that is accessible, usable and equaitable for all.
						</p>
					</Col>
				</Row>
				<h2 style={{ float: 'left' }}>Tools and Technology</h2>
				<Jumbotron>UX and dev languages</Jumbotron>
				<br />
				<h3 style={{ textAlign: 'center', fontSize: '35px' }}>
					<b>Strategy</b>
				</h3>

				<Row>
					<Col sm={12} md={6} lg={6} xl={6}>
						<img
							src=""
							alt="strategy"
							style={{ height: '100px', width: '100px', backgroundColor: 'grey' }}
						/>
					</Col>
					<Col sm={12} md={6} lg={6} xl={6}>
						<hr />
						<b style={{ fontSize: '35px' }}>User First Approach</b>
						<br />

						<p style={{ margin: '10px', fontSize: '25px' }}>
							The foundation of good products and services are built upon understanding the needs and
							desires of the user and their relationship with said products and services. Through the
							utilization of UX frameworks and strategies, I've helped many clients realize their business
							goals through development and design.
						</p>
					</Col>
				</Row>
				<Row>
					<h3>Strategy Skills</h3>
					<Table striped bordered hover size="sm">
						<thead />
						<tbody>
							<tr>
								<td>UX Consultation</td>
								<td>User Research</td>
							</tr>
							<tr>
								<td>Wireframing </td>
								<td>Prototyping</td>
							</tr>
						</tbody>
					</Table>
				</Row>
				<h3 style={{ textAlign: 'center', fontSize: '35px' }}>
					<b>Design</b>
				</h3>
				<Row>
					<Col sm={12} md={6} lg={6} xl={6}>
						<img
							src=""
							alt="strategy"
							style={{ height: '100px', width: '100px', backgroundColor: 'grey' }}
						/>
					</Col>
					<Col sm={12} md={6} lg={6} xl={6}>
						<hr />
						<b style={{ fontSize: '35px' }}> Visualization Through Communication</b>
						<br />
						<p style={{ margin: '10px', fontSize: '25px' }}>
							Synthesizing client ideas into material things is a delicate and special process that I take
							great pride and joy in. From Logos, design guides and other visual assets to wireframes and
							prototypes; when designing I always begin from a place of empathizing the desires and goals
							of the client in order to better address the problem they want to solve.
						</p>
					</Col>
				</Row>
				<Row>
					<h3>Design Skills</h3>
					<Table striped bordered hover size="sm">
						<thead />
						<tbody>
							<tr>
								<td>Logo Design </td>
								<td>Illustration</td>
							</tr>
							<tr>
								<td>Promotional Design</td>
								<td> Brand Design</td>
							</tr>
							<tr>
								<td>Design Consultation</td>
								<td>2D Animation</td>
							</tr>
						</tbody>
					</Table>
				</Row>
				<h3 style={{ textAlign: 'center', fontSize: '35px' }}>
					<b>Development</b>
				</h3>
				<Row>
					<Col sm={12} md={6} lg={6} xl={6}>
						<img
							src=""
							alt="strategy"
							style={{ height: '100px', width: '100px', backgroundColor: 'grey' }}
						/>
					</Col>
					<Col sm={12} md={6} lg={6} xl={6}>
						<hr />
						<b style={{ fontSize: '35px' }}> Building Equitable Solutions </b>
						<br />
						<p style={{ margin: '10px', fontSize: '25px' }}>
							As a developer, One of the most exciting challenges is to build a digital product from the
							ground up. I enjoy the freedom of exploration in discovering and learning about tools and
							libraries that will aid in developing great web applications.
						</p>
					</Col>
				</Row>
				<Row>
					<h3>Development Skills</h3>
					<Table striped bordered hover size="sm">
						<thead />
						<tbody>
							<tr>
								<td>Front end Development </td>
								<td>Back end Development</td>
							</tr>
							<tr>
								<td> Ecommerce Development</td>
								<td>Technology Assessment and Consultation</td>
							</tr>
							<tr>
								<td>Web Design </td>
								<td>Subscription Site development</td>
							</tr>
						</tbody>
					</Table>
				</Row>
				<hr />
			</Container>
		</div>
	);
}

export default About;
