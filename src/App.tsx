import React from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <Header />
      <Intro />
    </div>
  );
}

export default App;
