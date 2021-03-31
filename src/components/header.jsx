import Fade from "react-reveal/Fade";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a
                    href="#about"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Nosotros
                  </a>{" "}
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
