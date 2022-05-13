import { FC, useState } from "react";
import Livecount from "../LiveCount/livecount";
import styles from "./card.module.scss";

import Button from "../Button/button";
import classNames from "classnames";

interface CardProps {
  isImprint: boolean;
}

const Card: FC<CardProps> = ({ isImprint }) => {
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
              <div><h1>easy<span className={styles["card__front__h1divider"]}>giveback</span></h1></div>


              <Livecount />
              <h3>Wir sehen uns auf der Media Night.</h3>
              <Button
                setFlipMe={() => setFlipMe(!flipMe)}
                name={"Mehr erfahren"}
              />
            </div>
            <div className={styles["card__back"]}>
              <p className={styles["card__back__description"]}>
                Die Spendenseite easygiveback.de ist eine Plattform, mit der man einfach und effektiv an gemeinnützige
                Organisationen oder Vereine spenden kann. In einem studiengangübergreifenden Projekt an der Hochschule
                der Medien in Stuttgart wurde die Spendenplattform entwickelt, die es ermöglicht, die passenden
                Wohltätigkeitsorganisationen für sich zu finden und direkt an mehrere zu spenden. Die Suche wird durch
                eine intelligente Filterfunktion vereinfacht und man kann sich vor einer Spende grundlegend über die
                Hilfsorganisationen informieren.
                In weiterführenden Semestern sollen auch ehrenamtliche Tätigkeiten, Projekte, Sachspenden oder
                Patenschaften vermittelt werden. Gemeinsam machen wir gute Taten zu Tatsachen - einfach easy Geld für
                dein Herzensprojekt spenden
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
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
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
