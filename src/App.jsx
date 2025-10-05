import ToDo from "./components/ToDo";
import styles from "../src/app.module.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <ToDo />
      <Footer />
    </div>
  );
}

export default App;
