import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "./site";

type MetadataInput = {
  title: string;
  description: string;
  pathname?: string;
  type?: "website" | "article";
  publishedTime?: string;
  category?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  pathname = "/",
  type = "website",
  publishedTime,
  category,
  keywords,
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(pathname);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type,
      locale: "en_US",
      publishedTime,
      section: category,
      tags: keywords,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

type ArticleJsonLdInput = {
  title: string;
  description: string;
  pathname: string;
  datePublished: string;
};

export function createArticleJsonLd({
  title,
  description,
  pathname,
  datePublished,
}: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    url: absoluteUrl(pathname),
  };
}
