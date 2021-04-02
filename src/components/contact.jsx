import { useState } from "react";
import emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";

const initialState = {
  name: "",
  lastname: "",
  tel: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, lastname, tel, email, message }, setState] = useState(
    initialState
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, lastname, tel, email, message);
    emailjs
      .sendForm("GMAIL", "TEMPLATE1", e.target, "user_oE8cWTx4JGX5goWBxthrf")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Mil Gracias por contactarnos!!! pronto le responderemos");
    e.target.reset();
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <Fade left duration={1000} delay={600} distance="30px">
                  <h2>Contáctanos</h2>
                  <p>
                    Puedes comunicarte con nosotros a través del formulario y
                    solicitar asesorías, agenda una cita, plantear dudas o
                    cualquier otro requerimiento, o si lo prefieres puedes
                    comunicarte por WhatsApps y con gusto te atenderemos.
                  </p>
                </Fade>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="form-control"
                        placeholder="Apellido"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        id="tel"
                        name="tel"
                        className="form-control"
                        placeholder="Teléfono"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <Fade right duration={1000} delay={600} distance="30px">
              <p>
                Para ir a nuestras oficinas, llamarnos o enviar un correo, haz
                clic en el icono.
              </p>
              <div className="contact-item">
                <a href="https://goo.gl/maps/u4Qp7vvX2byQzm7D9">
                  <p>
                    <span>
                      <img
                        className="contact-icon"
                        src="img/icon/address-location.svg"
                        alt="map"
                      ></img>{" "}
                      Dirección:
                    </span>
                    {props.data ? props.data.address : "Cargando..."}
                  </p>
                </a>
              </div>
              <div className="contact-item">
                <a href="tel:+584246132492">
                  <p>
                    <span>
                      <img
                        className="contact-icon"
                        src="img/icon/calling.svg"
                        alt="tel"
                      ></img>{" "}
                      Teléfono:
                    </span>{" "}
                    {props.data ? props.data.phone : "Cargando..."}
                  </p>
                </a>
              </div>
              <div className="contact-item">
                <a href="mailto:bsirailing@gmail.com">
                  <span>
                    <img
                      className="contact-icon"
                      src="img/icon/pink-mail.svg"
                      alt="mail"
                    ></img>
                    {""}
                    Correo:
                  </span>
                  {""}
                  {props.data ? props.data.email : "Cargando..."}
                </a>
              </div>
            </Fade>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <ul>
                    <li>
                      <a href={props.data ? props.data.twitter : "/"}>
                        <img
                          src="img/icon/twitter-round-line.svg"
                          alt="twitter"
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.instagram : "/"}>
                        <img
                          src="img/icon/instagram-round-line.svg"
                          alt="instagram-round-lines"
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.whatsapp : "/"}>
                        <img
                          src="img/icon/whatsapp-round-line.svg"
                          alt="WhatsApp"
                        ></img>
                      </a>
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2021 Gonzalez Parra & Asociados. Develop by{" "}
            <a href="https://standardsapps.com">Standards Apps</a>
          </p>
        </div>
      </div>
    </div>
  );
};
