import { FC } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  setFlipMe: () => void;
  name: String;
}

const Button: FC<ButtonProps> = ({ setFlipMe, name }) => {
  return (
    <button className={styles.button} onClick={setFlipMe}>
      {name}
    </button>
  );
};

export default Button;
