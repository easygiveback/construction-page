import {FC, useState} from "react";
import LiveCount from "../LiveCount/livecount";
import styles from "./card.module.scss";

import Button from "../Button/button";
import Livecount from "../LiveCount/livecount";
import classNames from "classnames";

interface CardProps {
  isImprint: boolean;
}

const Card: FC<CardProps> = ({isImprint}) => {
  const [flipMe, setFlipMe] = useState(false);
  const flip = classNames(
      styles["card__inner"],
      flipMe && styles["card__flip"]
  );
  if (!isImprint) {
    return (
        <>
          <div className={styles.card}>
            <div className={flip}>
              <div className={styles["card__front"]}>
                <h1>Easy what? easygiveback!</h1>
                <h2>Einfach Gutes tun in</h2>
                <Livecount/>
                <h3>Wir sehen uns auf der Media Night.</h3>
                <Button
                    setFlipMe={() => setFlipMe(!flipMe)}
                    name={"Mehr erfahren"}
                />
              </div>
              <div className={styles["card__back"]}>
                <p className={styles["card__back__description"]}>
                  Einfach Gutes tun – easygiveback.de ist eine Vermittlungsseite
                  für Spenden an gemeinnützige Organisationen, die in einem
                  studiengangübergreifenden Projekt an der Hochschule der Medien
                  in Stuttgart entwickelt wird. Die Webseite ermöglicht es, die
                  passenden gemeinnützigen Organisationen für sich zu finden und
                  direkt an mehrere zu spenden. Die Suche wird durch eine
                  intelligente Filterfunktion vereinfacht und man kann sich vor
                  einer Spende grundlegend über die Organisationen informieren. In
                  weiterführenden Semestern sollen auch ehrenamtliche Tätigkeiten,
                  Projekte, Sachspenden oder Patenschaften vermittelt werden.
                </p>
                <Button
                    setFlipMe={() => setFlipMe(!flipMe)}
                    name={"Zurück zum Countdown"}
                />
              </div>
            </div>
          </div>
        </>
    );
  } else {
    return (
        <>
          <div className={styles.card}>
            <div className={flip}>
              <a href="/">
                <div className={styles["card__backto"]}>
                  <p className={styles["card__backto__arrow"]}>&#10140;</p>
                </div>
              </a>
              <div className={styles["card__imprint"]}>
                <h1>Impressum</h1>
                <div className={styles["card__imprint__text"]}>
                  <p>Angaben gemäß § 5 TMG</p>
                  <p>Hochschule der Medien Nobelstraße 10 </p>
                  <p>70569 Stuttgart</p>
                  <p className={styles["card__imprint__bold"]}>
                    Vertreten durch:
                  </p>
                  <p>Alexander Görnert</p>
                  <p>Kontakt Telefon: +4915157900940</p>
                  <p>E-Mail: info@easygiveback.de</p>
                  <p className={styles["card__imprint__bold"]}>Umsatzsteuer-ID</p>
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                    Umsatzsteuergesetz:
                  </p>
                  <p>DE 224 427 890</p>
                  <p className={styles["card__imprint__bold"]}>
                    EU-Streitschlichtung
                  </p>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:
                  </p>
                  <p>https://ec.europa.eu/consumers/odr/.</p>
                  <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                  <p className={styles["card__imprint__bold"]}>
                    Verbraucherstreitbeilegung/Universalschlichtungsstelle
                  </p>
                  <p>
                    Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
    );
  }
};

export default Card;
