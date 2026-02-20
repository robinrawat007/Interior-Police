import { ArrowUpRight, Target, Shield, Zap, TrendingUp } from "lucide-react";

export default function FirmsSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const highlights = [
        { title: "Qualified Leads", icon: Target },
        { title: "Guaranteed Payouts", icon: Shield },
        { title: "Streamlined RFQs", icon: Zap },
        { title: "Zero Chasing", icon: TrendingUp }
    ];

    return (
        <section id="for-design-firms" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 animate-in slide-in-from-left-20 fade-in duration-1000 fill-mode-both">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
                            For Design Firms
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                            Focus On <br />
                            <span className="text-primary italic">The Design</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium max-w-xl">
                            We handle the RFQs, payment collection, and process management. You focus on delivering world-class interiors and growing your business.
                        </p>

                        {/* Highlighted Blocks Grid */}
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            {highlights.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group/item">
                                    <div className="bg-primary/10 p-2 rounded-lg group-hover/item:bg-primary/20 transition-colors">
                                        <item.icon className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground group-hover/item:text-foreground transition-colors leading-tight">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black text-base flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_20px_40px_rgba(0,194,255,0.4)] group"
                            >
                                Enlist Your Firm
                                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="relative group animate-in slide-in-from-right-20 fade-in duration-1000 fill-mode-both">
                        <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                                alt="Modern Office Design"
                                className="w-full h-[350px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-[4s]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
