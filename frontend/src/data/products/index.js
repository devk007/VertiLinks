import idCardPrinters from "./id-card-printers";
import serverStorages from "./server-storages";
import laptopsDesktops from "./laptops-desktops";
import printersScanners from "./printers-scanners";
import cctvIpCameras from "./cctv-ip-cameras";
import faceBiometric from "./face-biometric";
import turnstileSpeedGates from "./turnstile-speed-gates";
import gateBarriers from "./gate-barriers";
import designerTablets from "./designer-tablets-displays";

export default {
  [idCardPrinters.slug]: idCardPrinters,
  [serverStorages.slug]: serverStorages,
  [laptopsDesktops.slug]: laptopsDesktops,
  [printersScanners.slug]: printersScanners,
  [cctvIpCameras.slug]: cctvIpCameras,
  [faceBiometric.slug]: faceBiometric,
  [turnstileSpeedGates.slug]: turnstileSpeedGates,
  [gateBarriers.slug]: gateBarriers,
  [designerTablets.slug]: designerTablets,
};
