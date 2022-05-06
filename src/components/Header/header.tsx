import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="/">
        <img
          className={styles["header__easygivebackImg"]}
          src="./easygiveback.png"
        />
      </a>
      <div className={styles["header__iconwrapper"]}>
        <a href="https://www.facebook.com/easygiveback" target="_blank">
          <img className={styles["header__icons"]} src="./facebook-icon.png" />
        </a>
        <a href="https://www.instagram.com/easygiveback/" target="_blank">
          <img className={styles["header__icons"]} src="./instagram-icon.png" />
        </a>
        <a href="https://www.tiktok.com/@easygiveback" target="_blank">
          <img className={styles["header__icons"]} src="./tiktok-icon.png" />
        </a>
        <a
          href="https://www.linkedin.com/company/easygiveback/"
          target="_blank"
        >
          <img className={styles["header__icons"]} src="linkedin-icon.png" />
        </a>
      </div>
    </div>
  );
};
export default Header;
