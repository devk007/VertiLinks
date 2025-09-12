import { Fingerprint, Eye, Monitor, ScanFace, Hand, Cpu } from "lucide-react";

const dockData = {
  items: [
    {
      id: "fingerprint",
      label: "Fingerprint",
      icon: Fingerprint,
      panel: {
        title: "Fingerprint Scanner",
        products: [
          { slug: "mfs110", code: "MFS110", title: "L1 Fingerprint Scanner", image: "https://res.cloudinary.com/demo/image/upload/w_280,h_160,c_fit/v1/fp/mfs110.png" },
          { slug: "marc10", code: "MARC10", title: "Slick Capacitive Fingerprint Scanner", image: "https://res.cloudinary.com/demo/image/upload/w_280,h_160,c_fit/v1/fp/marc10.png" },
          { slug: "marc11", code: "MARC11", title: "Slick Capacitive Fingerprint Scanner", image: "https://res.cloudinary.com/demo/image/upload/w_280,h_160,c_fit/v1/fp/marc11.png" },
          { slug: "melo31", code: "MELO31", title: "Optical Fingerprint Scanner", image: "https://res.cloudinary.com/demo/image/upload/w_280,h_160,c_fit/v1/fp/melo31.png" },
          { slug: "mfs500", code: "MFS500", title: "Biometric Fingerprint Scanner", image: "https://res.cloudinary.com/demo/image/upload/w_280,h_160,c_fit/v1/fp/mfs500.png" },
          { slug: "mfs200", code: "MFS200", title: "Optical Fingerprint Scanner", image: "https://res.cloudinary.com/demo/image/upload/w_280,h_160,c_fit/v1/fp/mfs200.png" },
        ],
      },
    },
    { id: "iris", label: "Iris", icon: Eye, panel: { title: "Iris Scanner", products: [] } },
    { id: "pos", label: "POS", icon: Monitor, panel: { title: "POS / Integrated", products: [] } },
    { id: "face", label: "Face", icon: ScanFace, panel: { title: "Face Recognition", products: [] } },
    { id: "palm", label: "Palm", icon: Hand, panel: { title: "Palm Vein / Palmprint", products: [] } },
    { id: "modules", label: "Modules", icon: Cpu, panel: { title: "OEM Modules", products: [] } },
  ],
};

export default dockData;
