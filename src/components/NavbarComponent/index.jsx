import logo from "../../images/logo.svg";
import { hardcodedNavLinks, hardcodedSocials } from "../../utils/hardcodedData";

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {hardcodedNavLinks.map(({id, text, anchor}) => {
            return (
              <li key={id}>
                <a href={anchor} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {hardcodedSocials.map(({ id, address, icon }) => {
            return (
              <li key={id}>
                <a
                  href={address}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={`fab ${icon}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
