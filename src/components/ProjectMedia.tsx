import { useState } from "react";
import type { Project } from "../data/projects";

type Props = {
  project: Project;
  pending: string;
  pendingDetail: string;
  className?: string;
  eager?: boolean;
};

export default function ProjectMedia({ project, pending, pendingDetail, className = "", eager = false }: Props) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const showImage = Boolean(project.cover && project.cover.src !== failedSrc);

  return (
    <div className={`project-media ${showImage ? "project-media--image" : "project-media--pending"} ${className}`}>
      {showImage ? (
        <img
          src={project.cover!.src}
          alt={project.cover!.alt}
          loading={eager ? "eager" : "lazy"}
          onError={() => setFailedSrc(project.cover!.src)}
        />
      ) : (
        <div className="media-placeholder" role="img" aria-label={pending}>
          <span className="media-placeholder__number">{project.number} / {project.total}</span>
          <span className="media-placeholder__title">{project.title}</span>
          <span className="media-placeholder__note">{pendingDetail}</span>
        </div>
      )}
    </div>
  );
}
