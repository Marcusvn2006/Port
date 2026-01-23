import React, { useState, useEffect } from "react";
import "./App.css";
import imgapresentacao from "../src/assets/img/aprecacao.png";
import iconreact from "../src/assets/icon/iconreact.svg";
import myphoto from "../src/assets/img/myphoto.png";
import innova from "../src/assets/img/Innova.png";
import devflix from "../src/assets/img/Zendrine.png";
import locadoraMvc from "../src/assets/img/novera.png";
import mauicalculadora from "../src/assets/img/innovacustom.png";
import apiescola from "../src/assets/img/mrgomes.png";
import N8n_automacao from "../src/assets/img/SILVANO.png";
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
import n8nPreto from "../src/assets/icon/n8nPreto.svg";
import arow from "../src/assets/icon/arow.svg";

import testeprojeto from "../src/assets/img/testeprojeto.png";
const App = () => {
  // Corrigido: adicionei os parênteses vazios
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [highlightedIcons, setHighlightedIcons] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect existente para o scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NOVO: useEffect para bloquear F12 e ferramentas de desenvolvedor
  useEffect(() => {
    // Bloquear teclas de atalho (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    const handleKeyDown = (e) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
      }

      // Ctrl+U (Visualizar código-fonte)
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
      }
    };

    // Bloquear clique direito (menu de contexto)
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Detectar se o DevTools está aberto
    const threshold = 160;
    const checkDevTools = () => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        console.clear();
        // Ação quando o DevTools é detectado (ex: redirecionar)
        // window.location.href = 'https://seusite.com/pagina-de-aviso';
      }
    };

    // Adicionar event listeners
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    const devToolsInterval = setInterval(checkDevTools, 500);

    // Limpar event listeners quando o componente for desmontado
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      clearInterval(devToolsInterval);
    };
  }, []);

  // useEffect existente para animação dos ícones
  useEffect(() => {
    const intervalId = setInterval(() => {
      const numberOfHighlights = Math.floor(Math.random() * 3) + 2;
      const randomIndices = [];

      while (randomIndices.length < numberOfHighlights) {
        const randomIndex = Math.floor(Math.random() * 18);
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
                  Home
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
                  About
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
                  Skills
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
                  Portfolio
                </a>
              </li>
            </ul>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        <div className="apresentacao">
          <h1>Hi, I’m Marcus Vinicius</h1>
          <h2>
            A Front-End Web Developer' passionate about creating innovative solutions.
          </h2>
          <a href="#contratar" className="button-wrapper">
            <div className="button-text-section">Hire Me</div>
            <div className="button-arrow-section">
              <img src={arow} className="arrow-icon" alt="" />
            </div>
          </a>
        </div>
        <div>
          <img className="imgapres" src={imgapresentacao} alt="" />
        </div>
        <h1 className="title1">Portfolio</h1>
      </div>
      <div id="sobre" className="container">
        <h1 className="title">About Me</h1>
        <div className="item conteriner-1">
          <div className="sobre">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>

            <h1> Professional Experience</h1>
            <h2>
              Discover the experiences that have allowed me to grow as a developer and understand the real impact of technology on businesses.
            </h2>
            <div className="input-sobre">
              <h3>
                &lt;h1&gt;Trajetória do Sucesso – Web Developer&lt;/h1&gt;
                <br />
                &lt;p&gt;Desenvolvimento de sites personalizados com WordPress e
                Development of custom websites using WordPress and Elementor for international clients, with a focus on responsive interfaces, high performance,
                <br />  and on-demand integrations.&lt;/p&gt;
                <br /> <br />
                &lt;h1&gt;Oboticairo - Administrative Apprentice: &lt;/h1&gt;
                <br />
                &lt;p&gt; Process automation and integrations using Artificial Intelligence.&lt;/p&gt;
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
              Skills: React, C#, SQL, .NET, n8n Experience: Automation, APIs, and Web Development
            </h3>
            <h2 className="sub-verde">$</h2>
          </div>
        </div>
        <div className="item conteriner-2 ">
          <div className="title-sobre">
            <h2>About Me</h2>
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
            <h2>Website::</h2>
            <h3 className="email-sobre">
              https://portfolio-blush-xi-15.vercel.app/
            </h3>
            <h2>Email:</h2>
            <h3>@marcusavanso06@gmail.com</h3>
          </div>
          <div className="sobre2">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>

            <h1>
            I started my career as a developer three years ago through the Systems Analysis and Development program at SENAI. During this time, I gained experience in both front-end and back-end development using HTML, CSS, JavaScript, React, Vite, and C# APIs connected to databases.

I worked on several hands-on projects, was nominated to participate in the Programming Olympiad, and developed applications using the MVC architecture. I also regularly use Git and GitHub for code versioning and collaboration.

Currently, I develop custom websites for international clients using WordPress and Elementor. At the same time, I have been deepening my knowledge in process automation with n8n, while continuously applying and improving my technical skills.
            </h1>
          </div>
        </div>
      </div>

      <div id="habilidades" class="cont">
        <div class="it justo">
          <div className="habilidades">
            <h1>My Skills:</h1>
            <h2>
             Technologies and tools I use to build
              complete <br /> solutions.
            </h2>
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
            <h1>My Projects</h1>
            <h2>Some of the projects I have developed.</h2>
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
                A website I developed while working for the company Trajetória do Sucesso, serving a client from the United States (Huntersville, NC). The client requested a sophisticated design that conveyed elegance and professionalism, highlighting the cleaning services offered.
              </h3>
              <div className="logos">
                <img className="logosPort" src={elementorPreto} alt="" />
                <img className="logosPort" src={wordpress} alt="" />
              </div>
            </div>
          </a>
          <a
            href="https://silvanobehavioral.com/"
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
              <img className="imgport" src={N8n_automacao} alt="" />
              <h2>Silvano Behavioral</h2>
              <h3>
                A website I developed while working for the company Trajetória do Sucesso, designed for Silvano Behavioral Health. The site presents psychotherapy and emotional support services for Brazilian clients in the United States, highlighting the experience of Silvano Batista da Silva and creating a welcoming, clear, and accessible environment for those seeking mental health support.
                </h3>
              <div className="logos">
               <img className="logosPort" src={elementorPreto} alt="" />
                <img className="logosPort" src={wordpress} alt="" />
              </div>
            </div>
          </a>
          <a
            href="https://zendrine.com.br/cursos/"
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
              <h2>Zendrine Clinica e Instituto</h2>
              <h3>
              A website I developed while working for the company Trajetória do Sucesso, designed for Zendrine Clínica & Instituto. The site showcases professional aesthetic and beauty courses focused on empowering students with practical and theoretical knowledge for success in the beauty industry, presented through a clear and attractive design.</h3>
              <div className="logos">
                  <img className="logosPort" src={elementorPreto} alt="" />
                <img className="logosPort" src={wordpress} alt="" />
              </div>
            </div>
          </a>
          <a
            href="https://noverainstitute.com/"
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
              <h2>Novera Institute</h2>

              <h3>
              A website I developed while working for the company Trajetória do Sucesso, designed for Novera Institute. The site presents a skincare and aesthetic clinic offering advanced treatments and personalized services, emphasizing professionalism, safety, and confidence-boosting care through a clean and inviting design.</h3>

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
              <img className="imgport" src={mauicalculadora} alt="" />
              <h2>Innova Bustom Builders</h2>

              <h3>
          A website I developed while working for the company Trajetória do Sucesso, designed for Innova Custom Builders. The site highlights a custom home building and remodeling company in Charlotte, showcasing its services, project portfolio, and commitment to quality craftsmanship and personalized solutions.    </h3>

              <div className="logos">
               <img className="logosPort" src={elementorPreto} alt="" />
                <img className="logosPort" src={wordpress} alt="" />
              </div>
            </div>
          </a>
          <a
            href="https://mrgomes.com/"
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
              <h2>Mr Gomes</h2>

              <h3>
           A website I developed while working for the company Trajetória do Sucesso, designed for Mr. Gomes Remodeling. The site presents a full-service home remodeling company, emphasizing professionalism, quality workmanship, and easy access to services, project examples, and quote requests.   </h3>

              <div className="logos">
                  <img className="logosPort" src={elementorPreto} alt="" />
                <img className="logosPort" src={wordpress} alt="" />
              </div>
            </div>
          </a>
          <div className="tayas">
            <button
              className="button-wrapperi"
              onClick={() =>
                window.open("https://github.com/Marcusvn2006", "_blank")
              }
            >
              <div className="button-text-sectioni">GitHub</div>
              <div className="button-arrow-sectioni">
                <img
                  src={github}
                  className="arrow-iconi"
                  alt="Ícone do GitHub"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="footer" id="contratar">
        <div class="foot textFoot">
          <div className="trabalharJunto">
            <h1>Let’s work together!</h1>
            <h2>
              I’m always interested in new projects  <br /> and opportunities.
            </h2>
          </div>
        </div>
        <div class="foot conta ">
          <div className="contac">
            <a
              href="https://www.linkedin.com/in/marcusavanso06/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://wa.me/5514998080710"
              target="_blank"
              rel="noopener noreferrer"
            >
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
