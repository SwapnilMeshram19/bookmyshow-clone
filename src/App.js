import "./App.css";
import { CarouselSection } from "./Components/Homepage/CarouselSection";
// import Footer from "./Routes/Footer";
import Navbar from "./Components/Navbar";
// import Router from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselSection />
      {/* <Router />
      <Footer /> */}

    </div>
  );
}

export default App;
