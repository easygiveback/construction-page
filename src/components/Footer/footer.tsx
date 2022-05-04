import { FC, useState, useEffect } from 'react';
import Card from '../Card/card';
import { Container, Row, Col } from 'reactstrap';
import styles from './footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer__inner']}>
				<div className={styles['footer__container']}>
					<Row>
						<Col md={6} lg={3}>
							<img src='./hdm-logo.png' className={styles['footer__logo']} />
						</Col>
						<Col md={6} lg={3}>
							<div>
								<p>Studioproduktion Interaktive Medien</p>
								<p>Sommersemester 2022</p>
								<p>Hochschule der Medien</p>
							</div>
						</Col>
						<Col md={6} lg={3}>
							<div className={styles['footer__contact-wrapper']}>
								<p className={styles['footer__headlinemargin']}>Kontakt</p>
								<div className={styles['footer__contact']}>
									<img src='./mail-logo.png' />
									<p>info@easygiveback.de</p>
								</div>
								<div className={styles['footer__contact']}>
									<img src='./telefon-logo.png' />
									<p>+49 151 57 900 940</p>
								</div>
							</div>
						</Col>
						<Col md={6} lg={3}>
							<div>
								<p className={styles['footer__headlinemargin']}>
									<a href='./imprint'>Impressum</a>
								</p>
								<p>Angaben gemäß § 5 TMG</p>
								<p>Hochschule der Medien</p>
								<p>Nobelstraße 10</p>
								<p>70569 Stuttgart</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
