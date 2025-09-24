import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_LINK = "https://wa.me/971000000000"; // TODO: replace with your business WhatsApp number

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-float fixed bottom-24 right-7 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform duration-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
