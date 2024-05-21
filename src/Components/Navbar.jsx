import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import DropdownLink from "./Reusable/DropdownLink";

import "../Styles/navbar.scss";

const Navbar = () => {
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const handleDropdownMouseEnter = () => {
    setDropdownHovered(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownHovered(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-column">
        <div className="navbar-logo">
          <img src="logos/linkstraders.png" alt="Logo" />
        </div>
      </div>
      <div className="navbar-column">
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link
                to="/profile"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                PROFILE
              </Link>
              <RiArrowDropDownLine size={"25px"} />
              <div className={`dropdown ${dropdownHovered ? "show" : ""}`}>
                <div className="dropdown-content">
                  <DropdownLink to="/aboutus" label="About Us" />
                  <DropdownLink
                    to="/values-and-strength"
                    label="Values & Strengths"
                  />
                  <DropdownLink
                    to="/mission-and-vision"
                    label="Mission & Vision"
                  />
                  <DropdownLink to="/whyus" label="Why Us" />
                </div>
              </div>
            </li>

            <li>
              <Link to="/animals-feed">ANIMAL FEED</Link>
              <RiArrowDropDownLine size={"25px"} />
              <div
                className={`dropdown ${dropdownHovered ? "show" : ""}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="dropdown-content">
                  <DropdownLink
                    to="/rhodes-grass-hay"
                    label="Rhodes Grass Hay"
                  />
                  <DropdownLink to="/alfalfa-hay" label="Alfalfa Hay" />
                  <DropdownLink to="/corn-silage" label="Corn Silage" />
                  <DropdownLink to="/wheat-straw" label="Wheat Straw" />
                  <DropdownLink to="/seasonal-straw" label="Seasonal Straw" />
                  <DropdownLink to="/maize" label="Maize (Yellow Corn)" />
                </div>
              </div>
            </li>
            <li>
              <Link to="/fruits-vegetables">FRUITS & VEGETABLES</Link>
              <RiArrowDropDownLine size={"25px"} />
              <div
                className={`dropdown ${dropdownHovered ? "show" : ""}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="dropdown-content">
                  <DropdownLink to="/potatoes" label="Potatoes" />
                  <DropdownLink to="/red-onions" label="Red Onions" />
                  <DropdownLink
                    to="/mandarin-kinnow"
                    label="Mandarin / kinnow"
                  />
                  <DropdownLink
                    to="/اليوسفي-البرتقالي"
                    label="اليوسفي-البرتقالي"
                  />
                  <DropdownLink to="/mangoes" label="Mangoes" />
                </div>
              </div>
            </li>
            <li>
              <Link to="/cereal-grains">CEREAL & GRAINS</Link>
              <RiArrowDropDownLine size={"25px"} />
              <div
                className={`dropdown ${dropdownHovered ? "show" : ""}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="dropdown-content">
                  <DropdownLink to="/rice" label="Rice" />
                  <DropdownLink to="/sesame-seeds" label="Sesame seeds" />
                  <DropdownLink
                    to="/others-cereals-grains"
                    label="Other Cereals & Grains"
                  />
                </div>
              </div>
            </li>
            <li>
              <Link to="/turmeric">TURMERIC</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-column">
        <div className="navbar-button">
          <Link to="/contactus">
            <button className="rounded-button text-sm">Get in touch</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
