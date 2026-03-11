import { Link, useParams } from "react-router-dom";
import { type SiteTranslation } from "../data/site";

type ProjectDetailPageProps = {
  content: SiteTranslation;
};

function ProjectDetailPage({ content }: ProjectDetailPageProps) {
  const { slug } = useParams();
  const project = content.projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main>
        <section className="section detail-page">
          <article className="detail-panel detail-panel--wide">
            <p className="eyebrow">{content.sections.projects.eyebrow}</p>
            <h2>{content.projectDetail.notFoundTitle}</h2>
            <p>{content.projectDetail.notFoundText}</p>
            <Link className="button" to="/">
              {content.actions.backHome}
            </Link>
          </article>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="section detail-page">
        <div className="detail-page__top">
          <Link className="button button--ghost" to="/#projects">
            {content.actions.backToProjects}
          </Link>
        </div>

        <article className="project-card project-card--detail">
          <img src={project.coverImage.src} alt={project.coverImage.alt} className="project-card__image" />
          <div className="project-card__body">
            <div className="project-card__meta">
              <span>{project.category}</span>
              <span>{project.period}</span>
            </div>

            <h1 className="detail-title">{project.title}</h1>
            <p>{project.summary}</p>

            <div className="detail-panel">
              <p className="eyebrow">{content.projectDetail.introLabel}</p>
              <p>{project.detail.intro}</p>
            </div>

            {project.resources && (
              <div>
                <h3 className="detail-heading">{content.projectDetail.pdfResources}</h3>
                <div className="project-card__links">
                  {project.resources.map((resource) => (
                    <a key={resource.label} href={resource.href} download>
                      {resource.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {project.externalLinks && (
              <div>
                <h3 className="detail-heading">{content.projectDetail.externalLinks}</h3>
                <div className="project-card__links">
                  {project.externalLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        <div className="detail-grid">
          <article className="detail-panel">
            <h3 className="detail-heading">{content.projectDetail.keyHighlights}</h3>
            <ul className="check-list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <h3 className="detail-heading">{content.projectDetail.techStack}</h3>
            <div className="tag-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </div>

        <div className="detail-grid">
          {project.detail.sections.map((section) => (
            <article key={section.title} className="detail-panel">
              <h3 className="detail-heading">{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>

        {project.gallery && (
          <section>
            <h3 className="detail-heading detail-heading--section">{content.projectDetail.gallery}</h3>
            <div className="gallery-grid">
              {project.gallery.map((asset) => (
                <figure key={asset.src} className="gallery-card">
                  <img src={asset.src} alt={asset.alt} />
                </figure>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default ProjectDetailPage;
