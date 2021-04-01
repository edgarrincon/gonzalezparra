export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-expand-lg navbar-default navbar-fixed-top"
    >
      <div>
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
          <a href="#page-top">
            <img src="img/logoGPA.jpg" alt="logoGPA"></img>
          </a>{" "}
        </div>
        <div className="menupc">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about">NOSTROS</a>
            </li>
            <li>
              <a href="#services">SERVICIOS</a>
            </li>
            <li>
              <a href="#team">EQUIPO</a>
            </li>
            <li>
              <a href="#features">VALORES</a>
            </li>
            <li>
              <a href="#testimonials">CLIENTES</a>
            </li>
            <li>
              <a href="#portfolio">LEYES</a>
            </li>
            <li>
              <a href="#contact">CONTACTOS</a>
            </li>
          </ul>
        </div>

        <div
          className="navbar-collapse collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul
            className="menumobile nav navbar-nav"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <li>
              <a href="#about">NOSTROS</a>
            </li>
            <li>
              <a href="#services">SERVICIOS</a>
            </li>
            <li>
              <a href="#team">EQUIPO</a>
            </li>
            <li>
              <a href="#features">VALORES</a>
            </li>
            <li>
              <a href="#testimonials">CLIENTES</a>
            </li>
            <li>
              <a href="#portfolio">LEYES</a>
            </li>
            <li>
              <a href="#contact">CONTACTOS</a>
            </li>
            <li>
              <a href="https://wa.me/+13058429523?text=Hola.%20Estoy%20interesado%20en%20sus%20servicios:%20">
                Comunícate
                <img
                  className="btn-whatsapp-pulse"
                  src="img/icon/whatsapp.svg"
                  alt="whatsapp"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
