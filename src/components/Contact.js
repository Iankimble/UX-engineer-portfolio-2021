import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import style from '../components/styles/primary_style.module.css';

// Conditional logic for submitting form
// Logic for checking/ validating form
// Mobile layout

function Contact() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Container>
				<h2>Contact </h2>
				<br />
				<Row>
					<Col sm={12} md={6} lg={6} xl={6}>
						<div>
							<img src="" alt="" style={{ height: '100px', width: '100px' }} />
							<br />

							<h1>
								<b>Let's Connec</b>t
							</h1>
							<p style={{ fontSize: '25px' }}>
								Interested in working together or perhaps have a general question? Send me a message and
								let's start a conversation! I'm always looking to build relationships and share and
								exchange information.
								<br />
							</p>
						</div>
					</Col>
					<Col sm={12} md={6} lg={6} xl={6}>
						<Form className={style.form}>
							<br />

							<Form.Group className={style.form_group}>
								<Form.Label style={{ paddingTop: '1px', float: 'left' }}> Name</Form.Label>
								<Form.Control type="text" placeholder="The Example Company" />
							</Form.Group>

							<Form.Group className={style.form_group}>
								<Form.Label style={{ paddingTop: '1px', float: 'left' }}>
									Company
									<Form.Text className="text-muted">Optional</Form.Text>
								</Form.Label>
								<Form.Control type="text" placeholder="The Example Company" />
							</Form.Group>

							<Form.Group className={style.form_group}>
								<Form.Label style={{ paddingTop: '1px', float: 'left' }}>Email address</Form.Label>
								<Form.Control type="text" placeholder="name@example.com" />
							</Form.Group>

							<Form.Group className={style.form_group}>
								<Form.Label style={{ paddingTop: '1px', float: 'left' }}>Inquiry</Form.Label>
								<Form.Control as="select" size="md">
									<option>Options select</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Form.Control>
								<Form.Group className={style.form_group}>
									<Form.Label style={{ paddingTop: '1px', float: 'left' }}>Message</Form.Label>
									<Form.Control as="textarea" rows={2} />
								</Form.Group>
							</Form.Group>

							<Button className={style.project_card_buttons}>Send</Button>
						</Form>
						<br />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Contact;
