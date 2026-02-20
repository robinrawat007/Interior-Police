import { Shield, Zap, TrendingUp, Building2, CheckCircle2 } from "lucide-react";

const metrics = [
    { label: "RERA COMPLIANT", icon: Shield },
    { label: "ESCROW SECURED", icon: Zap },
    { label: "ISO 9001 VERIFIED", icon: CheckCircle2 },
    { label: "GST REGISTERED", icon: Building2 },
    { label: "₹50CR+ SECURED", icon: TrendingUp },
    { label: "QC AUDITED", icon: CheckCircle2 },
    { label: "STND-3 CORE", icon: Shield },
];

export default function VitalsTicker() {
    return (
        <div className="bg-primary/10 border-y border-primary/20 py-4 flex overflow-hidden select-none">
            <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
                {[...metrics, ...metrics].map((m, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                        <m.icon className="h-4 w-4 text-primary group-hover:scale-125 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary transition-colors">
                            {m.label}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20 ml-12" />
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
}
