import { Link } from "react-router-dom";

/**
 * Reusable mega panel
 * Props: { title, intro, cta, links: [{label,to,icon}] }
 */
export default function MegaPanel({ title, intro, cta, links = [] }) {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-12 gap-0">
        {/* LEFT */}
        <div className="col-span-12 md:col-span-4 p-8 border-r">
          <h3 className="text-3xl font-bold text-blue-700">{title}</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">{intro}</p>
          {cta && (
            <Link
              to={cta.to}
              className="inline-block mt-6 rounded-lg border border-blue-600 px-5 py-2 text-blue-600 hover:bg-blue-50"
            >
              {cta.label}
            </Link>
          )}
        </div>

        {/* RIGHT */}
        <div className="col-span-12 md:col-span-8 p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-start gap-3 group"
              >
                <item.icon className="w-7 h-7 text-blue-600 group-hover:text-blue-700 shrink-0" />
                <span className="font-medium text-gray-800 group-hover:bg-[#f3f3f1]">
                  <p className="py-1">{item.label}</p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
