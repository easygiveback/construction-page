import react from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/layout';
import BackgroundImage from './components/Image/image-background';
import Card from './components/Card/card';
// Import pages
import Imprint from './pages/imprint';

const test;
const URL =
	'https://wnklr.art/wp-json/wp/v2/organisationen/686?_fields=acf&acf_format=standard';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<Layout>
								<BackgroundImage src='/background.png' alt='' />
								<Card />
							</Layout>
						}
					/>
					<Route path='/imprint' element={<Imprint />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
