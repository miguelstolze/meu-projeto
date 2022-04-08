import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Container from "./componets/LayOut/Container";
import Footer from "./componets/LayOut/Footer";
import NavBar from "./componets/LayOut/NavBar";
import Company from "./componets/Pages/Company";
import Contact from "./componets/Pages/Contact";
import Home from "./componets/Pages/Home";
import NewProject from "./componets/Pages/NewProject";
import Projects from "./componets/Pages/Projects";
function App() {
  return (
    <Router>
    <NavBar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Company" element={<Company />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/NewProject" element={<NewProject />}></Route>
        </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}


export default App;
