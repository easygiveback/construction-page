import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import App from './App';
import reportWebVitals from './reportWebVitals';

// bootstrap grid styles
import '../node_modules/bootstrap/scss/bootstrap-grid.scss';

import './styles/global.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Helmet>
			<meta charSet='utf-8' />
			<title>easygiveback – Einfach Gutes tun.</title>
			<link rel='canonical' href='https://easygiveback.org' />
			<meta
				name='description'
				content='Web site created using create-react-app'
			/>
			<link
				rel='icon'
				href='https://hdm.easygiveback.de/wp-content/uploads/2022/01/cropped-Favicon_blau-1-32x32.png'
				sizes='32x32'
			/>
			<link
				rel='icon'
				href='https://hdm.easygiveback.de/wp-content/uploads/2022/01/cropped-Favicon_blau-1-192x192.png'
				sizes='192x192'
			/>
			<link
				rel='apple-touch-icon'
				href='https://hdm.easygiveback.de/wp-content/uploads/2022/01/cropped-Favicon_blau-1-180x180.png'
			/>
			<meta
				name='msapplication-TileImage'
				content='https://hdm.easygiveback.de/wp-content/uploads/2022/01/cropped-Favicon_blau-1-270x270.png'
			/>
		</Helmet>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
