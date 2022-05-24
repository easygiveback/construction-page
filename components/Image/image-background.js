import Image from "next/image";
import styles from "./image.module.scss";
import BackgroundImageHands from "../../public/background.webp";

export default function BackgroundImage({ alt }) {
  return (
    <div className={styles["background-image"]}>
      <Image
        src={BackgroundImageHands}
        layout="fill"
        alt={alt}
        priority="true"
        quality="100"
      />
    </div>
  );
}
