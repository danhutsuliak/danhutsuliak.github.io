import React from "react";
import Footer from "./footer/footer.component";
import Header from "./header/header.component";
import Hero from "./hero/hero.component";
import Works from "./works/works.component";

function App() {
  return (
    <div id="home">
      <Header />
      <Hero />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
