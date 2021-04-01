import Fade from "react-reveal/Fade";
export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <Fade right duration={1000} delay={600} distance="30px">
            <h2>Nuestros Clientes</h2>
          </Fade>
        </div>
        <div className="row">
          <Fade bottom duration={1000} delay={600} distance="30px">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt={d.altTestimonial} />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
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
