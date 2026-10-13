import { Link, useParams } from "react-router-dom";
import ProjectMedia from "../components/ProjectMedia";
import { type Language, type SiteTranslation } from "../data/site";

type Props = { language: Language; content: SiteTranslation };

export default function ProjectDetailPage({ language, content }: Props) {
  const { slug } = useParams();
  const project = content.projects.find((item) => item.slug === slug);
  const back = `${language === "es" ? "/es" : "/"}#work`;

  if (!project) {
    return <main id="main" className="container detail-page detail-page--missing"><h1>{content.actions.missing}</h1><p>{content.actions.missingText}</p><Link className="text-link" to={back}>← {content.actions.back}</Link></main>;
  }

  const hasGalleryMedia = Boolean(project.gallery?.length || project.videos?.length);

  return (
    <main id="main" className="detail-page">
      <div className="container detail-page__intro">
        <Link className="back-link" to={back}>← {content.actions.back}</Link>
        <div className="detail-page__meta"><span>{project.number} / {project.total}</span><span>{project.category}</span><span>{project.period}</span></div>
        <h1>{project.title}</h1>
        <p className="detail-page__summary">{project.summary}</p>
        <a className="detail-page__gallery-link" href="#gallery">{content.actions.gallery}<span aria-hidden="true">↓</span></a>
      </div>
      <div className="container detail-page__content">
        <section className="detail-block" aria-labelledby="contribution-title"><span className="section-index">01</span><h2 id="contribution-title">{content.headings.contribution}</h2><p>{project.contribution}</p></section>
        <section className="detail-block" aria-labelledby="scope-title"><span className="section-index">02</span><h2 id="scope-title">{content.headings.approach}</h2><ul>{project.scope.map((point) => <li key={point}>{point}</li>)}</ul></section>
        <section className="detail-block" aria-labelledby="stack-title"><span className="section-index">03</span><h2 id="stack-title">{content.headings.technical}</h2><p>{project.stack.join(" · ")}</p></section>
        {project.resources && <section className="detail-block" aria-labelledby="project-resources-title">
          <span className="section-index">04</span><h2 id="project-resources-title">{project.resourceHeading ?? content.actions.resources}</h2>
          <div className="resource-links">
            {project.resources?.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">{item.label}<span aria-hidden="true"> ↗</span></a>)}
          </div>
        </section>}
      </div>
      <section id="gallery" className="container detail-gallery" aria-labelledby="gallery-title">
        <h2 id="gallery-title">{content.headings.images}</h2>
        <div className={`detail-gallery__grid${project.slug === "chessproject" ? " detail-gallery__grid--chess" : ""}`}>
          {!hasGalleryMedia && <figure><ProjectMedia project={project} pending={content.actions.imagePending} pendingDetail={content.actions.imagePendingDetail} className="project-media--gallery" eager /></figure>}
          {project.gallery?.map((image) => <figure key={image.src} className={image.portrait ? "detail-gallery__portrait" : undefined}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.caption}</figcaption></figure>)}
          {project.videos?.map((video) => <figure key={video.src} className={video.portrait ? "detail-gallery__portrait" : undefined}>
            <video controls preload="metadata" playsInline poster={video.poster} aria-label={video.label}>
              <source src={video.src} type="video/mp4" />
              <a href={video.src}>{video.label}</a>
            </video>
            <figcaption>{video.label}</figcaption>
          </figure>)}
        </div>
      </section>
      <div className="container detail-page__end"><Link className="text-link" to={back}>← {content.actions.back}</Link></div>
    </main>
  );
}
