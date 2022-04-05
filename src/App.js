import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "./componets/LayOut/Container";
import Company from "./componets/Pages/Company";
import Contact from "./componets/Pages/Contact";
import Home from "./componets/Pages/Home";
import NewProject from "./componets/Pages/NewProject";
function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Company">Company</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/NewProject">NewProject</Link>
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Company" element={<Company />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/NewProject" element={<NewProject />}></Route>
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;
