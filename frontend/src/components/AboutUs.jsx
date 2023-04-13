import thankyou from "../assets/thankyou.png";
import charlotte from "../assets/charlotte.png";
import alaric from "../assets/alaric.png";
import trung from "../assets/trung.png";
import stars from "../assets/stars.jpg";
import "./aboutUs.css";

function AboutUs() {
  return (
    <body>
      <div className="about-us">
        <figure className="thank-img">
          <img src={thankyou} alt="Thank you !" />
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
        <br />
        <p>Bienvenue sur la page de soutien de notre jeu web !</p>
        <br />
        <p>
          Nous sommes ravis que vous ayez choisi de jouer à notre jeu et nous
          sommes là pour vous aider à profiter pleinement de votre expérience de
          jeu.
        </p>
        <br />
        <p>
          Nous comprenons que parfois vous pouvez rencontrer des défis
          techniques, des questions sur le gameplay ou des problèmes de compte,
          et nous sommes là pour vous offrir notre soutien et résoudre vos
          problèmes.
        </p>
        <br />
        <p>
          Que vous soyez un nouveau joueur ou que vous ayez déjà de l'expérience
          dans notre jeu, nous sommes déterminés à vous offrir un soutien de
          qualité pour vous aider à profiter pleinement de l'univers de jeu que
          nous avons créé.
        </p>
      </div>
      <img className="ratingStars" src={stars} alt="rating stars" />
    </body>
  );
}

export default AboutUs;
