import React, { useState, useEffect } from "react";
import "./App.css";
import imgapresentacao from "../src/assets/img/aprecacao.png";
import iconreact from "../src/assets/icon/iconreact.svg";
import myphoto from "../src/assets/img/myphoto.png";
import figma from "../src/assets/icon/figma.svg";
import botaoFake from "../src/assets/icon/botaoFake.svg";
import bootstrap from "../src/assets/icon/boodstrap.svg";
import css from "../src/assets/icon/css.svg";
import react from "../src/assets/icon/react.svg";
import n8n from "../src/assets/icon/n8n.svg";
import figmaPretoBranco from "../src/assets/icon/figmaPretoBranco.svg";
import C from "../src/assets/icon/C.svg";
import sql from "../src/assets/icon/sql.svg";
import net from "../src/assets/icon/NET.svg";
import html from "../src/assets/icon/html.svg";
import js from "../src/assets/icon/js.svg";
import api from "../src/assets/icon/api.svg";
import wordpress from "../src/assets/icon/wordpress.svg";
import git from "../src/assets/icon/git.svg";
import github from "../src/assets/icon/github.svg";
import elementor from "../src/assets/icon/elementor.svg";
import tell from "../src/assets/icon/tell.svg";
import linkedin from "../src/assets/icon/linkedin.svg";
import whatsapp from "../src/assets/icon/whatsapp.svg";
import arow from "../src/assets/icon/arow.svg";

import testeprojeto from "../src/assets/img/testeprojeto.png";
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [highlightedIcons, setHighlightedIcons] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animação aleatória dos ícones
  useEffect(() => {
    const intervalId = setInterval(() => {
      const numberOfHighlights = Math.floor(Math.random() * 3) + 2; // 2-4 ícones
      const randomIndices = [];

      while (randomIndices.length < numberOfHighlights) {
        const randomIndex = Math.floor(Math.random() * 18); // 18 ícones total
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }

      setHighlightedIcons(randomIndices);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="portfolio">
        <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
          <div className="nav-container">
            <a href="#home" className="nav-logo">
              Marcus Vinicius
            </a>

            <ul className="nav-menu">
              <li className="nav-item">
                <a
                  href="#home"
                  className={`nav-link ${
                    activeSection === "home" ? "active" : ""
                  }`}
                >
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#sobre"
                  className={`nav-link ${
                    activeSection === "sobre" ? "active" : ""
                  }`}
                >
                  sobre
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#habilidades"
                  className={`nav-link ${
                    activeSection === "habilidades" ? "active" : ""
                  }`}
                >
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#habilidades"
                  className={`nav-link ${
                    activeSection === "habilidades" ? "active" : ""
                  }`}
                >
                  portfolio
                </a>
              </li>
            </ul>

            <button className="mobile-menu-btn">☰</button>
          </div>
        </nav>
        <div className="apresentacao">
          <h1>Olá, eu sou Marcus Vinicius</h1>
          <h2>
            Desenvolvedor Full-stack apaixonado por criar soluções inovadoras
          </h2>
          <button class="button-wrapper" onclick="handleClick()">
            <div class="button-text-section">Contrate-me</div>
            <div class="button-arrow-section">
              <img src={arow} class="arrow-icon" alt="" />
            </div>
          </button>
        </div>
        <div>
          <img className="imgapres" src={imgapresentacao} alt="" />
        </div>
        <h1 className="title1">Portfólio</h1>
      </div>
      <div className="container">
        <h1 className="title">Sobre mim</h1>
        <div className="item conteriner-1">
          <div className="sobre">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>

            <h1>Sou apaixonado por tecnologia</h1>
            <h2>
              Sou apaixonado por tecnologia, inovação e aprendizado contínuo.
              Gosto de explorar novas{" "}
            </h2>
            <div className="input-sobre">
              <h3>
                &lt;h1&gt;Olá, eu sou Marcus!&lt;/h1&gt;
                <br />
                &lt;p&gt;Desenvolvedor Full Stack&lt;/p&gt;
              </h3>
            </div>
          </div>
          <img className="react" src={iconreact} alt="" />
          <div className="bash">
            <div className="bash-bolas">
              <div className="bolas">
                <div className="bola1"></div>
                <div className="bola2"></div>
                <div className="bola3"></div>
              </div>
              <h2>bash</h2>
            </div>

            <h2 className="sub-verde">$ npm install marcus-romao</h2>
            <h3 className="sub-branca">
              + FullStackDeveloper@2025
              <br />
              Habilidades: React, C#, Node, SQL, .NET, N8N Experiência:
              Automação, APIs e Desenvolvimento Web
            </h3>
            <h2 className="sub-verde">$</h2>
          </div>
        </div>
        <div className="item conteriner-2 ">
          <div className="title-sobre">
            <h2>Sobre mim</h2>
          </div>

          <div className="ajus">
            <img className="img-photo" src={myphoto} alt="" />
            <img className="figma" src={figma} alt="" />
          </div>
        </div>
        <div className="item conteriner-3">
          <div className="contact-sobre">
            <h2>tell:</h2>
            <h3 className="email-sobre">+14 99808 0710</h3>
            <h2>site:</h2>
            <h3 className="email-sobre">@marcusavanso06@gmail.com</h3>
            <h2>emaill:</h2>
            <h3>@marcusavanso06@gmail.com</h3>
          </div>
          <div className="sobre2">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>

            <h1>
              Sou apaixonado por tecnologia, inovação
              <br /> e aprendizado contínuo. Gosto de
              <br /> explorar novas ferramentas,
              <br /> especialmente nas áreas de
              <br /> desenvolvimento web, automações e<br /> inteligência
              artificial. <br />
              Nos meus momentos livres, gosto de <br />
              aprimorar projetos pessoais, criar interfaces <br />
              modernas e entender o impacto da tecnologia nas pessoas e nas
              empresas.
            </h1>
          </div>
        </div>
      </div>

      <div class="cont">
        <div class="it justo" >
          <div className="habilidades">
            <h1>Minhas Habilidades:</h1>
            <h2>
              Tecnologias e ferramentas que domino para criar
              <br /> soluções completas
            </h2>
            <button class="button-wrapper" onclick="handleClick()">
              <div class="button-text-section">Contrate-me</div>
              <div class="button-arrow-section">
                <img src={arow} class="arrow-icon" alt="" />
              </div>
            </button>
          </div>
        </div>
        <div class="it">
          <div className="log">
            <img src={bootstrap} alt="" />
          </div>
        </div>
        <div class="it log">
          <div className="selecionado ">
            <img src={css} alt="" />
          </div>
        </div >
        <div class="it">
          <div className="log">
            <img src={react} alt="" />
          </div>
        </div>
        <div class="it log">
          <div className="selecionado ">
            <img src={n8n} alt="" />
          </div>
        </div>
        <div class="it">
          <div className="log">
            <img src={figmaPretoBranco} alt="" />
          </div>
        </div>
        <div class="it">
          <div className="log">
            <img src={C} alt="" />
          </div>
        </div>
        <div class="it">
          <div className="log">
            <img src={net} alt="" />
          </div>
        </div>
        <div class="it">
          <div className="log">
            <img src={html} alt="" />
          </div>
        </div>
        <div class="it">
          <div className="log">
            <img src={js} alt="" />
          </div>
        </div>
        <div class="it">
          <div className="log">
            <img src={sql} alt="" />
          </div>
        </div>
        <div class="it">
          <div className="log">
            <img src={api} alt="" />
          </div>
        </div>
        <div class="it">
          <div className="log">
            <img src={wordpress} alt="" />
          </div>
        </div>
        <div class="it log">
          <div className="selecionado ">
            <img src={git} alt="" />
          </div>
        </div>
        <div class="it">
          <div className="log">
            <img src={github} alt="" />
          </div>
        </div>
        <div class="it log">
          <div className="selecionado">
            <img src={elementor} alt="" />
          </div>
        </div>
      </div>
      <div class="container-port">
        <div class="item-port">
          {" "}
          <div className="Port">
            <h1>Meus Projetos</h1>
            <h2>Alguns dos projetos que desenvolvi</h2>
          </div>
        </div>
        <div class="item-port portifo">
          <div className="card">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>
            <img className="imgport" src={testeprojeto} alt="" />
            <h2>Sou apaixonado por tecnologia,</h2>
            <h3>
              Sou apaixonado por tecnologia, inovação e aprendizado contínuo.
              Gosto de explorar novas{" "}
            </h3>
            <div>
              <img className="logosPort" src={html} alt="" />
              <img className="logosPort" src={wordpress} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>
            <img className="imgport" src={testeprojeto} alt="" />
            <h2>Sou apaixonado por tecnologia,</h2>
            <h3>
              Sou apaixonado por tecnologia, inovação e aprendizado contínuo.
              Gosto de explorar novas{" "}
            </h3>
            <div>
              <img className="logosPort" src={html} alt="" />
              <img className="logosPort" src={wordpress} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>
            <img className="imgport" src={testeprojeto} alt="" />
            <h2>Sou apaixonado por tecnologia,</h2>
            <h3>
              Sou apaixonado por tecnologia, inovação e aprendizado contínuo.
              Gosto de explorar novas{" "}
            </h3>
            <div>
              <img className="logosPort" src={html} alt="" />
              <img className="logosPort" src={wordpress} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>
            <img className="imgport" src={testeprojeto} alt="" />
            <h2>Sou apaixonado por tecnologia,</h2>
            <h3>
              Sou apaixonado por tecnologia, inovação e aprendizado contínuo.
              Gosto de explorar novas{" "}
            </h3>
            <div>
              <img className="logosPort" src={html} alt="" />
              <img className="logosPort" src={wordpress} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>
            <img className="imgport" src={testeprojeto} alt="" />
            <h2>Sou apaixonado por tecnologia,</h2>
            <h3>
              Sou apaixonado por tecnologia, inovação e aprendizado contínuo.
              Gosto de explorar novas{" "}
            </h3>
            <div>
              <img className="logosPort" src={html} alt="" />
              <img className="logosPort" src={wordpress} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>
            <img className="imgport" src={testeprojeto} alt="" />
            <h2>Sou apaixonado por tecnologia,</h2>
            <h3>
              Sou apaixonado por tecnologia, inovação e aprendizado contínuo.
              Gosto de explorar novas{" "}
            </h3>
            <div>
              <img className="logosPort" src={html} alt="" />
              <img className="logosPort" src={wordpress} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>
            <img className="imgport" src={testeprojeto} alt="" />
            <h2>Sou apaixonado por tecnologia,</h2>
            <h3>
              Sou apaixonado por tecnologia, inovação e aprendizado contínuo.
              Gosto de explorar novas{" "}
            </h3>
            <div>
              <img className="logosPort" src={html} alt="" />
              <img className="logosPort" src={wordpress} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>
            <img className="imgport" src={testeprojeto} alt="" />
            <h2>Sou apaixonado por tecnologia,</h2>
            <h3>
              Sou apaixonado por tecnologia, inovação e aprendizado contínuo.
              Gosto de explorar novas{" "}
            </h3>
            <div>
              <img className="logosPort" src={html} alt="" />
              <img className="logosPort" src={wordpress} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>
            <img className="imgport" src={testeprojeto} alt="" />
            <h2>Sou apaixonado por tecnologia,</h2>
            <h3>
              Sou apaixonado por tecnologia, inovação e aprendizado contínuo.
              Gosto de explorar novas{" "}
            </h3>
            <div>
              <img className="logosPort" src={html} alt="" />
              <img className="logosPort" src={wordpress} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="foot textFoot">
          <div className="trabalharJunto">
            <h1>Vamos trabalhar juntos?</h1>
            <h2>
              Estou sempre interessado em novos projetos <br /> e oportunidades.
            </h2>
          </div>
        </div>
        <div class="foot conta ">
          <div className="contac">
            <img src={linkedin} alt="" />
            <img src={whatsapp} alt="" />
            <img src={tell} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
