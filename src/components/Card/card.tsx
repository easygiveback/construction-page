import { FC, useState } from 'react';
import LiveCount from '../LiveCount/livecount';
import styles from './card.module.scss';

import Button from '../Button/button';
import Livecount from '../LiveCount/livecount';
import classNames from 'classnames';

const Card = () => {
	const [flipMe, setFlipMe] = useState(false);
	const flip = classNames(
		styles['card__inner'],
		flipMe && styles['card__flip']
	);
	return (
		<>
			<div className={styles.card}>
				<div className={flip}>
					<div className={styles['card__front']}>
						<h1>Easy what? Easy giveback!</h1>
						<h2>Einfach Gutes tun in</h2>
						<Livecount />
						<Button
							setFlipMe={() => setFlipMe(!flipMe)}
							name={'Mehr erfahen'}
						/>
					</div>
					<div className={styles['card__back']}>
						<p className={styles['card__back__description']}>
							Einfach Gutes tun – easygiveback.de ist eine Vermittlungsseite für
							Spenden an gemeinnützige Organisationen, die in einem
							studiengangübergreifenden Projekt an der Hochschule der Medien in
							Stuttgart entwickelt wird. Die Webseite ermöglicht es, die
							passenden gemeinnützigen Organisationen für sich zu finden und
							direkt an mehrere zu spenden. Die Suche wird durch eine
							intelligente Filterfunktion vereinfacht und man kann sich vor
							einer Spende grundlegend über die Organisationen informieren. In
							weiterführenden Semestern sollen auch ehrenamtliche Tätigkeiten,
							Projekte, Sachspenden oder Patenschaften vermittelt werden.
						</p>
						<Button
							setFlipMe={() => setFlipMe(!flipMe)}
							name={'Zurück zum Countdown'}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
