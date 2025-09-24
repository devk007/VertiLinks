import { expertiseData } from "../data/expertiseData";

export default function ExpertiseGrid() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-100 via-white to-sky-50" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-[2.2rem]">
            Our Expertise in Securing
          </h2>
          <p className="text-base leading-7 text-slate-600">
            Mantra offers safety and security solutions for every industry. Having vast experience and best practices know-how in security solution implementation makes Mantra a high grade safety and security solution provider. Mantra implemented their business integrated security solutions in diverse industries, from manufacturing, warehousing, logistics, health care, banking & finance, retail, hotels to government agencies.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm"
            >
              <div className="pointer-events-none absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-sky-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 top-10 h-36 w-36 rounded-full bg-sky-300/30 blur-3xl" />

              <div className="relative flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
