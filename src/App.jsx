import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Profile from "./Components/Profile";
import AnimalsFeed from "./Components/animalsFeed";
import Fruits_vegetables from "./Components/fruits_vegetables";
import Cereal_grains from "./Components/cereal_grains";
import Turmeric from "./Components/Turmeric";
import "../src/index.css";
import Contactus from "./Components/Contactus";
import Aboutus from "./Components/Aboutus";
import Value from "./Components/Value";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mission_vision from "./Components/Mission_vision";
import Whyus from "./Components/Whyus";
import Rhodes_Grass from "./Components/Rhodes_Grass";
import Alfalfa from "./Components/Alfalfa";
import Corn from "./Components/Corn";
import Wheat_Straw from "./Components/Wheat_Straw";
import Seasonal_Straw from "./Components/Seasonal_Straw";
import Maize from "./Components/Maize";
import Potatoes from "./Components/Potatoes";
import Red_Onions from "./Components/Red_Onions";
import Mandarin from "./Components/Mandarin";
import Alyousafi from "./Components/Alyousafi";
import Mangoes from "./Components/Mangoes";
import Rice from "./Components/Rice";
import Sesame from "./Components/Sesame";
import Others from "./Components/Others";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/animals-feed" element={<AnimalsFeed />} />
        <Route path="/fruits-vegetables" element={<Fruits_vegetables />} />
        <Route path="/cereal-grains" element={<Cereal_grains />} />
        <Route path="/turmeric" element={<Turmeric />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/values-and-strength" element={<Value />} />
        <Route path="/mission-and-vision" element={<Mission_vision />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/rhodes-grass-hay" element={<Rhodes_Grass />} />
        <Route path="/alfalfa-hay" element={<Alfalfa />} />
        <Route path="/corn-silage" element={<Corn />} />
        <Route path="/wheat-straw" element={<Wheat_Straw />} />
        <Route path="/seasonal-straw" element={<Seasonal_Straw />} />
        <Route path="/maize" element={<Maize />} />
        <Route path="/potatoes" element={<Potatoes />} />
        <Route path="/red-onions" element={<Red_Onions />} />
        <Route path="/mandarin-kinnow" element={<Mandarin />} />
        <Route path="/اليوسفي-البرتقالي" element={<Alyousafi />} />
        <Route path="/mangoes" element={<Mangoes />} />
        <Route path="/rice" element={<Rice />} />
        <Route path="/sesame-seeds" element={<Sesame />} />
        <Route path="/others-cereals-grains" element={<Others />} />
        {/* Define routes for other pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;
