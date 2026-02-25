import { useState } from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <Header dark={dark} onToggle={() => setDark((d) => !d)} />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
