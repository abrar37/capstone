import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Reservations from "./pages/reservation/Reservation";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="reservation" element={<Reservations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
