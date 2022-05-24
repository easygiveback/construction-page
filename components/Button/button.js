import styles from "./button.module.scss";

export default function Button({ setFlipMe, name }) {
  return (
    <button className={styles.button} onClick={setFlipMe}>
      {name}
    </button>
  );
}
