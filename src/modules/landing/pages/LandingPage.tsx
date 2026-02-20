import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import VitalsTicker from "../components/VitalsTicker";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import ClientsSection from "../components/ClientsSection";
import FirmsSection from "../components/FirmsSection";
import EscrowSection from "../components/EscrowSection";
import WhySection from "../components/WhySection";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function LandingPage() {
    const [formType, setFormType] = useState<'client' | 'design'>('client');

    const scrollToContact = (type: 'client' | 'design') => {
        setFormType(type);
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary scroll-smooth">
            <Navbar onContactClick={() => scrollToContact('client')} />
            <main>
                <HeroSection onContactClick={scrollToContact} />
                <VitalsTicker />
                <div id="industry-problem">
                    <ProblemSection />
                </div>
                <div id="solution">
                    <SolutionSection />
                </div>
                <div id="for-clients">
                    <ClientsSection />
                </div>
                <div id="for-design-firms">
                    <FirmsSection />
                </div>
                <div id="how-it-works">
                    <EscrowSection />
                </div>
                <WhySection />
                <ContactForm initialType={formType} onToggle={setFormType} />
            </main>
            <WhatsAppButton />

            <footer className="py-24 bg-card/10 border-t border-border/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-2 space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 bg-primary rounded-xl flex items-center justify-center">
                                    <ShieldIcon className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <span className="text-2xl font-black uppercase tracking-tighter">Interior Police</span>
                            </div>
                            <p className="text-muted-foreground text-lg max-w-sm font-medium">
                                Bringing accountability, transparency, and process-driven execution to the interior construction industry.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="font-black uppercase tracking-widest text-sm text-primary">Platform</h4>
                            <ul className="space-y-4 font-bold text-muted-foreground">
                                <li><button onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">The Solution</button></li>
                                <li><button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">How It Works</button></li>
                                <li><button onClick={() => document.getElementById('for-clients')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">For Clients</button></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="font-black uppercase tracking-widest text-sm text-primary">Company</h4>
                            <ul className="space-y-4 font-bold text-muted-foreground">
                                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                            © 2026 Interior Police. All Rights Reserved.
                        </div>
                        <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-muted-foreground">
                            <span>Status: Operational</span>
                            <span>Version: 2.0.4</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

import { Shield as ShieldIcon } from "lucide-react";
