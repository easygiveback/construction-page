import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

//import static images
import easygivebackLogo from "../../public/easygiveback.png";
import facebookIcon from "../../public/facebook-icon.png";
import instagramIcon from "../../public/instagram-icon.png";
import tiktokIcon from "../../public/tiktok-icon.png";
import linkedInIcon from "../../public/linkedin-icon.png";
import githubIcon from "../../public/GitHub-Mark-Light-32px.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <div className={styles["header__imgWrapper"]}>
            <div className={styles["header__imgWrapper__easygivebackImg"]}>
              <Image src={easygivebackLogo} alt="easygiveback Logo" />
            </div>
          </div>
        </a>
      </Link>
      <div className={styles["header__iconwrapper"]}>
        <Link
          href="https://www.facebook.com/easygiveback"
          passHref
          prefetch={false}
        >
          <a target="_blank" rel="noopener noreferrer">
            <div className={styles["header__icons"]}>
              <Image src={facebookIcon} alt="Facebook Logo" />
            </div>
          </a>
        </Link>
        <Link
          href="https://www.instagram.com/easygiveback/"
          passHref
          prefetch={false}
        >
          <a target="_blank" rel="noopener noreferrer">
            <div className={styles["header__icons"]}>
              <Image src={instagramIcon} alt="Instagram Logo" />
            </div>
          </a>
        </Link>
        <Link
          href="https://www.tiktok.com/@easygiveback"
          passHref
          prefetch={false}
        >
          <a target="_blank" rel="noopener noreferrer">
            <div className={styles["header__icons"]}>
              <Image src={tiktokIcon} alt="TikTok Logo" />
            </div>
          </a>
        </Link>
        <Link
          href="https://www.linkedin.com/company/easygiveback/"
          passHref
          prefetch={false}
        >
          <a target="_blank" rel="noopener noreferrer">
            <div className={styles["header__icons"]}>
              <Image src={linkedInIcon} alt="LinkedIn Logo" />
            </div>
          </a>
        </Link>
        <Link href="https://github.com/easygiveback" passHref prefetch={false}>
          <a target="_blank" rel="noopener noreferrer">
            <div className={styles["header__icons"]}>
              <Image src={githubIcon} alt="GitHub Logo" />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
