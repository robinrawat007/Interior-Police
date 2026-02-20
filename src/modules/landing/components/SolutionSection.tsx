import { MoveRight, Shield, Zap, BarChart3, Users, CheckCircle2 } from "lucide-react";

const solutions = [
    {
        number: "01",
        title: "Standardized RFQs",
        desc: "Structured requirements that simplify the bidding process for design firms.",
        icon: BarChart3
    },
    {
        number: "02",
        title: "Transparent Bidding",
        desc: "Compare bids on an even playing field with uniform BOQ structure.",
        icon: Users
    },
    {
        number: "03",
        title: "Escrow Protection",
        desc: "Payments secured in escrow and released automatically on verification.",
        icon: Shield
    },
    {
        number: "04",
        title: "Process Control",
        desc: "Documented and verified execution with data-driven accountability.",
        icon: Zap
    }
];

export default function SolutionSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="solution" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="space-y-6 animate-in slide-in-from-left-20 fade-in duration-1000 fill-mode-both">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
                            <CheckCircle2 className="h-4 w-4" />
                            Our Solution
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                            A Structured <br />
                            <span className="text-primary italic">Ecosystem</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium max-w-xl">
                            We've replaced manual coordination with a digital-first protocol that manages every phase of construction, from the first bid to the final handover.
                        </p>

                        <div className="pt-2">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black text-base flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_20px_40px_rgba(0,194,255,0.4)] group"
                            >
                                Investigate More
                                <MoveRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-right-20 fade-in duration-1000 delay-300 fill-mode-both">
                        {solutions.map((s, i) => (
                            <div
                                key={i}
                                className="group p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-4 right-6 text-4xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">
                                    {s.number}
                                </div>
                                <div className="bg-primary/10 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                                    <s.icon className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-lg font-black mb-2 uppercase tracking-tight">{s.title}</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
