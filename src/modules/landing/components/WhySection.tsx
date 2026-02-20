import { Shield, Target, Zap, Users2 } from "lucide-react";

const principles = [
    {
        number: "01",
        title: "Accountability",
        desc: "We enforce standards for project success.",
        icon: Shield
    },
    {
        number: "02",
        title: "Structure",
        desc: "Standardized interactions eliminate chaos.",
        icon: Target
    },
    {
        number: "03",
        title: "Speed",
        desc: "Streamlined processes mean faster delivery.",
        icon: Zap
    },
    {
        number: "04",
        title: "Trust",
        desc: "Escrow ensures fair treatment for all.",
        icon: Users2
    }
];

export default function WhySection() {
    return (
        <section id="why" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-20 fade-in duration-1000 fill-mode-both">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
                            Our Philosophy
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                            Why We <br />
                            <span className="text-primary italic">Exist</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium max-w-xl">
                            The industry is broken. We bring fintech-grade security and process-driven accountability to every project.
                        </p>


                    </div>

                    <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-right-20 fade-in duration-1000 delay-200 fill-mode-both">
                        {principles.map((p, i) => (
                            <div key={i} className={`p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 group ${i === 1 || i === 3 ? 'translate-y-8' : ''}`}>
                                <div className="text-2xl font-black text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">{p.number}</div>
                                <h3 className="text-base font-black mb-2 uppercase tracking-tight">{p.title}</h3>
                                <p className="text-muted-foreground leading-relaxed font-medium text-[11px]">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
