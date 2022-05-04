import { FC, useState, useEffect } from 'react';
import styles from './header.module.scss';

const Header = () => {
	return (
		<div className={styles.header}>
			<img width='300px' src='./easygiveback.png' />
			<div className={styles['header__iconwrapper']}>
				<a>
					<img className={styles['header__icons']} src='./facebook-icon.png' />
				</a>
				<a href='https://www.instagram.com/easygiveback/' target='_blank'>
					<img className={styles['header__icons']} src='./instagram-icon.png' />
				</a>
				<a>
					<img className={styles['header__icons']} src='./tiktok-icon.png' />
				</a>
				<a>
					<img className={styles['header__icons']} src='linkedin-icon.png' />
				</a>
			</div>
		</div>
	);
};
export default Header;
