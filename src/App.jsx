import AboutComponent from "./components/AboutComponent";
import HeroComponent from "./components/HeroComponent";
import NavbarComponent from "./components/NavbarComponent";
import ServiceComponent from "./components/ServiceComponent";
import FooterComponent from "./components/FooterComponent";
import TourComponent from "./components/TourComponent";

import { hardcodedServices, hardcodedTours } from "./utils/hardcodedData";

function App() {
  return (
    <>
      <NavbarComponent />
      <HeroComponent />
      <AboutComponent />

      <section className="section services" id="services">
        <div className="section-title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div className="section-center services-center">
          {hardcodedServices.map((service) => {
            return <ServiceComponent {...service} key={service.serviceId} />;
          })}
        </div>
      </section>

      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div className="section-center featured-center">
          {hardcodedTours.map((tour) => {
            return <TourComponent {...tour} key={tour.tourId} />;
          })}
        </div>
      </section>

      <FooterComponent />
    </>
  );
}

export default App;
