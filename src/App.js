import "./App.css";
import Navbar from "./page/Navbar";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";
import Page3 from "./page/Page3";
import Footer from "./page/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Footer />
    </div>
  );
}

export default App;
