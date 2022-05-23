import Image from "next/image";
import styles from "./image.module.scss";

export default function BackgroundImage({ src, alt }) {
  return (
    <div className={styles["background-image"]}>
      <Image src={src} alt={alt} layout="fill" priority="true" quality="100" />
    </div>
  );
}
