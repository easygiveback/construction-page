import styles from "./livecount.module.scss";
import { useEffect, useState } from "react";

export default function LiveCount() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("June 30,2022 18:00:00").getTime();

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

        if (hours < 10) {
          setTimerHours(`0${hours}`);
        } else {
          setTimerHours(`${hours}`);
        }
        if (minutes < 10) {
          setTimerMinutes(`0${minutes}`);
        } else {
          setTimerMinutes(`${minutes}`);
        }
        if (seconds < 10) {
          setTimerSeconds(`0${seconds}`);
        } else {
          setTimerSeconds(`${seconds}`);
        }
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <>
      <section className={styles.livecount}>
        <section className={styles["livecount__timer"]}>
          <div className={styles["livecount__clock"]}>
            <section className={styles["livecount__numbers__days"]}>
              <p className={styles["livecount__numbers__days__number"]}>
                {timerDays}
              </p>
              <small>Tage</small>
            </section>
            <div className={styles["livecount__clock__wrapper"]}>
              <section>
                <p className={styles["livecount__numbers"]}>{timerHours}</p>
                <small>Stunden</small>
              </section>
              <span className={styles["livecount__numbers"]}>:</span>
              <section>
                <p className={styles["livecount__numbers"]}>{timerMinutes}</p>
                <small>Minuten</small>
              </section>
              <span className={styles["livecount__numbers"]}>:</span>
              <section>
                <p className={styles["livecount__numbers"]}>{timerSeconds}</p>
                <small>Sekunden</small>
              </section>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
