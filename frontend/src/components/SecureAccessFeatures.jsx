import * as Lucide from "lucide-react";
import secureAccessData from "../data/secureAccess";

export default function SecureAccessFeatures() {
  const { title, description, featuresHeading, features, idealFor } = secureAccessData;

  return (
      <div className="bg-[#f3f3f1]">
          <section className="max-w-7xl mx-auto px-4 mt-2 md:px-8 py-8">
              <header className="mb-10">
                  <h2 className="text-3xl font-bold">{title}</h2>
                  <p className="mt-3 text-gray-600 max-w-4xl">{description}</p>
              </header>

              {/* Features */}
              <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-4">{featuresHeading}</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                      {features.map((f, i) => (
                          <div key={i} className="flex items-start gap-2">
                              <Lucide.ChevronRight className="mt-1 h-5 w-5 text-blue-600" />
                              <div>
                                  <strong>{f.title}:</strong> <span>{f.desc}</span>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Ideal For */}
              <div>
                  <h3 className="text-2xl font-semibold mb-6">Ideal For:</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                      {idealFor.map((item, i) => {
                          const Icon = Lucide[item.icon] || Lucide.Circle;
                          return (
                              <div key={i} className="flex flex-col items-center text-center">
                                  <Icon className="h-10 w-10 text-blue-600 mb-3" />
                                  <span className="text-sm font-medium">{item.label}</span>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </section>
      </div>
  );
}
