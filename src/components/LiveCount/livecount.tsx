import { useState, useEffect } from 'react';
import styles from './livecount.module.scss';

const LiveCount = () => {
	const [timerDays, setTimerDays] = useState<number>();
	const [timerHours, setTimerHours] = useState<number>();
	const [timerMinutes, setTimerMinutes] = useState<number>();
	const [timerSeconds, setTimerSeconds] = useState<number>();

	let interval: ReturnType<typeof setInterval>;

	const startTimer = () => {
		const countDownDate = new Date('June 30,2022 18:00:00').getTime();

		interval = setInterval(() => {
			const now = new Date().getTime();

			const distance = countDownDate - now;

			const days = Math.floor(distance / (24 * 60 * 60 * 1000));
			const hours = Math.floor(
				(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);

			if (distance < 0) {
				//Stop Timer
				// @ts-ignore
				clearInterval(interval.current);
			} else {
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		});
	};

	useEffect(() => {
		startTimer();
	});

	return (
		<>
			<section className={styles.livecount}>
				<section className={styles['livecount__timer']}>
					<div className={styles['livecount__clock']}>
						<section className={styles['livecount__numbers__days']}>
							<p className={styles['livecount__numbers']}>{timerDays}</p>
							<small>Tagen</small>
						</section>
						<section>
							<p className={styles['livecount__numbers']}>{timerHours}</p>
							<small>Stunden</small>
						</section>
						<span className={styles['livecount__numbers']}>:</span>
						<section>
							<p className={styles['livecount__numbers']}>{timerMinutes}</p>
							<small>Minuten</small>
						</section>
						<span className={styles['livecount__numbers']}>:</span>
						<section>
							<p className={styles['livecount__numbers']}>{timerSeconds}</p>
							<small>Sekunden</small>
						</section>
					</div>
				</section>
			</section>
		</>
	);
};

export default LiveCount;
