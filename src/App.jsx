import React, { useState, useEffect } from "react";
import "./App.css";
import imgapresentacao from "../src/assets/img/aprecacao.png";
import iconreact from "../src/assets/icon/iconreact.svg";
import myphoto from "../src/assets/img/myphoto.png";
import innovaBuilders from "../src/assets/img/Innova.png";
import zendrine from "../src/assets/img/Zendrine.png";
import novera from "../src/assets/img/Novera.png";
import innovaCustom from "../src/assets/img/innovacustom.png";
import mrGomes from "../src/assets/img/mrgomes.png";
import silvano from "../src/assets/img/SILVANO.png";
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
import EUA from "../src/assets/icon/EUA.svg";
import BR from "../src/assets/icon/BR.svg";

import testeprojeto from "../src/assets/img/testeprojeto.png";

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navPortfolio: "Portfolio",

    heroTitle: "Hi, I'm Marcus Vinicius",
    heroSubtitle: "A Front-End & Mobile Developer passionate about creating innovative solutions.",
    hireMe: "Hire Me",
    portfolioWatermark: "Portfolio",

    aboutSectionTitle: "About Me",
    profExpTitle: "Professional Experience",
    profExpSubtitle: "Discover the experiences that have allowed me to grow as a developer and understand the real impact of technology on businesses.",
    terminalJob1: "Trajetória do Sucesso – Web Developer",
    terminalJob1Desc: "Development of custom websites using WordPress and Elementor for international clients, with a focus on responsive interfaces, high performance, and on-demand integrations.",
    terminalJob2: "Oboticairo - Administrative Apprentice:",
    terminalJob2Desc: "Process automation and integrations using Artificial Intelligence.",
    terminalJob3: "OnFriday Technologies – Mobile & Full Stack Developer",
    terminalJob3Desc: "Mobile application development with .NET MAUI, creation and maintenance of C# APIs, and web interface development with React, contributing to integrated and scalable solutions.",
    aboutMeCardTitle: "About Me",
    bashInstall: "+ FullStackDeveloper@2025",
    bashSkills: "Skills: React, C#, SQL, .NET, n8n Experience: Automation, APIs, and Web Development",
    contactTell: "tell:",
    bioText:
      "I began my journey in technology through the Systems Analysis and Development program at SENAI, where I built a solid foundation in programming logic, MVC architecture, and Full Stack development.\nI am currently pursuing a degree in Information Technology Management at FATEC Jaú and work professionally in software development, with a focus on mobile applications using .NET MAUI, as well as building and maintaining C# APIs and React web interfaces. I have experience with version control using Git and GitHub and in developing integrated, scalable solutions.\nI have also worked on custom website development with WordPress and Elementor for international clients, applying UI/UX concepts and usability best practices. I have experience in process automation and integrations using N8N and Artificial Intelligence.\nI constantly seek to evolve my technical skills and contribute strategically to projects that create real impact through technology.",

    skillsTitle: "My Skills:",
    skillsSubtitle: "Technologies and tools I use to build complete solutions.",

    projectsTitle: "My Projects",
    projectsSubtitle: "Some of the projects I have developed.",

    souzaName: "Souza's Services",
    souzaDesc:
      "A website I developed while working for the company Trajetória do Sucesso, serving a client from the United States (Huntersville, NC). She requested a sophisticated design that conveyed elegance and professionalism, highlighting the cleaning services offered.",
    silvanoName: "Silvano Behavioral",
    silvanoDesc:
      "A website I developed while working for the company Trajetória do Sucesso, designed for Silvano Behavioral Health. The site presents psychotherapy and emotional support services for Brazilian clients in the United States, highlighting the experience of Silvano Batista da Silva and creating a welcoming, clear, and accessible environment for those seeking mental health support.",
    zendrineName: "Zendrine Clinica e Instituto",
    zendrineDesc:
      "A website I developed while working for the company Trajetória do Sucesso, designed for Zendrine Clínica & Instituto. The site showcases professional aesthetic and beauty courses focused on empowering students with practical and theoretical knowledge for success in the beauty industry, presented through a clear and attractive design.",
    noveraName: "Novera Institute",
    noveraDesc:
      "A website I developed while working for the company Trajetória do Sucesso, designed for Novera Institute. The site presents a skincare and aesthetic clinic offering advanced treatments and personalized services, emphasizing professionalism, safety, and confidence-boosting care through a clean and inviting design.",
    innovaName: "Innova Custom Builders",
    innovaDesc:
      "A website I developed while working for the company Trajetória do Sucesso, designed for Innova Custom Builders. The site highlights a custom home building and remodeling company in Charlotte, showcasing its services, project portfolio, and commitment to quality craftsmanship and personalized solutions.",
    mrGomesName: "Mr Gomes",
    mrGomesDesc:
      "A website I developed while working for the company Trajetória do Sucesso, designed for Mr. Gomes Remodeling. The site presents a full-service home remodeling company, emphasizing professionalism, quality workmanship, and easy access to services, project examples, and quote requests.",

    footerTitle: "Let's work together!",
    footerSubtitle: "I'm always interested in new projects  \nand opportunities.",
  },
  pt: {
    navHome: "Início",
    navAbout: "Sobre",
    navSkills: "Habilidades",
    navPortfolio: "Portfólio",

    heroTitle: "Olá, sou Marcus Vinicius",
    heroSubtitle: "Desenvolvedor Front-End e Mobile apaixonado por criar soluções inovadoras.",
    hireMe: "Contratar",
    portfolioWatermark: "Portfólio",

    aboutSectionTitle: "Sobre Mim",
    profExpTitle: "Experiência Profissional",
    profExpSubtitle: "Conheça as experiências que me permitiram crescer como desenvolvedor e entender o impacto real da tecnologia nos negócios.",
    terminalJob1: "Trajetória do Sucesso – Web Developer",
    terminalJob1Desc: "Desenvolvimento de sites personalizados com WordPress e Elementor para clientes internacionais, com foco em interfaces responsivas, alta performance e integrações sob demanda.",
    terminalJob2: "Oboticairo - Aprendiz Administrativo:",
    terminalJob2Desc: "Automação de processos e integrações usando Inteligência Artificial.",
    terminalJob3: "OnFriday Technologies – Desenvolvedor Mobile & Full Stack",
    terminalJob3Desc: "Desenvolvimento de aplicativos mobile com .NET MAUI, criação e manutenção de APIs em C# e desenvolvimento de interfaces web com React, contribuindo para soluções integradas e escaláveis.",
    aboutMeCardTitle: "Sobre Mim",
    bashInstall: "+ FullStackDeveloper@2025",
    bashSkills: "Habilidades: React, C#, SQL, .NET, n8n Experiência: Automação, APIs e Desenvolvimento Web",
    contactTell: "tel:",
    bioText:
      "Iniciei minha trajetória na área de tecnologia por meio do curso de Análise e Desenvolvimento de Sistemas pelo SENAI, onde desenvolvi uma base sólida em lógica de programação, arquitetura MVC e desenvolvimento Full Stack.\nAtualmente, curso Gestão da Tecnologia da Informação na FATEC Jaú e atuo profissionalmente no desenvolvimento de software, com foco em aplicações mobile utilizando .NET MAUI, além da construção e manutenção de APIs em C# e interfaces web com React. Tenho experiência com versionamento utilizando Git e GitHub e no desenvolvimento de soluções integradas e escaláveis.\nTambém atuei no desenvolvimento de sites personalizados com WordPress e Elementor para clientes internacionais, aplicando conceitos de UI/UX e boas práticas de usabilidade. Possuo experiência em automação de processos e integrações utilizando N8N e Inteligência Artificial.\nBusco constantemente evoluir minhas habilidades técnicas e contribuir de forma estratégica para projetos que gerem impacto real por meio da tecnologia.",

    skillsTitle: "Minhas Habilidades:",
    skillsSubtitle: "Tecnologias e ferramentas que uso para construir soluções completas.",

    projectsTitle: "Meus Projetos",
    projectsSubtitle: "Alguns dos projetos que desenvolvi.",

    souzaName: "Souza's Services",
    souzaDesc:
      "Um site que desenvolvi enquanto trabalhava para a empresa Trajetória do Sucesso, atendendo a uma cliente dos Estados Unidos (Huntersville, NC). Ela solicitou um design sofisticado, que transmitisse elegância e profissionalismo, destacando os serviços de limpeza oferecidos.",
    silvanoName: "Silvano Behavioral",
    silvanoDesc:
      "Um site que desenvolvi enquanto trabalhava na empresa Trajetória do Sucesso, criado para Silvano Behavioral Health. O site apresenta serviços de psicoterapia e apoio emocional para clientes brasileiros nos Estados Unidos, destacando a experiência de Silvano Batista da Silva e criando um ambiente acolhedor, claro e acessível para quem busca apoio em saúde mental.",
    zendrineName: "Zendrine Clinica e Instituto",
    zendrineDesc:
      "Um site que desenvolvi enquanto trabalhava na empresa Trajetória do Sucesso, criado para Zendrine Clínica & Instituto. O site apresenta cursos profissionalizantes de estética e beleza, focados em capacitar alunos com conhecimento prático e teórico para o sucesso na indústria da beleza, apresentado através de um design claro e atrativo.",
    noveraName: "Novera Institute",
    noveraDesc:
      "Um site que desenvolvi enquanto trabalhava na empresa Trajetória do Sucesso, criado para Novera Institute. O site apresenta uma clínica de skincare e estética que oferece tratamentos avançados e serviços personalizados, enfatizando profissionalismo, segurança e cuidados que aumentam a confiança através de um design limpo e convidativo.",
    innovaName: "Innova Custom Builders",
    innovaDesc:
      "Um site que desenvolvi enquanto trabalhava na empresa Trajetória do Sucesso, criado para a Innova Custom Builders. O site destaca uma empresa especializada em construção e reforma de casas personalizadas em Charlotte, apresentando seus serviços, portfólio de projetos e o compromisso com a qualidade na execução e soluções personalizadas.",
    mrGomesName: "Mr Gomes",
    mrGomesDesc:
      "Um site que desenvolvi enquanto trabalhava na empresa Trajetória do Sucesso, criado para Mr. Gomes Remodeling. O site apresenta uma empresa de remodelação residencial completa, enfatizando profissionalismo, qualidade no trabalho e fácil acesso a serviços, exemplos de projetos e solicitações de orçamento.",

    footerTitle: "Vamos trabalhar juntos!",
    footerSubtitle: "Estou sempre interessado em novos projetos\ne oportunidades.",
  },
};
// ────────────────────────────────────────────────────────────────────────────

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [highlightedIcons, setHighlightedIcons] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const t = (key) => translations[language][key];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    const threshold = 160;
    const checkDevTools = () => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        console.clear();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    const devToolsInterval = setInterval(checkDevTools, 500);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      clearInterval(devToolsInterval);
    };
  }, []);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
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
                  {t("navHome")}
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
                  {t("navAbout")}
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
                  {t("navSkills")}
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
                  {t("navPortfolio")}
                </a>
              </li>
            </ul>

            <button className="lang-toggle" onClick={toggleLanguage}>
              <img
                src={language === "en" ? EUA : BR}
                alt={language === "en" ? "English" : "Português"}
                className="lang-flag"
              />
              {language === "en" ? "EN" : "PT"}
            </button>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        <div className="apresentacao">
          <h1>{t("heroTitle")}</h1>
          <h2>{t("heroSubtitle")}</h2>
          <a href="#contratar" className="button-wrapper">
            <div className="button-text-section">{t("hireMe")}</div>
            <div className="button-arrow-section">
              <img src={arow} className="arrow-icon" alt="" />
            </div>
          </a>
        </div>
        <div>
          <img className="imgapres" src={imgapresentacao} alt="" />
        </div>
        <h1 className="title1">{t("portfolioWatermark")}</h1>
      </div>
      <div id="sobre" className="container">
        <h1 className="title">{t("aboutSectionTitle")}</h1>
        <div className="item conteriner-1">
          <div className="sobre">
            <div className="bolas">
              <div className="bola1"></div>
              <div className="bola2"></div>
              <div className="bola3"></div>
            </div>

            <h1>{t("profExpTitle")}</h1>
            <h2>{t("profExpSubtitle")}</h2>
            <div className="input-sobre">
              <h3>
                &lt;h1&gt;{t("terminalJob1")}&lt;/h1&gt;
                <br />
                &lt;p&gt;{t("terminalJob1Desc")}&lt;/p&gt;
                <br />
                <br />
                &lt;h1&gt;{t("terminalJob2")}&lt;/h1&gt;
                <br />
                &lt;p&gt;{t("terminalJob2Desc")}&lt;/p&gt;
                <br />
                <br />
                &lt;h1&gt;{t("terminalJob3")}&lt;/h1&gt;
                <br />
                &lt;p&gt;{t("terminalJob3Desc")}&lt;/p&gt;
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
              {t("bashInstall")}
              <br />
              {t("bashSkills")}
            </h3>
            <h2 className="sub-verde">$</h2>
          </div>
        </div>
        <div className="item conteriner-2 ">
          <div className="title-sobre">
            <h2>{t("aboutMeCardTitle")}</h2>
          </div>

          <div className="ajus">
            <img className="img-photo" src={myphoto} alt="" />
            <img className="figma" src={figma} alt="" />
          </div>
        </div>
        <div className="item conteriner-3">
          <div className="contact-sobre">
            <h2>{t("contactTell")}</h2>
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

            <h1>{t("bioText")}</h1>
          </div>
        </div>
      </div>

      <div id="habilidades" class="cont">
        <div class="it justo">
          <div className="habilidades">
            <h1>{t("skillsTitle")}</h1>
            <h2>{t("skillsSubtitle")}</h2>
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
          <div className="Port">
            <h1>{t("projectsTitle")}</h1>
            <h2>{t("projectsSubtitle")}</h2>
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
              <h2>{t("souzaName")}</h2>
              <h3>{t("souzaDesc")}</h3>
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
              <img className="imgport" src={silvano} alt="" />
              <h2>{t("silvanoName")}</h2>
              <h3>{t("silvanoDesc")}</h3>
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
              <img className="imgport" src={zendrine} alt="" />
              <h2>{t("zendrineName")}</h2>
              <h3>{t("zendrineDesc")}</h3>
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
              <img className="imgport" src={novera} alt="" />
              <h2>{t("noveraName")}</h2>
              <h3>{t("noveraDesc")}</h3>
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
              <img className="imgport" src={innovaCustom} alt="" />
              <h2>{t("innovaName")}</h2>
              <h3>{t("innovaDesc")}</h3>
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
              <img className="imgport" src={mrGomes} alt="" />
              <h2>{t("mrGomesName")}</h2>
              <h3>{t("mrGomesDesc")}</h3>
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
            <h1>{t("footerTitle")}</h1>
            <h2>{t("footerSubtitle")}</h2>
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