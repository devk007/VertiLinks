export default function WhyVertiLinks() {
  const points = [
    {
      title: "Empowering your business with secure solutions.",
      text: "From ID Card Printers to Biometric Terminals and Gate Barriers, VertiLinks offers end-to-end security and IT infrastructure. Our solutions are built to keep your workforce safe and your operations running without compromise.",
    },
    {
      title: "Trusted across industries.",
      text: "Whether it’s retail, education, banking, or large enterprise campuses — VertiLinks delivers tailor-made CCTV, access control, and IT systems designed around real business needs. Every industry gets a solution that fits its risks and requirements.",
    },
    {
      title: "Why choose VertiLinks?",
      text: "With years of expertise in security and technology, we combine innovation with reliability. Our customers trust us for consistent, scalable solutions — from printers and storage to advanced biometric access control — all backed by professional support.",
    },
  ];

  return (
    <section className="w-full mx-auto md:px-8 bg-[#f3f3f1] p-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Why VertiLinks?</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          VertiLinks provides expertise in securing businesses of every size. We
          take time to understand your goals and deliver solutions that combine
          safety, productivity, and future-ready technology.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-10">
        {points.map((p, i) => (
          <article key={i} className="flex flex-col gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100">
              {/* You can replace with actual image/icon */}
              <img
                src={`https://picsum.photos/seed/${i}/80`}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-gray-700 leading-relaxed">{p.text}</p>
            <a
              href="/contact"
              className="mt-2 inline-block text-blue-600 font-medium hover:underline"
            >
              Enquire now
            </a>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
