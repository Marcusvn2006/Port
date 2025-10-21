import React, { useState, useEffect } from "react";
import "./App.css";
import imgapresentacao from "../src/assets/img/aprecacao.png";
import iconreact from "../src/assets/icon/iconreact.svg";
import myphoto from "../src/assets/img/myphoto.png";
import innova from "../src/assets/img/Innova.png";
import devflix from "../src/assets/img/devflix.png";
import locadoraMvc from "../src/assets/img/locadoraMVc.png";
import mauicalculadora from "../src/assets/img/mauiCalculadora.png";
import apiescola from "../src/assets/img/apiesscola.png";
import figma from "../src/assets/icon/figma.svg";
import elementorPreto from "../src/assets/icon/elementorPreto.svg";

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
const App = () => { const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [highlightedIcons, setHighlightedIcons] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu mobile

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

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="portfolio">
        <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
          <div className="nav-container">
            <a href="#home" className="nav-logo">
              Marcus Vinicius
            </a>

            <ul className={`nav-menu ${isMenuOpen ? "nav-menu-active" : ""}`}>
              <li className="nav-item">
                <a
                  href="#home"
                  className={`nav-link ${
                    activeSection === "home" ? "active" : ""
                  }`}
                  onClick={closeMenu}
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
                  onClick={closeMenu}
                >
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#habilidades"
                  className={`nav-link ${
                    activeSection === "habilidades" ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portifolio"
                  className={`nav-link ${
                    activeSection === "portifolio" ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Portfólio 
                </a>
              </li>
            </ul>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
    
    
        <div className="apresentacao">
          <h1>Olá, eu sou Marcus Vinicius</h1>
          <h2>
            Desenvolvedor Full-stack apaixonado por criar soluções inovadoras
          </h2>
         <a href="#contratar" className="button-wrapper">
  <div className="button-text-section">Contrate-me</div>
  <div className="button-arrow-section">
    <img src={arow} className="arrow-icon" alt="" />
  </div>
</a>

        </div>
        <div>
          <img className="imgapres" src={imgapresentacao} alt="" />
        </div>
        <h1 className="title1">Portfólio</h1>
      </div>
      <div id="sobre" className="container">
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

      <div id="habilidades" class="cont">
        <div class="it justo">
          <div className="habilidades">
            <h1>Minhas Habilidades:</h1>
            <h2>
              Tecnologias e ferramentas que domino para criar
              <br /> soluções completas
            </h2>
            <a href="#contratar" className="button-wrapper">
  <div className="button-text-section">Contrate-me</div>
  <div className="button-arrow-section">
    <img src={arow} className="arrow-icon" alt="" />
  </div>
</a>
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
        </div>
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
      <div id="portifolio" class="container-port">
        <div class="item-port">
          {" "}
          <div className="Port">
            <h1>Meus Projetos</h1>
            <h2>Alguns dos projetos que desenvolvi</h2>
          </div>
        </div>
        <div class="item-port portifo">
          <a
            href="https://souzaservicesusa.com/home/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <div className="bolas">
                <div className="bola1"></div>
                <div className="bola2"></div>
                <div className="bola3"></div>
              </div>
              <img className="imgport" src={testeprojeto} alt="" />
              <h2>Souza's Services</h2>
              <h3>
                Um site que desenvolvi enquanto trabalhava para a empresa
                Trajetória do Sucesso, atendendo a uma cliente dos Estados
                Unidos (Huntersville, NC). Ela solicitou um design sofisticado,
                que transmitisse elegância e profissionalismo, destacando os
                serviços de limpeza oferecidos.
              </h3>
              <div className="logos">
                <img className="logosPort" src={elementorPreto} alt="" />
                <img className="logosPort" src={wordpress} alt="" />
              </div>
            </div>
          </a>
          <a
            href="https://innovacustombuilders.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <div className="bolas">
                <div className="bola1"></div>
                <div className="bola2"></div>
                <div className="bola3"></div>
              </div>
              <img className="imgport" src={innova} alt="" />
              <h2>Innova Custom Builders</h2>
              <h3>
                Desenvolvimento do site da Innova Custom Builders, empresa
                norte-americana especializada em construções residenciais e
                reformas de alto padrão. O projeto exige um design moderno e
                confiável que transmita sofisticação, atenção aos detalhes e
                qualidade “premium”, refletindo a excelência dos serviços de
                construção personalizada oferecidos pela empresa.
              </h3>
              <div className="logos">
                <img className="logosPort" src={elementorPreto} alt="" />
                <img className="logosPort" src={wordpress} alt="" />
              </div>
            </div>
          </a>
          <a
            href="https://vercel.com/marcusviniciusavansoromao77gmailcoms-projects/devflixmain-jn0p"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <div className="bolas">
                <div className="bola1"></div>
                <div className="bola2"></div>
                <div className="bola3"></div>
              </div>
              <img className="imgport" src={devflix} alt="" />
              <h2>DevFlix</h2>
              <h3>
                Uma plataforma de streaming desenvolvida com React e Node.js,
                que permite a visualização e exploração de um catálogo de
                filmes. Este foi um dos meus projetos de aprendizado em React,
                onde pude aperfeiçoar a manipulação de APIs e o consumo dinâmico
                de dados para criação de interfaces modernas e responsivas.
              </h3>
              <div className="logos">
                <img className="logosPort" src={react} alt="" />
                <img className="logosPort" src={api} alt="" />
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Marcusvn2006/LocadoraMvc"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <div className="bolas">
                <div className="bola1"></div>
                <div className="bola2"></div>
                <div className="bola3"></div>
              </div>
              <img className="imgport" src={locadoraMvc} alt="" />
              <h2>locadoraMvc</h2>

              <h3>
                Um sistema web desenvolvido em MVC, voltado para o gerenciamento
                de uma locadora de veículos. A aplicação permite cadastrar
                clientes, registrar a retirada e devolução de carros ou motos e
                armazenar todas as informações em um banco de dados, garantindo
                organização e controle eficiente das locações.
              </h3>

              <div className="logos">
                <img className="logosPort" src={net} alt="" />
                <img className="logosPort" src={C} alt="" />
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Marcusvn2006/CalculadoraMaui"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <div className="bolas">
                <div className="bola1"></div>
                <div className="bola2"></div>
                <div className="bola3"></div>
              </div>
              <img className="imgport" src={mauicalculadora} alt="" />
              <h2>Calculadora Maui</h2>

              <h3>
                Um sistema web desenvolvido em MVC, voltado para o gerenciamento
                de uma locadora de veículos. A aplicação permite cadastrar
                clientes, registrar a retirada e devolução de carros ou motos e
                armazenar todas as informações em um banco de dados, garantindo
                organização e controle eficiente das locações.
              </h3>

              <div className="logos">
               <img className="logosPort" src={net} alt="" />
                <img className="logosPort" src={C} alt="" />
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Marcusvn2006/MatriculaAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <div className="bolas">
                <div className="bola1"></div>
                <div className="bola2"></div>
                <div className="bola3"></div>
              </div>
              <img className="imgport" src={apiescola} alt="" />
              <h2>API Escola</h2>

              <h3>
                A primeira API que desenvolvi foi um projeto voltado para o
                gerenciamento de uma escola, com recursos para cadastro de
                turmas e alunos, permitindo o armazenamento e controle
                organizado das informações.
              </h3>

              <div className="logos">
               <img className="logosPort" src={api} alt="" />
                <img className="logosPort" src={C} alt="" />
              </div>
            </div>
          </a>
             <div className="tayas">
  <button
    className="button-wrapperi"
    onClick={() => window.open("https://github.com/Marcusvn2006", "_blank")}
  >
    <div className="button-text-sectioni">GitHub</div>
    <div className="button-arrow-sectioni">
      <img src={github} className="arrow-iconi" alt="Ícone do GitHub" />
    </div>
  </button>
</div>

        </div>
      </div>
      <div class="footer" id="contratar">
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
         <a href="https://www.linkedin.com/in/marcusavanso06/" target="_blank" rel="noopener noreferrer">
  <img src={linkedin} alt="LinkedIn" />
</a>
           <a href="https://wa.me/5514998080710" target="_blank" rel="noopener noreferrer">
  <img src={whatsapp} alt="WhatsApp" />
</a>

            <a href="tel:+5514998080710">
  <img src={tell} alt="Telefone" />
</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
