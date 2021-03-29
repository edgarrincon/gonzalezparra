export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Servicios</h2>
          <p>
            En aras a poder atender mejor los diversos actores sociales la
            práctica profesional nos ha encaminado a especializarnos en las
            distintas áreas empresariales, personales y familiares con el
            objetivo de dar un servicio multidisciplinario integral.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <img className="iconservices" src={d.icon} alt={d.alt}></img>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
