import { Link } from "react-router-dom";

export default function SubProductList({ title, intro, products = [] }) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">{title}</h1>
        {intro && <p className="mt-3 text-gray-600 max-w-4xl">{intro}</p>}
      </header>

      <div className="space-y-16">
        {products.map((p) => (
          <div key={p.id} className="grid lg:grid-cols-[1fr_2fr_180px] gap-8  pb-10">
            {/* Left: Image */}
            <img
              src={p.image}
              alt={p.title}
              className="rounded-lg shadow-sm max-h-60 object-contain bg-white"
            />

            {/* Middle: Content */}
            <div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              {p.description && <p className="mt-2 text-gray-700">{p.description}</p>}
              {p.features?.length ? (
                <ul className="mt-4 space-y-1 text-gray-700">
                  {p.features.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
              ) : null}

              <Link
                to={p.href || "#"}
                className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Explore Product
              </Link>
            </div>

            {/* Right: OEM badge */}
            <aside className="flex lg:flex-col items-center lg:items-end">
              {p.oem && (
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wide text-gray-500">Original Equipment</div>
                  <div className="text-sm font-semibold">Manufacturer</div>
                  <div className="mt-2 inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs">
                    OEM
                  </div>
                </div>
              )}
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
}
