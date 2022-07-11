import "./css/bootstrap.min.css";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-reboot.min.css";
import "./css/animate.css";
import "./css/owl.carousel.css";
import "./css/owl.theme.css";
import "./css/owl.transitions.css";
import "./css/magnific-popup.css";
import "./css/jquery.countdown.css";
import "./css/style.css";
import "./css/colors/scheme-01.css";
import "./css/coloring.css";

import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CountDown from "./components/CountDown";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <CountDown />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/author/:id" element={<Author />} />
          <Route path="/item-details/:id" element={<ItemDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
