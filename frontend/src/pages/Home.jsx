import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import "../components/home.scss";
import UselessFactsApi from "@components/Home/UselessFactsApi";
import Pseudo from "@components/Home/Pseudo";
import axios from "axios";

export default function Home({
  setPseudoInput,
  pseudoInput,
  regiteredPseudo,
  setRegiteredPseudo,
  setWins,
}) {
  const [userNameReg, setUserNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
      pseudo: userNameReg,
      password: passwordReg,
    });
  };

  const login = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        pseudo: userName,
        password,
      })
      .then((res) => {
        if (res.data.message) {
          setLoginStatus(res.data.message);
        } else {
          setRegiteredPseudo(res.data[0].pseudo);
          setWins(res.data[0].wins);
        }
      });
  };

  return (
    <div className="centering-home">
      <div className="page-bg">
        <div className="animation-wrapper">
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
        </div>
      </div>

      <div className="container-homePage">
        <h1>Bienvenue sur PiQui !</h1>
        <p className="rules-link-text">Vous pouvez créer un compte...</p>
        {!regiteredPseudo && (
          <div className="register-login">
            <div className="register">
              <button
                type="button"
                onClick={() => {
                  document
                    .querySelector(".register-input")
                    .classList.toggle("display");
                }}
              >
                <h2>Inscription</h2>
              </button>
              <div className="register-input">
                <label htmlFor="regPseudo">pseudo</label>
                <input
                  id="regPseudo"
                  type="text"
                  onChange={(e) => {
                    setUserNameReg(e.target.value);
                  }}
                />
                <label htmlFor="regPassword">mot de passe</label>
                <input
                  id="regPassword"
                  type="password"
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                />
                <button onClick={register} type="button">
                  Créer
                </button>
              </div>
            </div>
            <div className="login">
              <button
                type="button"
                onClick={() => {
                  document
                    .querySelector(".login-input")
                    .classList.toggle("display");
                }}
              >
                <h2>connexion</h2>
              </button>
              <div className="login-input">
                <label htmlFor="pseudo">pseudo</label>
                <input
                  id="pseudo"
                  type="text"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                <label htmlFor="password">mot de passe</label>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button onClick={login} type="button">
                  Se connecter
                </button>
              </div>
              <h3>{loginStatus}</h3>
            </div>
          </div>
        )}
        <p className="rules-link-text">
          ... Ou consulter les <Link to="rules">règles du jeu</Link> avant de
          lancer une partie !
        </p>
        <p className="rules-link-text">Sinon vous pouvez directement jouer !</p>
        <Pseudo
          setPseudoInput={setPseudoInput}
          pseudoInput={pseudoInput}
          regiteredPseudo={regiteredPseudo}
        />
        <UselessFactsApi />
      </div>
    </div>
  );
}

Home.propTypes = {
  pseudoInput: PropTypes.string.isRequired,
  setPseudoInput: PropTypes.func.isRequired,
  regiteredPseudo: PropTypes.string.isRequired,
  setRegiteredPseudo: PropTypes.func.isRequired,
  setWins: PropTypes.func.isRequired,
};
