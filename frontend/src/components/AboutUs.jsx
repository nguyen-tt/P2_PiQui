import thankyou from "../assets/thankyou.png";
import charlotte from "../assets/charlotte.png";
import alaric from "../assets/alaric.png";
import trung from "../assets/trung.png";
import "./aboutUs.css";

function AboutUs() {
  return (
    <body>
      <div className="about-us">
        <figure>
          <img className="thank-img" src={thankyou} alt="Thank you !" />
        </figure>
        <figure className="charac-img">
          <img className="alaric" src={alaric} alt="Alaric character" />
          {/* <figcaption>Alaric</figcaption> */}
          <img className="amani" src={trung} alt="Amani character" />
          {/* <figcaption>Amani</figcaption> */}
          <img
            className="charlotte"
            src={charlotte}
            alt="Charlotte character"
          />
          {/* <figcaption>Charlotte</figcaption> */}
          <img className="rudy" src={trung} alt="Rudy character" />
          {/* <figcaption>Rudy</figcaption> */}
          <img className="trung" src={trung} alt="Trung character" />
          {/* <figcaption>Trung</figcaption> */}
        </figure>
      </div>
      <div className="cheerUs">
        <h1>Soutenez-nous!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          commodi? Quas animi quisquam, maiores est perferendis labore natus
          cupiditate ipsum illo minus laudantium quidem veritatis velit? Dolorum
          veniam cupiditate harum.
        </p>
      </div>
    </body>
  );
}

export default AboutUs;
