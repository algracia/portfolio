import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import SectionIntro from "../components/SectionIntro";
import { contactFormConfig, profileLinks, type SiteTranslation } from "../data/site";

type HomePageProps = {
  content: SiteTranslation;
};

function HomePage({ content }: HomePageProps) {
  return (
    <main>
      <section id="home" className="hero section">
        <div className="hero__copy">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.profile.name}</h1>
          <p className="hero__headline">{content.profile.headline}</p>
          <p className="hero__text">{content.hero.text}</p>

          <div className="hero__actions">
            <Link className="button" to="/#projects">
              {content.hero.viewWork}
            </Link>
            <a className="button button--ghost" href={profileLinks.github} target="_blank" rel="noreferrer">
              {content.nav.github}
            </a>
          </div>

          <ul className="hero__meta">
            <li>{content.profile.location}</li>
            <li>
              <a href={`mailto:${profileLinks.email}`}>{profileLinks.email}</a>
            </li>
            <li>
              <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                {content.nav.linkedin}
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__panel">
          <div className="hero-card hero-card--accent">
            <span className="hero-card__label">{content.hero.positioningLabel}</span>
            <strong>{content.hero.positioningTitle}</strong>
            <p>{content.hero.positioningText}</p>
          </div>

          <div className="stats-grid">
            {content.heroStats.map((item) => (
              <article key={item.label} className="stat-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <SectionIntro
          eyebrow={content.sections.projects.eyebrow}
          title={content.sections.projects.title}
          text={content.sections.projects.text}
        />

        <div className="projects-grid">
          {content.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} detailCta={content.actions.viewProjectDetails} />
          ))}
        </div>
      </section>

      <section id="engineering-evidence" className="section">
        <SectionIntro
          eyebrow={content.sections.evidence.eyebrow}
          title={content.sections.evidence.title}
          text={content.sections.evidence.text}
        />

        <div className="capabilities-grid">
          {content.engineeringEvidence.map((item) => (
            <article key={item.title} className="capability-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section section--muted">
        <SectionIntro
          eyebrow={content.sections.capabilities.eyebrow}
          title={content.sections.capabilities.title}
          text={content.sections.capabilities.text}
        />

        <div className="capabilities-grid">
          {content.capabilities.map((capability) => (
            <article key={capability.title} className="capability-card">
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <SectionIntro
          eyebrow={content.sections.experience.eyebrow}
          title={content.sections.experience.title}
          text={content.sections.experience.text}
        />

        <div className="timeline">
          {content.experience.map((item) => (
            <article key={item.role} className="timeline-card">
              <div className="timeline-card__top">
                <h3>{item.role}</h3>
                <span>{item.period}</span>
              </div>

              <ul className="check-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <SectionIntro
          eyebrow={content.sections.notes.eyebrow}
          title={content.sections.notes.title}
          text={content.sections.notes.text}
        />

        <div className="notes-card">
          <ul className="check-list">
            {content.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact-card">
          <div>
            <p className="eyebrow">{content.sections.contact.eyebrow}</p>
            <h2>{content.sections.contact.title}</h2>
            <p>{content.sections.contact.text}</p>
          </div>

          <div className="contact-card__actions">
            <a className="button" href={`mailto:${profileLinks.email}`}>
              {content.sections.contact.emailButton}
            </a>
            <a className="button button--ghost" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              {content.nav.linkedin}
            </a>
          </div>

          <div className="contact-form-wrap">
            <h3>{content.sections.contact.formTitle}</h3>
            <p>{content.sections.contact.formDescription}</p>

            <form
              className="contact-form"
              action={contactFormConfig.action}
              method={contactFormConfig.method}
              target="_blank"
            >
              <input type="hidden" name="_subject" value={content.sections.contact.formTitle} />

              <div className="contact-form__grid">
                <label className="contact-field">
                  <span>{content.sections.contact.nameLabel}</span>
                  <input
                    type="text"
                    name="name"
                    placeholder={content.sections.contact.namePlaceholder}
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>{content.sections.contact.emailLabel}</span>
                  <input
                    type="email"
                    name="email"
                    placeholder={content.sections.contact.emailPlaceholder}
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>{content.sections.contact.messageLabel}</span>
                <textarea
                  name="message"
                  placeholder={content.sections.contact.messagePlaceholder}
                  rows={5}
                  required
                />
              </label>

              <button type="submit" className="button button--ghost">
                {content.sections.contact.submitButton}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
