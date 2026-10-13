import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { cvDocuments, profile, translations, type Language } from "./data/site";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { applySeoMetadata } from "./seo/metadata";

function App() {
  const location = useLocation();
  const language: Language = location.pathname === "/es" || location.pathname.startsWith("/es/") ? "es" : "en";
  const content = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);
  const base = language === "es" ? "/es" : "/";
  const sectionPath = (id: string) => `${base === "/" ? "/" : base}#${id}`;
  const projectSlug = location.pathname.match(/^\/(?:es\/)?projects\/([^/]+)\/?$/)?.[1];
  const project = content.projects.find((item) => item.slug === projectSlug);
  const cv = cvDocuments[language];

  useEffect(() => {
    document.documentElement.lang = language;
    setMenuOpen(false);
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [language, location.pathname, location.hash, location.key]);

  useEffect(() => {
    const isHome = location.pathname === "/" || location.pathname === "/es";
    const title = project
      ? `${project.title} | ${profile.name}`
      : isHome
        ? language === "en"
          ? `${profile.name} | IoT & Embedded Systems Engineer`
          : `${profile.name} | Ingeniero IoT y de Sistemas Embebidos`
        : `${content.actions.missing} | ${profile.name}`;
    const description = project?.summary ?? (!isHome ? content.actions.missingText : language === "en"
      ? "Alberto Gracia Martelo is an Engineering Physicist building IoT, embedded, Edge AI and physical systems through hardware/software integration."
      : "Alberto Gracia Martelo es Ingeniero Físico. Desarrolla sistemas IoT, embebidos y Edge AI mediante integración de hardware y software.");
    applySeoMetadata({
      title,
      description,
      urlPath: location.pathname,
      image: project?.cover?.src,
      type: project ? "article" : "website",
      language,
      noIndex: location.pathname !== "/" && location.pathname !== "/es" && !project
    });
  }, [language, location.pathname, project]);

  const languagePath = (target: Language) => {
    const slug = projectSlug ? `/projects/${projectSlug}` : "";
    return target === "es" ? `/es${slug}` : slug || "/";
  };

  return (
    <>
      <a className="skip-link" href="#main">{language === "en" ? "Skip to content" : "Saltar al contenido"}</a>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link className="brand" to={base} aria-label={`${profile.name} · ${language === "en" ? "Home" : "Inicio"}`}>
            <span className="brand__mark">AG<span>.</span></span>
            <span className="brand__name">{profile.name}</span>
          </Link>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? content.nav.close : content.nav.menu}<span aria-hidden="true">{menuOpen ? " ×" : " +"}</span>
          </button>
          <nav id="main-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label={language === "en" ? "Main navigation" : "Navegación principal"}>
            <Link to={sectionPath("work")}>{content.nav.work}</Link>
            <Link to={sectionPath("further-work")}>{content.nav.additional}</Link>
            <Link to={sectionPath("experience")}>{content.nav.experience}</Link>
            <Link to={sectionPath("stack")}>{content.nav.stack}</Link>
            <Link to={sectionPath("education")}>{content.nav.education}</Link>
            <Link to={sectionPath("contact")}>{content.nav.contact}</Link>
            {cv.available && <a className="mobile-cv" href={cv.path} target="_blank" rel="noopener noreferrer">{content.actions.cv} ↗</a>}
          </nav>
          <div className="header-tools">
            <div className="language-switch" role="group" aria-label={content.nav.language}>
              <Link to={languagePath("en")} lang="en" aria-current={language === "en" ? "page" : undefined}>EN</Link>
              <span aria-hidden="true">/</span>
              <Link to={languagePath("es")} lang="es" aria-current={language === "es" ? "page" : undefined}>ES</Link>
            </div>
            {cv.available && <a className="header-cv" href={cv.path} target="_blank" rel="noopener noreferrer">{content.actions.cv}<span aria-hidden="true"> ↗</span></a>}
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage language={language} content={content} />} />
        <Route path="/es" element={<HomePage language={language} content={content} />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage language={language} content={content} />} />
        <Route path="/es/projects/:slug" element={<ProjectDetailPage language={language} content={content} />} />
        <Route path="*" element={<ProjectDetailPage language={language} content={content} />} />
      </Routes>
      <footer className="site-footer">
        <div className="container site-footer__inner"><span>© {new Date().getFullYear()} {profile.name}</span><span>{content.hero.location}</span><a href="#main">↑ {language === "en" ? "Top" : "Inicio"}</a></div>
      </footer>
    </>
  );
}

export default App;
