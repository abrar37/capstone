import "./App.css";
import { Header, Home, About, Blogs, Reservation, Footer } from "./pages";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
