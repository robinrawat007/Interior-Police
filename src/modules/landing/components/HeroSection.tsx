import { MoveRight, Shield, User, Building2, Package, ChevronDown } from "lucide-react";

interface HeroSectionProps {
    onContactClick: (type: 'client' | 'design') => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
    const scrollToSection = (id: string, type?: 'client' | 'design') => {
        if (id === 'contact' && type) {
            onContactClick(type);
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative pt-24 pb-0 overflow-hidden animate-in fade-in fill-mode-both duration-1000">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative z-10 space-y-8 animate-in slide-in-from-left-10 fade-in duration-1000 delay-300 fill-mode-both">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                            <Shield className="h-4 w-4" />
                            Accountability in Interior Construction
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] uppercase">
                            Bringing <br />
                            <span className="text-primary italic">Accountability</span> <br />
                            <span className="text-3xl lg:text-4xl tracking-normal normal-case font-extrabold text-muted-foreground">to Interior Construction</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-medium">
                            A structured ecosystem for transparent bidding, secure payments, and process-driven execution.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button
                                onClick={() => scrollToSection('contact', 'client')}
                                className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_20px_40px_rgba(0,194,255,0.4)] hover:translate-y-[-4px] active:translate-y-0 group"
                            >
                                Book a Consultation
                                <MoveRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollToSection('contact', 'design')}
                                className="border border-border bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-black text-base hover:bg-white/10 transition-all hover:translate-y-[-4px] active:translate-y-0"
                            >
                                Enlist as a Design Firm
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-10 pt-8 border-t border-border/50">
                            {[
                                { label: "Design Firms", value: "500+", icon: Building2 },
                                { label: "Projects Completed", value: "1200+", icon: Shield },
                                { label: "Secured in Escrow", value: "₹50Cr+", icon: Package }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-xl">
                                        <stat.icon className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xl font-black tracking-tight">{stat.value}</div>
                                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Diagram Illustration */}
                    <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center animate-in scale-in-95 fade-in duration-1000 delay-500 fill-mode-both lg:mt-[-40px]">
                        <div className="absolute inset-0 border-2 border-primary/5 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-8 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        <div className="relative z-20 bg-background border-4 border-primary/40 p-10 rounded-full shadow-[0_0_150px_rgba(0,194,255,0.3)] animate-pulse-slow">
                            <Shield className="h-10 w-10 lg:h-12 lg:w-12 text-primary" />
                        </div>

                        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                            {/* Simple solid strokes with opacity for maximum reliability */}
                            <line x1="200" y1="200" x2="200" y2="70" stroke="#00c2ff" strokeWidth="2" strokeDasharray="6 6" />
                            <line x1="200" y1="200" x2="60" y2="300" stroke="#00c2ff" strokeWidth="2" strokeDasharray="6 6" />
                            <line x1="200" y1="200" x2="340" y2="300" stroke="#00c2ff" strokeWidth="2" strokeDasharray="6 6" />
                        </svg>

                        <div className="absolute top-4 lg:top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group">
                            <div className="bg-card border-2 border-primary/30 p-3 lg:p-4 rounded-full group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-2xl backdrop-blur-md">
                                <User className="h-5 w-5 lg:h-8 lg:w-8 text-primary" />
                            </div>
                            <span className="font-black text-[9px] uppercase text-muted-foreground">Client</span>
                        </div>

                        <div className="absolute bottom-12 left-4 lg:left-0 flex flex-col items-center gap-2 group">
                            <div className="bg-card border-2 border-primary/30 p-3 lg:p-4 rounded-full group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-2xl backdrop-blur-md">
                                <Building2 className="h-5 w-5 lg:h-8 lg:w-8 text-primary" />
                            </div>
                            <span className="font-black text-[9px] uppercase text-muted-foreground">Design Firm</span>
                        </div>

                        <div className="absolute bottom-12 right-4 lg:right-0 flex flex-col items-center gap-2 group">
                            <div className="bg-card border-2 border-primary/30 p-3 lg:p-4 rounded-full group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-2xl backdrop-blur-md">
                                <Package className="h-5 w-5 lg:h-8 lg:w-8 text-primary" />
                            </div>
                            <span className="font-black text-[9px] uppercase text-muted-foreground">Supplier</span>
                        </div>
                    </div>
                </div>

                {/* Single Full-Width Luxury Image - Cinematic Restoration */}
                <div className="relative animate-in slide-in-from-bottom-20 fade-in duration-1000 delay-1000 fill-mode-both -mx-4 sm:-mx-6 lg:-mx-8 mt-24 lg:mt-32">
                    <div className="relative h-[400px] lg:h-[700px] w-full overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-y border-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
                            alt="Luxury Interior Result"
                            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-[5s] hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 z-10" />

                        {/* Floating Animated Shield */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center animate-bounce shadow-[0_0_80px_rgba(0,194,255,0.7)] backdrop-blur-md cursor-pointer hover:scale-110 transition-transform">
                                <Shield className="h-10 w-10 text-primary-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            </div>
                        </div>

                        <div className="absolute bottom-16 left-8 lg:left-16 z-20">
                            <div className="flex flex-col gap-2">
                                <span className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-2xl w-fit">Verified Masterpiece</span>
                                <p className="text-white/80 text-sm font-black uppercase tracking-widest pl-2 drop-shadow-md">Premium Execution via IP Protocol</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 opacity-50">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
                <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
        </section>
    );
}
