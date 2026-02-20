import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "919650104661";
    const message = "Hello! I'm interested in learning more about Interior Police.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle className="h-6 w-6 group-hover:fill-current transition-colors" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
                Chat with us
            </span>
        </a>
    );
}
