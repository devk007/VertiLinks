import timeAttendance from "./time-attendance-system";
import accessControl from "./access-control-system";
import cctvSecurity from "./cctv-security-surveillance";
import audioVideo from "./audio-video-solutions";
import structuredCabling from "./structured-cabling-solution";
import pabxSolution from "./pabx-solution";
import cloudSolutions from "./cloud-solutions";
import firewallGateway from "./firewall-gateway-system";
import seoServices from "./seo-services";
import websiteDevelopment from "./website-development-services";
import digitalMarketing from "./digital-marketing-solution";
import microsoftServices from "./microsoft-services";
import itSupportAmc from "./it-support-amc";

export default {
  [timeAttendance.slug]: timeAttendance,
  [accessControl.slug]: accessControl,
  [cctvSecurity.slug]: cctvSecurity,
  [audioVideo.slug]: audioVideo,
  [structuredCabling.slug]: structuredCabling,
  [pabxSolution.slug]: pabxSolution,
  [cloudSolutions.slug]: cloudSolutions,
  [firewallGateway.slug]: firewallGateway,
  [seoServices.slug]: seoServices,
  [websiteDevelopment.slug]: websiteDevelopment,
  [digitalMarketing.slug]: digitalMarketing,
  [microsoftServices.slug]: microsoftServices,
  [itSupportAmc.slug]: itSupportAmc,
};
