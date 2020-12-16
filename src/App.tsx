import React from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <Header />
      <Intro />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
