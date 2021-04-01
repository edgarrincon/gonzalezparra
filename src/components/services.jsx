import Fade from "react-reveal/Fade";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <Fade left duration={1000} delay={600} distance="30px">
            <h2>Servicios</h2>
            <p>
              En aras a poder atender mejor los diversos actores sociales la
              práctica profesional nos ha encaminado a especializarnos en las
              distintas áreas empresariales, personales y familiares con el
              objetivo de dar un servicio multidisciplinario integral.
            </p>
          </Fade>
        </div>
        <div className="row">
          <Fade bottom duration={1000} delay={600} distance="30px">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    {" "}
                    <img
                      className="iconservices"
                      src={d.icon}
                      alt={d.altIcon}
                    ></img>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "Cargando..."}
          </Fade>
        </div>
      </div>
    </div>
  );
};
