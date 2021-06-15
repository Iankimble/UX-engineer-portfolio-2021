import { Row, Col, Container, Jumbotron, Button, Table, Accordion, Card } from 'react-bootstrap';

function BTP() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Container>
				<Jumbotron>
					<Row>
						<Col>
							<b style={{ fontSize: '50px' }}>Black Tech Philly</b>
							<br />
							<b>A virtual inclusive space for Black tech professionals to network and build together.</b>
						</Col>
						<Col style={{ float: 'right' }}>
							<Table striped bordered hover size="" bsPrefix="">
								<tbody>
									<tr>
										<th>Project Scope</th>
										<td>4 Weeks</td>
									</tr>
									<tr>
										<th>Project Type</th>

										<td>Non- Profit</td>
									</tr>
									<tr>
										<th>Project Role</th>
										<td>Primary UX Designer and Primary Web Developer, Primary Copy Writer</td>
									</tr>
									<tr>
										<th>Tools and Technology</th>
										<td>
											Figma, Google Office suite, React, React-bootstrap, Next.js Node.js,
											Sendgrid, Strapi CMS, Git, Netlify,
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
								<b style={{ fontSize: '35px', textAlign: 'center' }}>“No code switching- Just code”</b>
							</Col>
							<Col xs={12} sm={12} md={6} lg={6} xl={6}>
								<p style={{ fontSize: '20px' }}>
									<br />In March of 2020, I and two other developers (Khalil Sabor and Ryan Small)
									embarked on a journey to connect African Americans in tech from across the
									Philadelphia area to one another via a network with the mission of building
									solidarity, Facilitating discussion, and uplifting our communities. In order to
									realize our our mission we first needed to build a web application that would
									provide our members, sponsors and potnential members and sponsor all the information
									they need to help us build somthing remarkable.
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr />
				<Jumbotron>UX prototypes</Jumbotron>
				<h3 style={{ padding: '25px' }}>
					<b>Objective</b>
				</h3>
				<b style={{ fontSize: '35px' }}>
					The goal was to build a cross platform informational web application for potential members and
					sponsors to learn more about the program.
				</b>
				<Row />

				<hr />
				<h3 style={{ padding: '25px' }}>
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
				<h3 style={{ padding: '25px' }}>
					<b>Design</b>
				</h3>

				<Row>
					<Col xs={12} sm={12} md={6} lg={6} xl={6}>
						<b style={{ fontSize: '35px' }}>
							When designing for Black Tech Philly, I wanted to use familiar iconography that's
							representative of Philadelphia as well Black Solidarity, but with a unique and fun twist.
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
				<b style={{ fontSize: '35px' }}>
					The development process was focused on creating a web application that was simple, accessible and
					provided visitors with enough information to understand our mission.
				</b>
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
						<b style={{ fontSize: '35px' }}>Blog</b>
						<p>
							I did much research and found a CMS system called strapi which was easy to implement and
							build from
						</p>
						<br />
						<br />
					</Col>
					<Col>Image of feature</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} lg={6} xl={6}>
						<b style={{ fontSize: '35px' }}>Contact Form</b>
						<p>
							For the contact form I used a library called send grid. a simple email client built with
							node.js for users to reach the program for inquires and questions
						</p>
						<br />
						<br />
					</Col>
					<Col>Image of feature</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} lg={6} xl={6}>
						<b style={{ fontSize: '35px' }}> Dark Mode</b>
						<p>
							For the contact form I used a library called send grid. a simple email client built with
							node.js for users to reach the program for inquires and questions
						</p>
						<br />
						<br />
					</Col>
					<Col>Image of feature</Col>
				</Row>
				<h3>
					<b style={{ padding: '25px' }}>Pain points and Oppurtunities</b>
				</h3>
				<p>During development of the web app there were different things that sprung up that...</p>
				<hr />

				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3>Adapting to working independently </h3>
						<p>
							<b>Oppurtunity</b> Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
							an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
				</Row>
				<hr />
				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3>
							Incorporating the Strapi CMS, rendering markdown, hosting and creating a responsive, user
							friendly blog
						</h3>
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
						<h3>Building with Next.js</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
				</Row>
				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3> Coding Dark mode</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
				</Row>
				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3>Event Calendar system</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
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
export default BTP;
