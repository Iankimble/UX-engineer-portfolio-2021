import { Row, Col, Container, Jumbotron, Button, Table, Accordion, Card } from 'react-bootstrap';

function Coindexter() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Container>
				<Jumbotron>
					<Row>
						<Col>
							<b style={{ fontSize: '50px' }}>Coindexter</b>
							<br />
							<b>Budgeting app and financial literacy resource.</b>
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
										<td>Personal</td>
									</tr>
									<tr>
										<th>Project Role</th>
										<td>Primary UX Designer and Primary Web Developer</td>
									</tr>
									<tr>
										<th>Tools and Technology</th>
										<td>Figma, Google Office Suite, React.js, React-Bootstrap, Git, Netlify</td>
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
							<b>Challenge</b>
						</h3>

						<Row>
							<Col xs={12} sm={12} md={6} lg={6} xl={6}>
								<b style={{ fontSize: '35px', textAlign: 'center' }}>
									How do you make approaching financial literacy simple and undaunting, while also
									encoruaging users to take actionable interest in their financial health?
								</b>
							</Col>
							<Col xs={12} sm={12} md={6} lg={6} xl={6}>
								<p style={{ fontSize: '20px' }}>
									Having even just a basic undertstanding of financial concepts can have a
									dramatically great impact on a person's quality of life. Although this may seem like
									common knowledge, many people, espically in urban areas haven't been provided the
									tools and oppurtunities to contextualize and think about money beyond paying bills
									and buying the things that they want. As someone who has seen and experienced first
									hand how financial ignorance and poor decision making can limit a person's
									oppurtunities and even more broadly, handicap entire generations, I took it upon
									myself to formulate a question to articulate and ulitmatley attempt to find resolve
									to this problem.
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr />
				<h3>
					<b>Objective</b>
				</h3>

				<b style={{ fontSize: '35px' }}>
					Design and develop a simple and easy-to-use cross platform web application that will allow users to
					generate a basic budget report based on their monthly income.
				</b>
				<hr />

				<h3 style={{ padding: '25px' }}>
					<b>Approach</b>
				</h3>

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
									Working from the question of "how to make financial literacy simple and undaunting",
									I began by exploring fundamental financial concepts and devising ways of
									articulating these concepts technologically. I also did research into digital
									products and services that already exist that accomplish the same goal.
								</p>
								<p>
									I determined that the best way to approach my question was by developing a budgeting
									calculator. In practice, creating a budget is a simple yet immensely effective way
									of understanding and taking ownership of one's financial health. The calculator that
									I would be developing would be based on the users monthly income and regular monthly
									expenses and would visualize their expenses with a pie chart showing them their
									financial allocations holistically.
								</p>
								<br />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header style={{ textAlign: 'left' }}>
							<Accordion.Toggle as={Button} variant="link" eventKey="1">
								2. Discern what's important and Strategize
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body>
								<p>
									Once I identfied what I wanted to develop, I began thinking about what were the
									priorities and must haves in this application and how would I go about completing
									it. I itemized my objectives and went through each one to accomplish my goal.
								</p>
								<ul>
									<li>
										Identify and understand what it will require to code a simple budgeting
										calculator.
									</li>
									<li>Identify and design the basic layout of the web application.</li>
									<li>
										Craft a design guide the attempts to illicit a welcoming tone when implemented
										into the web application.
									</li>
									<li>Develop the web application into a working concept</li>
								</ul>
								<br />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header style={{ textAlign: 'left' }}>
							<Accordion.Toggle as={Button} variant="link" eventKey="2">
								3. Iterate through Design
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body>
								<p>
									It was very important to ensure that the application illicits a welcoming and warm
									tone to the user so that they would be more inclined to use it more than once. I
									took inspiration from many banking applications that already exist that have similar
									tools but deviated by simplifiying the scope and usability of the calculator.
								</p>

								<p>My wireframes and design guide can be found below.</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>

					<Card>
						<Card.Header style={{ textAlign: 'left' }}>
							<Accordion.Toggle as={Button} variant="link" eventKey="3">
								4. Explore technologies and Develop
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="3">
							<Card.Body>
								<p>
									With a clear understanding of what I wanted to build visually, the next challenge
									was to write the logic that would do the budget calculations. Specifically, I wanted
									to be able to illustrate how much money a user has, how much money they spend, and
									how much money they have left over at a specific interval, in this case 1 month.
								</p>
								<p>The development of the application is expressed further below.</p>
							</Card.Body>
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
							Simplicity juxtapose with a warm and friendly tone was the goal when designing the
							application with the intended outcome of the user not only feeling confident using it but
							also developing and interest to continue to use it.
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
				<p style={{ fontSize: '20px' }}>
					<b style={{ fontSize: '35px' }}>
						The development process was to focused on getting a working concept of a functional budgeting
						calculator.
					</b>
				</p>
				<p style={{ fontSize: '20px' }}>
					I devised to create a budget calculator by building a series of step forms that would capture the
					users responses and pass and store them to a state component via props. One benefit of scafolding
					the web application this way was that I was able to persist user inputs from one form to another,
					allowing the user to jump back and forth from different steps in the form to make changes to their
					inputs if need be. Once the user completes and submits the form, I pass the values captued in the
					state component through a series of functions that would run a variety of calcuations, mostly based
					on basic arithmetic, as well as through a component called React-Google-Charts, that transforms that
					data into a color coded pie chart to visualize the user's results.
				</p>
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
						<b style={{ fontSize: '35px' }}>Budgeting Calculator</b>
						<p>
							The budgeting calculator is the primary focus of the web application. Through a series of
							class component based step forms and basic functions using arithmetic, users input their
							monthly income and once submitted are provided a pie chart and table style breakdown of
							their expenses.
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
						<h3> Budget Calculator Logic</h3>
						<p>
							The initial challenge of developing the budget calculator was making the form user friendly.
							Through research I found a way of segmenting the form into smaller step components.
						</p>
					</Col>
				</Row>

				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3> Dynamic Form Calculator Logic</h3>
						<p>
							One major bit of logic that I would like to implement in the future is a dynamic form
							calculator. The intended purpose of making the form dynamic would be for a real time
							shopping list. This would allow users to add and remove items and the value and quantity
							associated with that item and see the total of their shopping list change as they shop.
						</p>
					</Col>
				</Row>

				<Row style={{ textAlign: 'left' }}>
					<Col>
						<h3> Finacial Literacy Content</h3>
						<p>
							In order to create oppurtunities to engage with potential users and motivate them to invest
							more interest (no pun intended) into their financial health I had planned on incorporating a
							video catalog of fundamental finance concepts. This content would have been created by a
							close friend who works as a financial advisor but unfortunately this future wouldnt come to
							fruition do to conflicting schedules.
						</p>
					</Col>
				</Row>
				<hr />

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
export default Coindexter;
