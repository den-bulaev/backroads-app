import { hardcodedSocials } from "../../utils/hardcodedData";

const FooterComponent = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">
            home
          </a>
        </li>
        <li>
          <a href="#about" className="footer-link">
            about
          </a>
        </li>
        <li>
          <a href="#services" className="footer-link">
            services
          </a>
        </li>
        <li>
          <a href="#featured" className="footer-link">
            featured
          </a>
        </li>
      </ul>
      <ul className="footer-icons">
        {hardcodedSocials.map(({id, address, icon}) => {
          return (
            <li key={id}>
              <a
                href={address}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={`fab ${icon}`}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default FooterComponent;
