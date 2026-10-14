import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectMedia from "../components/ProjectMedia";
import { profile, type Language, type SiteTranslation } from "../data/site";
import type { Project } from "../data/projects";

type Props = { language: Language; content: SiteTranslation };

function ProjectRow({ project, content, language }: { project: Project; content: SiteTranslation; language: Language }) {
  const href = `${language === "es" ? "/es" : ""}/projects/${project.slug}`;
  return (
    <article className="work-row">
      <div className="work-row__meta"><span>{project.number}</span><span>{project.category}</span></div>
      <Link className="work-row__media-link" to={href} aria-label={`${content.actions.caseStudy}: ${project.title}`}>
        <ProjectMedia project={project} pending={content.actions.imagePending} pendingDetail={content.actions.imagePendingDetail} />
      </Link>
      <div className="work-row__body">
        <span className="small-label">{project.period}</span>
        <h3><Link to={href}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <Link className="text-link" to={href}>{content.actions.caseStudy}<span aria-hidden="true"> ↗</span></Link>
      </div>
    </article>
  );
}

export default function HomePage({ language, content }: Props) {
  const [certificationsOpen, setCertificationsOpen] = useState(false);
  const selected = content.projects.filter((project) => !project.secondary);
  const additional = content.projects.filter((project) => project.secondary);
  return (
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero__topline"><span>{content.hero.index}</span><span>{content.hero.location}</span></div>
        <div className="hero__main">
          <h1 id="hero-title" aria-label={content.hero.role.join(", ")}>
            {content.hero.role.map((line) => (
              <span className="hero__headline-line" key={line}>
                <svg className="hero__arrow" viewBox="0 0 36 24" aria-hidden="true" focusable="false">
                  <path d="M1 12h23" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="m22 4 12 8-12 8z" fill="currentColor" />
                </svg>
                <span className="hero__headline-text">{line}</span>
              </span>
            ))}
          </h1>
          <div className="hero__aside">
            <p>{content.hero.introduction}</p>
            <Link className="text-link" to={`${language === "es" ? "/es" : "/"}#work`}>{content.actions.explore}<span aria-hidden="true"> ↓</span></Link>
          </div>
        </div>
        <div className="hero__focus">
          {content.hero.focus.map((item, index) => <div key={item}><span className="small-label">0{index + 1}</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className="section container" id="work" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">{content.headings.work}</h2><p>{content.workIntro}</p></div>
        <div className="work-list">{selected.map((project) => <ProjectRow key={project.slug} project={project} content={content} language={language} />)}</div>
      </section>

      <section className="section container further-work" id="further-work" aria-labelledby="additional-title">
        <div className="section-heading"><h2 id="additional-title">{content.headings.additional}</h2><p>{content.additionalIntro}</p></div>
        {additional.map((project) => <ProjectRow key={project.slug} project={project} content={content} language={language} />)}
      </section>

      <section className="section section--toned" id="experience" aria-labelledby="experience-title">
        <div className="container">
          <div className="section-heading"><h2 id="experience-title">{content.headings.experience}</h2></div>
          <div className="experience-list">{content.experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-item__when"><span>{item.period}</span><span>{item.location}</span></div>
              <div className="experience-item__content"><h3>{item.role}</h3><p className="experience-item__company">{item.company}</p><ul>{item.work.map((point) => <li key={point}>{point}</li>)}</ul></div>
            </article>
          ))}</div>
        </div>
      </section>

      <section className="section container" id="stack" aria-labelledby="stack-title">
        <div className="section-heading"><h2 id="stack-title">{content.headings.stack}</h2></div>
        <dl className="capability-list">{content.capabilities.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.detail}</dd></div>)}</dl>
      </section>

      <section className="section section--toned" id="education" aria-labelledby="education-title">
        <div className="container credentials">
          <div>
            <h2 id="education-title">{content.headings.education}</h2>
            <h3>{content.education.degree}</h3>
            <p>{content.education.institution}</p>
            <p className="muted">{content.education.detail}</p>
            <p className="muted">{content.education.second}</p>
            <button className="certifications-toggle" type="button" aria-expanded={certificationsOpen} aria-controls="certifications-list" onClick={() => setCertificationsOpen(!certificationsOpen)}>
              {certificationsOpen ? content.education.hideCertifications : content.education.certifications}
              <span aria-hidden="true"> {certificationsOpen ? "−" : "+"}</span>
            </button>
            <div className="certifications-list" id="certifications-list" hidden={!certificationsOpen}>
              {content.education.documents.map((document) => (
                <a key={document.path} href={document.path} target="_blank" rel="noopener noreferrer">
                  <span>{document.title}</span><span className="small-label">{document.format} ↗</span>
                </a>
              ))}
            </div>
          </div>
          <div><h2>{content.headings.languages}</h2><ul>{content.languages.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="section container contact" id="contact" aria-labelledby="contact-title">
        <div className="contact__grid"><div><h2 id="contact-title">{content.headings.contact}</h2><p>{content.contact.intro}</p><p className="small-label">{content.contact.availability}</p></div>
          <div className="contact__links">
            <a href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true"> ↗</span></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span aria-hidden="true"> ↗</span></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<span aria-hidden="true"> ↗</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
