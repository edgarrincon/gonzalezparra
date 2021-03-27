export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            React
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#features"
                data-toggle="collapse"
                data-target=".collapse"
              >
                Features
              </a>
            </li>
            <li>
              <a href="#about" data-toggle="collapse" data-target=".collapse">
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                data-toggle="collapse"
                data-target=".collapse"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                data-toggle="collapse"
                data-target=".collapse"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                data-toggle="collapse"
                data-target=".collapse"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" data-toggle="collapse" data-target=".collapse">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" data-toggle="collapse" data-target=".collapse">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
