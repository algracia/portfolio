import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { type Language, profileLinks, translations } from "./data/site";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { applySeoMetadata } from "./seo/metadata";

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const content = translations[language];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      target?.scrollIntoView();
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const homeTitle =
      language === "en"
        ? `${content.profile.name} | Prototype & Embedded Systems Portfolio`
        : `${content.profile.name} | Portafolio de Prototipos y Sistemas Embebidos`;
    const homeDescription =
      language === "en"
        ? "Portfolio of Alberto Gracia Martelo focused on CAD, embedded firmware, power electronics and prototype engineering."
        : "Portafolio de Alberto Gracia Martelo enfocado en CAD, firmware embebido, electronica de potencia e ingenieria de prototipos.";

    if (location.pathname === "/") {
      applySeoMetadata({
        title: homeTitle,
        description: homeDescription,
        urlPath: location.pathname,
        type: "website"
      });
      return;
    }

    const projectSlug = location.pathname.match(/^\/projects\/([^/]+)$/)?.[1];
    if (projectSlug) {
      const project = content.projects.find((item) => item.slug === decodeURIComponent(projectSlug));
      if (project) {
        applySeoMetadata({
          title: `${project.title} | ${content.profile.name}`,
          description: project.summary,
          urlPath: location.pathname,
          image: project.coverImage.src,
          type: "article"
        });
        return;
      }
    }

    applySeoMetadata({
      title: `${content.projectDetail.notFoundTitle} | ${content.profile.name}`,
      description: content.projectDetail.notFoundText,
      urlPath: location.pathname,
      type: "website"
    });
  }, [location.pathname, language, content]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          {content.brand}
        </Link>

        <nav className="nav">
          <Link to="/#projects">{content.nav.projects}</Link>
          <Link to="/#capabilities">{content.nav.capabilities}</Link>
          <Link to="/#experience">{content.nav.experience}</Link>
          <Link to="/#contact">{content.nav.contact}</Link>
        </nav>

        <div className="topbar__actions">
          <div className="lang-toggle" role="group" aria-label={content.nav.languageToggleAria}>
            <button
              type="button"
              className={`lang-toggle__button ${language === "en" ? "is-active" : ""}`}
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              {content.nav.english}
            </button>
            <button
              type="button"
              className={`lang-toggle__button ${language === "es" ? "is-active" : ""}`}
              aria-pressed={language === "es"}
              onClick={() => setLanguage("es")}
            >
              {content.nav.spanish}
            </button>
          </div>

          <a className="button button--ghost" href={profileLinks.cv} target="_blank" rel="noreferrer">
            {content.nav.cv}
          </a>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage content={content} />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage content={content} />} />
        <Route path="*" element={<ProjectDetailPage content={content} />} />
      </Routes>
    </div>
  );
}

export default App;
