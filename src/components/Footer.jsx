import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.attribution}>
        Coded and Designed by
        <a href="https://github.com/gvillarroel-dev"> Villarroel Giuliana</a>
      </p>
    </footer>
  );
};

export default Footer;
