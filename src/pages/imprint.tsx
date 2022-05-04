import Layout from '../components/Layout/layout';
import { Container, Row, Col } from 'reactstrap';

const Imprint = () => {
	return (
		<Layout>
			<Container>
				<Row>
					<Col>
						<a href='./'>Back to Home</a>
						<h1 className='font--lg font--medium'>Imprint goes here</h1>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default Imprint;
