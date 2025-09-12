import { expertiseData } from "../data/expertiseData";

export default function ExpertiseGrid() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Expertise in Securing</h2>
        <p className="text-gray-600 mb-10">
          Mantra offers safety and security solutions for every industry. Having
          vast experience and best practices know-how in security solution
          implementation makes Mantra a high grade safety and security solution
          provider. Mantra implemented their business integrated security
          solutions in diverse industries, from manufacturing, warehousing,
          logistics, health care, banking & finance, retail, hotels to
          government agencies.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="flex items-start p-6 border border-gray-200 h-[220px] rounded-md bg-white"
            >
              {/* Icon */}
              <div className="text-blue-600 min-w-[50px] flex justify-center">
                {item.icon}
              </div>

              {/* Divider line */}
              <div className="w-px bg-gray-200 mx-4"></div>

              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline mt-3"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
