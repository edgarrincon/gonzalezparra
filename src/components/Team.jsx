import Fade from "react-reveal/Fade";
export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <Fade right duration={1000} delay={600} distance="30px">
            <h2>Nuestro Equipo</h2>
            <p>
              La firma está compuesta por expertos globales, profesionales
              apasionados cuya motivación y dedicación a su trabajo es vital
              para el éxito.
            </p>
          </Fade>
        </div>
        <div id="row">
          <Fade bottom duration={1000} delay={600} distance="30px">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-3 col-sm-6 team"
                  >
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt={d.altTeam} className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
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
