import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner.js";
import Banner2 from "./Banner2.js";
import { RentalList } from "./rentalList.js";
import { FlatDetails } from "./FlatDetails.js";
import About from "./About.js";
import NotFound from "./NotFound.js";
import Footer from "./Footer";
import "../style/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/flat/:id" element={<FlatDetails />} />
          <Route
            path="/about"
            element={
              <>
                <Banner2 />, <About />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Banner />
                <RentalList />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;