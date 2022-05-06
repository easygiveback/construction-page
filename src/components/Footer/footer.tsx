import { Row, Col } from "reactstrap";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__inner"]}>
        <div className={styles["footer__container"]}>
          <Row>
            <Col md={6} lg={3}>
              <a
                className={styles["footer__container__hdm-logo"]}
                href="https://www.hdm-stuttgart.de/"
                target="_blank"
              >
                <img src="./hdm-logo.png" className={styles["footer__logo"]} />
              </a>
            </Col>
            <Col md={6} lg={3}>
              <div>
                <p>Studioproduktion Interaktive Medien</p>
                <p>Sommersemester 2022</p>
                <p>Hochschule der Medien</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className={styles["footer__contact-wrapper"]}>
                <p className={styles["footer__headlinemargin"]}>Kontakt</p>
                <div className={styles["footer__contact"]}>
                  <img src="./mail-logo.png" />
                  <p>info@easygiveback.de</p>
                </div>
                <div className={styles["footer__contact"]}>
                  <img src="./telefon-logo.png" />
                  <p>+49 151 57 900 940</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div>
                <p className={styles["footer__headlinemargin"]}>
                  <a href="./impressum">Impressum</a>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
