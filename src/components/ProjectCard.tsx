import { Link } from "react-router-dom";
import { type Project } from "../data/site";

type ProjectCardProps = {
  project: Project;
  detailCta: string;
};

function ProjectCard({ project, detailCta }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img src={project.coverImage.src} alt={project.coverImage.alt} className="project-card__image" />

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.period}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <ul className="check-list">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="tag-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-card__links">
          <Link className="project-card__cta" to={`/projects/${project.slug}`}>
            {detailCta}
          </Link>
          {project.resources?.map((resource) => (
            <a key={resource.label} href={resource.href} download>
              {resource.label}
            </a>
          ))}
          {project.externalLinks?.map((link) => (
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
    </article>
  );
}

export default ProjectCard;
