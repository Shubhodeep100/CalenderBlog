import "./App.css";
import FAQ from "./components/FAQ";
import Features from "./components/Features";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Scrollreview from "./components/Scrollreview";
import Superpage from "./components/Superpage";
function App() {
  return (
    <div className="App space-y-20">
      <Navbar />
      <Hero />
      <Superpage />
      <Features/>
      <Scrollreview/>
      <Pricing/>
      <FAQ/>
    </div>
  );
}

export default App;
