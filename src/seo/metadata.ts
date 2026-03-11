type SeoMetadata = {
  title: string;
  description: string;
  urlPath?: string;
  image?: string;
  type?: "website" | "article";
  siteName?: string;
};

const DEFAULT_OG_IMAGE = "/assets/chessproject-overview.jpg";
const DEFAULT_SITE_NAME = "Alberto Gracia Martelo Portfolio";

function toAbsoluteUrl(pathOrUrl: string, origin: string) {
  try {
    return new URL(pathOrUrl, origin).toString();
  } catch {
    return pathOrUrl;
  }
}

function upsertMetaTag(key: "name" | "property", value: string, content: string) {
  const selector = `meta[${key}="${value}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(key, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
}

export function applySeoMetadata({
  title,
  description,
  urlPath = window.location.pathname,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  siteName = DEFAULT_SITE_NAME
}: SeoMetadata) {
  const origin = window.location.origin;
  const absoluteUrl = toAbsoluteUrl(urlPath, origin);
  const absoluteImage = toAbsoluteUrl(image, origin);

  document.title = title;
  upsertCanonical(absoluteUrl);

  upsertMetaTag("name", "description", description);
  upsertMetaTag("name", "twitter:card", "summary_large_image");
  upsertMetaTag("name", "twitter:title", title);
  upsertMetaTag("name", "twitter:description", description);
  upsertMetaTag("name", "twitter:image", absoluteImage);

  upsertMetaTag("property", "og:type", type);
  upsertMetaTag("property", "og:site_name", siteName);
  upsertMetaTag("property", "og:title", title);
  upsertMetaTag("property", "og:description", description);
  upsertMetaTag("property", "og:url", absoluteUrl);
  upsertMetaTag("property", "og:image", absoluteImage);
}
