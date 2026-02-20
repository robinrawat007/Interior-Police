import { AlertTriangle, FileText, TrendingDown, Clock, UserX, ShieldQuestion } from "lucide-react";

const problems = [
    {
        title: "Unstructured Quotations",
        desc: "No standardized format leads to confusion and comparison difficulties",
        icon: FileText,
        color: "text-blue-500"
    },
    {
        title: "Underquoting to Win",
        desc: "Firms lowball bids, then cut corners or demand extras mid-project",
        icon: TrendingDown,
        color: "text-rose-500"
    },
    {
        title: "Payment Delays",
        desc: "Design firms face cash flow stress due to irregular payments",
        icon: ShieldQuestion,
        color: "text-amber-500"
    },
    {
        title: "No Accountability",
        desc: "Delays and quality issues with no enforceable consequences",
        icon: UserX,
        color: "text-red-500"
    },
    {
        title: "Trust-Based Execution",
        desc: "Projects rely on trust rather than verified process and documentation",
        icon: AlertTriangle,
        color: "text-orange-500"
    },
    {
        title: "Timeline Uncertainty",
        desc: "No guaranteed timelines or milestone tracking for clients",
        icon: Clock,
        color: "text-indigo-500"
    }
];

export default function ProblemSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Security Mesh Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`, backgroundSize: '40px 40px' }}
            />

            {/* Ambient Problem Glows */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-problem/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-problem/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16 space-y-6 animate-in slide-in-from-bottom-10 fade-in duration-1000 fill-mode-both">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-problem/20 border border-problem/30 text-problem text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                        <AlertTriangle className="h-4 w-4" />
                        Systemic Industry Failure
                    </div>
                    <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                        Interior Construction <br />
                        <span className="text-problem italic drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">Is Broken</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-black uppercase tracking-wider leading-relaxed opacity-60">
                        Outdated practices & hidden risks
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-20 fade-in duration-1000 delay-300 fill-mode-both">
                    {problems.map((p, i) => (
                        <div
                            key={i}
                            className="group relative p-8 rounded-[2.5rem] bg-card/30 border border-problem/10 hover:border-problem/40 transition-all duration-700 hover:translate-y-[-12px] shadow-2xl overflow-hidden backdrop-blur-2xl"
                        >
                            {/* Card Glow Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-problem/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Vibrant Amber Border Highlight */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-problem/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                            <div className="relative z-10">
                                <div className="bg-problem/20 p-5 rounded-[1.5rem] w-fit mb-8 group-hover:bg-problem/30 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                                    <p.icon className={`h-7 w-7 ${p.color}`} />
                                </div>
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-foreground group-hover:text-problem transition-colors duration-500">{p.title}</h3>
                                <p className="text-muted-foreground text-[13px] leading-relaxed font-bold uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                                    {p.desc}
                                </p>
                            </div>

                            {/* Animated Background Element */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-problem/5 rounded-full blur-3xl group-hover:bg-problem/10 transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
