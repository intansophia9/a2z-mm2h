import React, { Component } from "react";

//COMPANY LOGO
import logo from "../../images/edited1.svg"; //REACT-ROUTER-DOM
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//CSS
import styles from "./Navbar.module.scss";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.hamburgerWrapper1 = React.createRef();
    this.hamburgerWrapper2 = React.createRef();
    this.hamburgerWrapper3 = React.createRef();
    this.state = {
      handleBurger: false,
      handleApartment: false,
      navBackground: "transparent",
    };
    this.showApartmentMenu = this.showApartmentMenu.bind(this);
    this.hideApartmentMenu = this.hideApartmentMenu.bind(this);
  }

  // HANDLE HAMBURGER BTN
  handleBurger = () => {
    const hamburgerAnimation1 = this.hamburgerWrapper1.current;
    const hamburgerAnimation2 = this.hamburgerWrapper2.current;
    const hamburgerAnimation3 = this.hamburgerWrapper3.current;
    hamburgerAnimation1.classList.toggle(styles.barChg1);
    hamburgerAnimation2.classList.toggle(styles.barChg2);
    hamburgerAnimation3.classList.toggle(styles.barChg3);

    this.setState({
      handleBurger: !this.state.handleBurger,
    });
  };

  // HANDLE APARTMENT DROPDOWN
  showApartmentMenu = () => {
    this.setState({ handleApartment: true }, () => {
      document.addEventListener("click", this.hideApartmentMenu);
    });
  };

  hideApartmentMenu = () => {
    this.setState({ handleApartment: false }, () => {
      document.removeEventListener("click", this.hideApartmentMenu);
    });
  };

  //updates apartment dropdown when screen is resized
  updateApartment() {
    if (window.innerWidth < 800) {
      this.setState({
        handleApartment: false,
      });
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor =
        window.scrollY < 70 ? "transparent" : "whitesmoke";

      this.setState({ navBackground: backgroundcolor });
    });
  }
  render() {
    return (
      <nav
        className={styles.navbar}
        style={{ backgroundColor: `${this.state.navBackground}` }}
      >
        {/* Logo */}
        <Link to="/">
          <img className={styles.DALogo} src={logo} alt="MM2H" />
        </Link>

        {/* Hamburger button */}
        <div className={styles.hamburger} onClick={this.handleBurger}>
          <div ref={this.hamburgerWrapper1} className={styles.bar1}></div>
          <div ref={this.hamburgerWrapper2} className={styles.bar2}></div>
          <div ref={this.hamburgerWrapper3} className={styles.bar3}></div>
        </div>

        <ul
          className={
            this.state.handleBurger
              ? `${styles.navLink} ${styles.showNav}`
              : `${styles.navLink}`
          }
        >
          {/* HOME */}
          <li>
            <Link to="/" onClick={this.handleBurger}>
              Home
            </Link>
          </li>
          {/* BENEFITS */}
          <li>
            <Link to="/benefits" onClick={this.handleBurger}>
              Benefits
            </Link>
          </li>

          {/* SERVICES */}

          {/* Services Button */}
          <div>
            <p className={styles.apartmentBtn} onClick={this.showApartmentMenu}>
              Services
            </p>
            {/* Services Button END */}

            {/* Services Dropdown */}
            <div>
              <ul
                className={
                  this.state.handleApartment
                    ? `${styles.dropdownMenu} ${styles.dropdownAnimation}`
                    : `${styles.dropdownMenu} ${styles.popupAnimation}`
                }
              >
                <li>
                  <HashLink to="/services#property" onClick={this.handleBurger}>
                    Property
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/services#car" onClick={this.handleBurger}>
                    Import&nbsp;car
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/services#domestic" onClick={this.handleBurger}>
                    Domestic&nbsp;help
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/services#education"
                    onClick={this.handleBurger}
                  >
                    Education
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/services#tax" onClick={this.handleBurger}>
                    Tax
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/services#family" onClick={this.handleBurger}>
                    Family&nbsp;needs
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/services#business" onClick={this.handleBurger}>
                    Business&nbsp;needs
                  </HashLink>
                </li>
              </ul>
            </div>
            {/* Apartment Dropdown END */}
          </div>

          {/* PROCEDURES */}
          <li>
            <Link to="/procedures" onClick={this.handleBurger}>
              Procedures
            </Link>
          </li>
          {/* ABOUT */}
          <li>
            <Link to="/about" onClick={this.handleBurger}>
              About&nbsp;Us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
