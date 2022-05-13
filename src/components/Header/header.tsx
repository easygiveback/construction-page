import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="/">
        <img
          className={styles["header__easygivebackImg"]}
          src="./easygiveback.png"
          alt="easygiveback Logo"
        />
      </a>
      <div className={styles["header__iconwrapper"]}>
        <a href="https://www.facebook.com/easygiveback" target="_blank">
          <img className={styles["header__icons"]} src="./facebook-icon.png" alt="Facebook Logo" />
        </a>
        <a href="https://www.instagram.com/easygiveback/" target="_blank">
          <img className={styles["header__icons"]} src="./instagram-icon.png" alt="Instagram Logo" />
        </a>
        <a href="https://www.tiktok.com/@easygiveback" target="_blank">
          <img className={styles["header__icons"]} src="./tiktok-icon.png" alt="TikTok Logo" />
        </a>
        <a
          href="https://www.linkedin.com/company/easygiveback/"
          target="_blank"
        >
          <img className={styles["header__icons"]} src="linkedin-icon.png" alt="LinkedIn Logo" />
        </a>
        <a href="https://github.com/easygiveback" target="_blank">
          <img
            className={styles["header__icons"]}
            src="./GitHub-Mark-Light-32px.png"
            alt="GitHub Logo"
          />
        </a>
      </div>
    </div>
  );
};
export default Header;
