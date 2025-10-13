import React from "react";

const toEmbedUrl = (url = "") => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com") || parsed.hostname.includes("youtu.be")) {
      if (parsed.hostname.includes("youtu.be")) {
        const videoId = parsed.pathname.slice(1);
        return `https://www.youtube.com/embed/${videoId}`;
      }
      if (parsed.searchParams.has("v")) {
        const videoId = parsed.searchParams.get("v");
        const embedUrl = new URL("https://www.youtube.com/embed/");
        embedUrl.pathname += videoId;
        if (parsed.searchParams.has("t")) {
          embedUrl.searchParams.set("start", parsed.searchParams.get("t"));
        }
        return embedUrl.toString();
      }
      if (parsed.pathname.startsWith("/embed/")) {
        return url;
      }
    }
  } catch {
    // ignore malformed URLs and fall through
  }
  return url;
};

export default function VideoSpotlight({ title, heading, description, videoUrl, caption }) {
  if (!videoUrl && !description) return null;

  const embedUrl = toEmbedUrl(videoUrl);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        {embedUrl ? (
          <div className="aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <iframe
              src={embedUrl}
              title={title || heading || "Product spotlight"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        ) : null}

        <div className="space-y-4">
          {(title || heading) && (
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              {title || heading}
            </h2>
          )}
          {description ? (
            <p className="text-base leading-7 text-slate-700 md:text-lg">{description}</p>
          ) : null}
          {caption ? (
            <p className="text-sm italic text-slate-500">{caption}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
