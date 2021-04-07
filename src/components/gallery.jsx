import Fade from "react-reveal/Fade";
export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <Fade right duration={1000} delay={600} distance="30px">
            <h2>Galería Legal</h2>
            <p>
              Compendio de leyes vigentes en la República Bolivariana de
              Venezuela.
            </p>
          </Fade>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a href="https://venezuela.justia.com/federales/constitucion-de-la-republica-bolivariana-de-venezuela/">
                      <div className="hover-text">
                        <img src="img/logoGPA.png" alt="logo"></img>
                      </div>{" "}
                      <img
                        src="img/portfolio/constitucion.jpg"
                        className="img-responsive img-gallery"
                        alt="Project Title"
                      />
                    </a>{" "}
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a href="https://venezuela.justia.com/federales/codigos/codigo-organico-procesal-penal/gdoc/">
                      <div className="hover-text">
                        <img src="img/logoGPA.png" alt="logo"></img>
                      </div>{" "}
                      <img
                        src="img/portfolio/copp.jpg"
                        className="img-responsive img-gallery"
                        alt="Project Title"
                      />
                    </a>{" "}
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a href="https://venezuela.justia.com/federales/codigos/reforma-del-codigo-penal/gdoc/">
                      <div className="hover-text">
                        <img src="img/logoGPA.png" alt="logo"></img>
                      </div>{" "}
                      <img
                        src="img/portfolio/codigopenal.jpg"
                        className="img-responsive img-gallery"
                        alt="Project Title"
                      />
                    </a>{" "}
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a href="https://venezuela.justia.com/federales/codigos/codigo-civil/gdoc/">
                      <div className="hover-text">
                        <img src="img/logoGPA.png" alt="logo"></img>
                      </div>{" "}
                      <img
                        src="img/portfolio/codigocivil.jpg"
                        className="img-responsive img-gallery"
                        alt="Project Title"
                      />
                    </a>{" "}
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a href="https://venezuela.justia.com/federales/codigos/codigo-de-procedimiento-civil/gdoc/">
                      <div className="hover-text">
                        <img src="img/logoGPA.png" alt="logo"></img>
                      </div>{" "}
                      <img
                        src="img/portfolio/cpc.jpg"
                        className="img-responsive img-gallery"
                        alt="Project Title"
                      />
                    </a>{" "}
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a href="https://venezuela.justia.com/federales/leyes-organicas/ley-organica-para-la-proteccion-del-nino-y-del-adolescente/gdoc/">
                      <div className="hover-text">
                        <img src="img/logoGPA.png" alt="logo"></img>
                      </div>{" "}
                      <img
                        src="img/portfolio/Lopnna.jpg"
                        className="img-responsive img-gallery"
                        alt="Project Title"
                      />
                    </a>{" "}
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
