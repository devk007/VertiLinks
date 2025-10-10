import { IdCard, Camera, Laptop2, Printer, Clock3, TrafficCone } from "lucide-react";
import images from "./images";

const idPrinterImages = images.products.idCardPrinters;
const cctvImages = images.products.cctvIpCameras;
const laptopImages = images.products.laptopsDesktops;
const printScanImages = images.products.printersScanners;
const timeAttendanceImages = images.products.timeAttendance;
const gateBarrierImages = images.products.gateBarriers;
const cameGateImages = gateBarrierImages.came.models;
const bftGateImages = gateBarrierImages.bft.models;

const dockData = {
  items: [
    {
      id: "id-card-printers",
      label: "ID Card Printers",
      icon: IdCard,
      panel: {
        title: "ID Card Printers",
        products: [
          {
            slug: "hid-fargo-dtc1250e",
            code: "DTC1250E",
            title: "HID Fargo DTC1250e",
            image: idPrinterImages.fargo.dtc1250e,
            href: "/products/id-card-printers/hid-fargo/dtc1250e",
          },
          {
            slug: "hid-fargo-dtc1500",
            code: "DTC1500",
            title: "HID Fargo DTC1500",
            image: idPrinterImages.fargo.dtc1500,
            href: "/products/id-card-printers/hid-fargo/dtc1500",
          },
          {
            slug: "hid-fargo-dtc4500e",
            code: "DTC4500E",
            title: "HID Fargo DTC4500e",
            image: idPrinterImages.fargo.dtc4500e,
            href: "/products/id-card-printers/hid-fargo/dtc4500e",
          },
          {
            slug: "hid-fargo-hdp6600",
            code: "HDP6600",
            title: "HID Fargo HDP6600",
            image: idPrinterImages.fargo.hdp6600,
            href: "/products/id-card-printers/hid-fargo/hdp6600",
          },
          {
            slug: "evolis-primacy2",
            code: "PRIMACY2",
            title: "Evolis Primacy 2",
            image: idPrinterImages.evolis.primacy2,
            href: "/products/id-card-printers/evolis/primacy-2",
          },
          {
            slug: "evolis-primacy",
            code: "PRIMACY",
            title: "Evolis Primacy",
            image: idPrinterImages.evolis.primacy,
            href: "/products/id-card-printers/evolis/primacy",
          },
        ],
      },
    },
    {
      id: "cameras",
      label: "Cameras",
      icon: Camera,
      panel: {
        title: "CCTV & IP Cameras",
        products: [
          {
            slug: "hikvision-acusense",
            code: "AcuSense",
            title: "Hikvision Pro Series AcuSense",
            image: cctvImages.hikvision.network.proAcuSense,
            href: "/products/cctv-ip-cameras/hkvision-network-cameras/pro-series-with-acusense",
          },
          {
            slug: "hikvision-colorvu",
            code: "ColorVu",
            title: "Hikvision ColorVu Series",
            image: cctvImages.hikvision.network.colorvu,
            href: "/products/cctv-ip-cameras/hkvision-network-cameras/pro-series-with-colorvu",
          },
          {
            slug: "hikvision-panoramic",
            code: "Panoramic",
            title: "Hikvision Panoramic Series",
            image: cctvImages.hikvision.network.panoramic,
            href: "/products/cctv-ip-cameras/hkvision-network-cameras/panoramic-series",
          },
          {
            slug: "dahua-wizmind7",
            code: "WizMind 7",
            title: "Dahua WizMind 7 Series",
            image: cctvImages.dahua.network.wizmind7,
            href: "/products/cctv-ip-cameras/dahua-network-cameras/wizmind-7-series",
          },
          {
            slug: "dahua-wizsense",
            code: "WizSense",
            title: "Dahua WizSense Series",
            image: cctvImages.dahua.network.wizsense,
            href: "/products/cctv-ip-cameras/dahua-network-cameras/wizsense-series",
          },
          {
            slug: "dahua-xspans",
            code: "X-Spans",
            title: "Dahua X-Spans PTZ",
            image: cctvImages.dahua.ptz.xspans,
            href: "/products/cctv-ip-cameras/dahua-ptz-cameras/x-spans-series",
          },
        ],
      },
    },
    {
      id: "laptops-desktops",
      label: "Laptops & Desktops",
      icon: Laptop2,
      panel: {
        title: "Business Laptops & Desktops",
        products: [
          {
            slug: "apple-macbook",
            code: "MacBook",
            title: "Apple MacBook Lineup",
            image: laptopImages.apple.models.macbooks,
            href: "/products/laptops-and-desktop-computers/apple/macbooks",
          },
          {
            slug: "dell-xps",
            code: "XPS/Latitude",
            title: "Dell XPS & Latitude",
            image: laptopImages.dell.models.xpsLatitude,
            href: "/products/laptops-and-desktop-computers/dell/xps-latitude-laptops",
          },
          {
            slug: "hp-spectre",
            code: "Spectre",
            title: "HP Spectre / Pavilion",
            image: laptopImages.hp.models.pavilionSpectre,
            href: "/products/laptops-and-desktop-computers/hp/pavilion-spectre",
          },
          {
            slug: "lenovo-thinkpad",
            code: "ThinkPad",
            title: "Lenovo ThinkPad Series",
            image: laptopImages.lenovo.models.thinkpad,
            href: "/products/laptops-and-desktop-computers/lenovo/thinkpad-business",
          },
          {
            slug: "asus-rog",
            code: "ROG/TUF",
            title: "ASUS ROG & TUF",
            image: laptopImages.asus.models.rogTuf,
            href: "/products/laptops-and-desktop-computers/asus/rog-tuf-gaming",
          },
          {
            slug: "microsoft-surface",
            code: "Surface",
            title: "Microsoft Surface Portfolio",
            image: laptopImages.microsoft.models.surfaceLaptop,
            href: "/products/laptops-and-desktop-computers/microsoft/surface-laptop",
          },
        ],
      },
    },
    {
      id: "printers-scanners",
      label: "Printers & Scanners",
      icon: Printer,
      panel: {
        title: "Office Printers & Scanners",
        products: [
          {
            slug: "hp-laserjet",
            code: "LaserJet",
            title: "HP LaserJet Enterprise",
            image: printScanImages.hp.laserJet,
            href: "/products/printers-and-scanners/hp/laserjet-enterprise-series",
          },
          {
            slug: "hp-officejet",
            code: "OfficeJet",
            title: "HP OfficeJet Pro",
            image: printScanImages.hp.officeJet,
            href: "/products/printers-and-scanners/hp/officejet-pro-series",
          },
          {
            slug: "hp-color-laser",
            code: "Color MFP",
            title: "HP Color LaserJet MFP",
            image: printScanImages.hp.colorLaserJet,
            href: "/products/printers-and-scanners/hp/color-laserjet-mfp-series",
          },
          {
            slug: "hp-scanjet",
            code: "ScanJet",
            title: "HP ScanJet Enterprise",
            image: printScanImages.hp.scanJet,
            href: "/products/printers-and-scanners/hp/scanjet-enterprise-series",
          },
          {
            slug: "canon-pixma",
            code: "PIXMA",
            title: "Canon PIXMA G-Series",
            image: printScanImages.canon.pixma,
            href: "/products/printers-and-scanners/canon/pixma-g-series",
          },
          {
            slug: "canon-isensys",
            code: "i-SENSYS",
            title: "Canon i-SENSYS Series",
            image: printScanImages.canon.isensys,
            href: "/products/printers-and-scanners/canon/i-sensys-lbp-series",
          },
        ],
      },
    },
    {
      id: "gate-barriers",
      label: "Gate Barriers",
      icon: TrafficCone,
      panel: {
        title: "Vehicular Gate Barriers",
        products: [
          {
            slug: "came-gard-gt4",
            code: "GARD GT4",
            title: "CAME GARD GT4",
            image: cameGateImages.gardGt4,
            href: "/products/gate-barriers/came/gard-gt4",
          },
          {
            slug: "came-gard-px",
            code: "GARD PX",
            title: "CAME GARD PX",
            image: cameGateImages.gardPx,
            href: "/products/gate-barriers/came/gard-px",
          },
          {
            slug: "came-gard-12",
            code: "GARD 12",
            title: "CAME GARD 12",
            image: cameGateImages.gard12,
            href: "/products/gate-barriers/came/gard-12",
          },
          {
            slug: "bft-giotto-bt-b-ultra-36",
            code: "Giotto BT B",
            title: "BFT Giotto BT B Ultra 36",
            image: bftGateImages.giottoBtBUltra36,
            href: "/products/gate-barriers/bft/giotto-bt-b-ultra-36",
          },
          {
            slug: "bft-maxima-ultra-36",
            code: "Maxima 36",
            title: "BFT Maxima Ultra 36",
            image: bftGateImages.maximaUltra36,
            href: "/products/gate-barriers/bft/maxima-ultra-36",
          },
          {
            slug: "bft-michelangelo",
            code: "Michelangelo",
            title: "BFT Michelangelo BT A",
            image: bftGateImages.michelangelo,
            href: "/products/gate-barriers/bft/michelangelo-bt-a",
          },
        ],
      },
    },
    {
      id: "time-attendance",
      label: "Time Attendance",
      icon: Clock3,
      panel: {
        title: "Time Attendance Devices",
        products: [
          {
            slug: "zkteco-horus-h1",
            code: "Horus H1",
            title: "ZKTeco Horus H1",
            image: timeAttendanceImages.zkteco.horusH1,
            href: "/products/time-attendance/zkteco/horus-h1",
          },
          {
            slug: "zkteco-speedface",
            code: "SpeedFace",
            title: "ZKTeco SpeedFace V5L",
            image: timeAttendanceImages.zkteco.speedFaceV5l,
            href: "/products/time-attendance/zkteco/speedface-v5l",
          },
          {
            slug: "zkteco-tf1700",
            code: "TF1700",
            title: "ZKTeco TF1700",
            image: timeAttendanceImages.zkteco.tf1700,
            href: "/products/time-attendance/zkteco/tf1700",
          },
          {
            slug: "zkteco-f18",
            code: "F18",
            title: "ZKTeco F18",
            image: timeAttendanceImages.zkteco.f18,
            href: "/products/time-attendance/zkteco/f18",
          },
          {
            slug: "zkteco-ua300",
            code: "UA300",
            title: "ZKTeco UA300",
            image: timeAttendanceImages.zkteco.ua300,
            href: "/products/time-attendance/zkteco/ua300",
          },
          {
            slug: "zkteco-s922",
            code: "S922",
            title: "ZKTeco S922 Portable",
            image: timeAttendanceImages.zkteco.s922,
            href: "/products/time-attendance/zkteco/s922",
          },
        ],
      },
    },
  ],
};

export default dockData;
