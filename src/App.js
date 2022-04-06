import "./App.css";
import { Homepage } from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Router from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {/* <Router /> */}
      <Footer />

    </div>
  );
}

export default App;
