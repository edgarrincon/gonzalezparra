import Fade from "react-reveal/Fade";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <Fade left duration={1000} delay={600} distance="30px">
              <img
                src="img/about.jpg"
                className="img-responsive"
                alt="nosotros"
              />{" "}
            </Fade>
          </div>
          <div className="col-xs-12 col-md-6">
            <Fade right duration={1000} delay={600} distance="30px">
              <div className="about-text">
                <h2>Nosotros</h2>
                <p>{props.data ? props.data.paragraph : "Cargando..."}</p>
                <h3>¿Por qué escogernos?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-6">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "Cargando..."}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-6">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "lCargando..."}
                    </ul>
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
