import Footer from '../Footer/footer';
import styles from './layout.module.scss';
import Header from '../Header/header';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	);
}
