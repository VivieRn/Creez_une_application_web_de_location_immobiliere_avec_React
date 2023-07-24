import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner.js";
import { RentalList } from "./rentalList.js";
import { FlatDetails } from "./FlatDetails.js";
import Footer from "./Footer";
import "../style/App.css";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/flat/:id" element={<FlatDetails />} />
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
      </Router>
      <Footer />
    </div>
  );
}

export default App;
