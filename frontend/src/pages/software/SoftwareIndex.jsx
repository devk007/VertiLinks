import CatalogIndex from "../Catalog/CatalogIndex";
import SOFTWARES from "../../data/software";

export default function SoftwareIndex() {
  return <CatalogIndex data={SOFTWARES} kind="software" />;
}
