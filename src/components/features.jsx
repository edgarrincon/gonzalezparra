import Fade from "react-reveal/Fade";
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <Fade left duration={1000} delay={600} distance="30px">
            <h2>Valores</h2>
          </Fade>
        </div>
        <div className="row">
          <Fade bottom duration={1000} delay={600} distance="30px">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <img src={d.icon} alt={d.altFeatures}></img>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Cargando..."}
          </Fade>
        </div>
      </div>
    </div>
  );
};
