import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner.js";
import Banner2 from "./Banner2.js";
import { RentalList } from "./rentalList.js";
import { FlatDetails } from "./FlatDetails.js";
import APropos from "./aPropos";
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
            path="/a-propos"
            element={
              <>
                <Banner2 />, <APropos />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
