import { Link } from "react-router-dom";

/**
 * Reusable mega panel
 * Props: { title, intro, cta, links: [{label,to,icon}] }
 */
export default function MegaPanel({ title, intro, cta, links = [], onClose }) {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-12">
        {/* LEFT */}
        <div className="col-span-12 md:col-span-4 px-4 py-5 border-r border-slate-200/60">
          <h3 className="text-3xl font-bold text-blue-700">{title}</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">{intro}</p>
          {cta && (
            <Link
              to={cta.to}
              className="inline-block mt-6 rounded-lg border border-blue-600 px-5 py-2 text-blue-600 hover:bg-blue-50"
              onClick={onClose}
            >
              {cta.label}
            </Link>
          )}
        </div>

        {/* RIGHT */}
        <div className="col-span-12 md:col-span-8 px-4 py-5">
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-start gap-3 rounded-2xl border border-transparent px-3 py-3 transition duration-200 hover:border-blue-100 hover:bg-blue-50 group"
                onClick={onClose}
              >
                <item.icon className="h-7 w-7 shrink-0 text-blue-600 group-hover:text-blue-700" />
                <span className="text-[15px] font-medium leading-snug text-gray-800 group-hover:text-blue-700">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
