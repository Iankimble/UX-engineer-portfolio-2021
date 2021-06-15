import { Row, Col, Container, Jumbotron, Button, Table, Accordion, Card } from 'react-bootstrap';

function Fstbrk() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Container>
				<Jumbotron>
					<Row>
						<Col>
							<b style={{ fontSize: '50px' }}>FST BRK</b>
							<br />
							<b>
								Financial literacy app and budgeting resource. Something more descriptive and a call to
								action for the user to view
							</b>
						</Col>
						<Col style={{ float: 'right' }}>
							<Table striped bordered hover size="" bsPrefix="">
								<tbody>
									<tr>
										<th>Project Scope</th>
										<td>8 Weeks</td>
									</tr>

									<tr>
										<th>Project Type</th>

										<td>Personal</td>
									</tr>
									<tr>
										<th>Project Role</th>
										<td>Primary UX Designer and Primary Web Developer</td>
									</tr>
									<tr>
										<th>Tools and Technology</th>
										<td>
											Figma, Google Office Suite, React.js, React-Bootstrap, Node.js, Sendgrid,
											Git, Netlify, AWS, Stripe API, Shopify CMS API
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
					<div />
				</Jumbotron>

				<Row>
					<Col>
						<h3 style={{ paddingBottom: '25px' }}>
							<b>Intention</b>
						</h3>

						<Row>
							<Col xs={12} sm={12} md={6} lg={6} xl={6}>
								<b style={{ fontSize: '35px', textAlign: 'center' }}>“For the love of the game”</b>
							</Col>
							<Col xs={12} sm={12} md={6} lg={6} xl={6}>
								<p style={{ fontSize: '20px' }}>
									I’ve always maintained two great interests in my time on this planet; design and
									basketball. As a creative, I naturally find elegance and grace in the expression of
									the sport, specifically in the power of and creativity of movement. The fluidity of
									a crossover, the variety of subtlety and power of a drive and finish to the basket,
									the veracity of a dunk. Juxtapose that with the camaraderie and pride of the many
									players from all backgrounds and levels who find joy in the game inspired me to
									create a brand that celebrates this unique beauty of the game we call basketball.
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr />
				<Jumbotron>UX prototypes</Jumbotron>
				<h3 style={{ paddingBottom: '25px' }}>
					<b>Objective</b>
				</h3>
				<b style={{ fontSize: '35px' }}>
					Develop a purpose for the brand- who is this for etc. Build to realize the structure Get feedback to
					improve experience
				</b>
				<Row />

				<hr />
				<h3>
					<b>Approach</b>
				</h3>
				<Row />
				<Accordion>
					<Card>
						<Card.Header style={{ textAlign: 'left' }}>
							<Accordion.Toggle as={Button} variant="link" eventKey="0">
								1. Ideate, Question, Imagine and Research
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<p>
									When formulating the program I started with the basic question of who this program
									was for and why? I worked through different things and conducted research to better
									understand and present. next i crafted a work shop with To begin I crafted a
									workshop of exercise that I would conduct with Khalil, and Ryan. The first and most
									important question I presented to the group was who are we making this program for
									and why? From there we collective began to formulate Ideas and attempted to not only
									explore but probe further into the ideas in order to better understand and ully
									realize what we wanted to do
								</p>
								<br />
								<img src="" style={{ backgroundColor: 'grey', height: '100px', width: '100px' }} />
								<br />
								<img src="" style={{ backgroundColor: 'grey', height: '100px', width: '100px' }} />
								<br />
								<img src="" style={{ backgroundColor: 'grey', height: '100px', width: '100px' }} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header style={{ textAlign: 'left' }}>
							<Accordion.Toggle as={Button} variant="link" eventKey="1">
								2. Strategize and Define
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body>
								<p>
									Once the idea and main goals were identified our next goal was to plan the approach
									and designate roles. Initially the goal was to work collaboratively in an agile
									format, with me taking on the lead role as front end developer and designer but
									unfortnatley the other developers were not able to work on the project so I did so
									independently and adjusted my plan accordingly. my new goals became.
								</p>

								<br />
								<ul>
									<li>wireframe and design the main components of the web application</li>
									<li>
										identify the technologies required to build the web application and accomplish
										the goals of the app
									</li>
									<li>Build the overall web application and work on each feature by the deadline</li>
								</ul>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header style={{ textAlign: 'left' }}>
							<Accordion.Toggle as={Button} variant="link" eventKey="2">
								3. Design and Explore
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body>
								<p>
									I worked through creating some wireframes for the web applications and then crafted
									a design guide for the logo. The idea was to incompass something philly based
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>

					<Card>
						<Card.Header style={{ textAlign: 'left' }}>
							<Accordion.Toggle as={Button} variant="link" eventKey="3">
								4. Develop and Test
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="3">
							<Card.Body>Lastly I went into the development process of working through ... </Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				<hr />
				<h3>
					<b>Design</b>
				</h3>

				<Row>
					<Col xs={12} sm={12} md={6} lg={6} xl={6}>
						<b style={{ fontSize: '35px' }}>
							The overall design of FSTBRK encompasses the dyanism and engergy of the sport. It is overall
							excitable but sleak and futuristic.
						</b>
					</Col>
					<Col>
						<div style={{ backgroundColor: 'grey', height: '400px', weight: '100px', margin: '5px' }} />
					</Col>
				</Row>
				<Row>
					<Col style={{ textAlign: 'left', fontSize: '35px' }}> Design Guide</Col>
				</Row>
				<Row>
					<Col>
						<Jumbotron>
							Design Guide
							<ul>
								<li>Colors</li>
								<li>Logo</li>
								<li>Typography font</li>
							</ul>
						</Jumbotron>
						<Row>
							<Col style={{ textAlign: 'left', fontSize: '35px' }}> Wireframes</Col>
						</Row>

						<div
							style={{
								height: '400px',
								overflow: 'scroll'
							}}
						>
							<Jumbotron> Wireframe Guide</Jumbotron>
							<Jumbotron> Wireframe Guide</Jumbotron>
							<Jumbotron> Wireframe Guide</Jumbotron>
						</div>
					</Col>
				</Row>
				<hr />
				<h3 style={{ padding: '25px' }}>
					<b>Development</b>
				</h3>

				<Row>
					<b style={{ fontSize: '35px' }}>
						The development process was to creatr somthing simple and easy to use as well as making the code
						base readable for others to view and modify in the near future self working
					</b>
				</Row>
				<Row>
					<Col style={{ textAlign: 'left', fontSize: '35px' }}>Tech Stack</Col>
				</Row>

				<Jumbotron>icons of tech</Jumbotron>
				<hr />
				<Row>
					<Col style={{ textAlign: 'left', fontSize: '35px' }}> Features</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} lg={6} xl={6}>
						<b style={{ fontSize: '35px' }}>E-commerce Store</b>
						<p>
							I did much research and found a CMS system called strapi which was easy to implement and
							build from
						</p>
						<br />
						<br />
					</Col>
					<Col>Image of feature</Col>
				</Row>
				<h3>
					<b>Pain Point and Oppurtunities</b>
				</h3>

				<p>During development of the web app there were different things that sprung up that...</p>
				<hr />

				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3>Adapting to working independently ?</h3>
						<p>
							<b>Oppurtunity</b> Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
							an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
				</Row>
				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3>Adapting to working independently ?</h3>
						<p>
							<b>Oppurtunity</b> Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
							an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
				</Row>
				<hr />

				<Jumbotron>
					Image of App on different device screens and call to action for app
					<div style={{ textAlign: 'right' }}>
						<Button>Repo</Button>
						<Button>App</Button>
					</div>
				</Jumbotron>
			</Container>
		</div>
	);
}
export default Fstbrk;
