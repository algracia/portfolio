import type { Language } from "../data/site";

type SeoMetadata = {
  title: string;
  description: string;
  urlPath: string;
  image?: string;
  type: "website" | "article";
  language: Language;
  noIndex: boolean;
};

const origin = "https://albertogracia.dev";

function setMeta(key: "name" | "property", name: string, content?: string) {
  const selector = `meta[${key}="${name}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!content) {
    tag?.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(key, name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export function applySeoMetadata({ title, description, urlPath, image, type, language, noIndex }: SeoMetadata) {
  const url = new URL(urlPath, origin).toString();
  const imageUrl = image ? new URL(image, origin).toString() : undefined;
  document.title = title;
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", url);
  setMeta("name", "description", description);
  setMeta("name", "robots", noIndex ? "noindex, follow" : "index, follow, max-image-preview:large");
  setMeta("name", "twitter:card", imageUrl ? "summary_large_image" : "summary");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", imageUrl);
  setMeta("property", "og:type", type);
  setMeta("property", "og:site_name", "Alberto Gracia Martelo");
  setMeta("property", "og:locale", language === "en" ? "en_US" : "es_CO");
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:image", imageUrl);
  setMeta("property", "og:image:alt", imageUrl ? title : undefined);
  setMeta("name", "twitter:image:alt", imageUrl ? title : undefined);

  const structured = document.getElementById("structured-data");
  if (structured) {
    structured.textContent = JSON.stringify(type === "article" ? {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: title,
      description,
      url,
      author: { "@type": "Person", name: "Alberto Gracia Martelo" }
    } : {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Alberto Gracia Martelo",
      url: origin,
      jobTitle: language === "en" ? "IoT & Embedded Systems Engineer" : "Ingeniero IoT y de Sistemas Embebidos",
      description,
      sameAs: ["https://github.com/algracia", "https://www.linkedin.com/in/alberto-gracia/"]
    });
  }
}
