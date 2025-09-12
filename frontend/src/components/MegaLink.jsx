import { Link } from "react-router-dom";

export default function MegaLink({ to, label, Icon }) {
  return (
    <Link to={to} className="flex items-center gap-3 group">
      {Icon && <Icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />}
      <span className="font-medium text-gray-800 group-hover:underline">{label}</span>
    </Link>
  );
}
