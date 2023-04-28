import thankyou from "../assets/thankyou.png";
import charlotte from "../assets/charlotte.png";
import alaric from "../assets/alaric.png";
import trung from "../assets/trung.png";
import amani from "../assets/amani.png";
import avatartest from "../assets/avatartest.png";
import stars from "../assets/stars.jpg";
import "../components/aboutUs.scss";

function AboutUs() {
  return (
    <div className="about-wrapper">
      <div className="background" />
      <div className="about-us">
        <figure className="thank-img">
          <img src={thankyou} alt="Thank you !" />
        </figure>
        <figure className="charac-img">
          <div className="alaric-container">
            <img className="alaric" src={alaric} alt="Alaric character" />
            <figcaption>Alaric</figcaption>
          </div>
          <div className="amani-container">
            <img className="amani" src={amani} alt="Amani character" />
            <figcaption>Amani</figcaption>
          </div>
          <div className="charlotte-container">
            <img
              className="charlotte"
              src={charlotte}
              alt="Charlotte character"
            />
            <figcaption>Charlotte</figcaption>
          </div>
          <div className="rudy-container">
            <img className="rudy" src={avatartest} alt="Rudy character" />
            <figcaption>Rudy</figcaption>
          </div>
          <div className="trung-container">
            <img className="trung" src={trung} alt="Trung character" />
            <figcaption>Trung</figcaption>
          </div>
        </figure>
      </div>
      <hr />
      <div className="cheerUs">
        <h1>Miaou!</h1>
        <br />
        <p>Bienvenue sur la page de notre jeu web !</p>
        <br />
        <p>
          Nous sommes un groupe de développeurs passionnés de chats, et nous
          avons créé un jeu "Qui est-ce ?" unique en son genre. Avec notre amour
          pour les chats et notre expertise en développement de jeux, nous avons
          créé un jeu amusant et engageant qui met en scène nos amis félins
          préférés.
        </p>
        <br />
        <p>
          Nous avons soigneusement conçu chaque chat dans notre jeu avec des
          traits de personnalité uniques pour rendre le jeu encore plus amusant
          et excitant. Nous sommes fiers de notre création et nous espérons que
          vous apprécierez autant que nous avons aimé le créer.
        </p>
        <br />
        <p>
          Si vous êtes un amoureux des chats et que vous cherchez un jeu de
          société amusant et interactif pour jouer, vous êtes au bon endroit.
        </p>
        <img className="ratingStars" src={stars} alt="rating stars" />
      </div>
    </div>
  );
}

export default AboutUs;
