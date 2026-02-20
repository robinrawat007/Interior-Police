import { Lock, Send, CheckCircle2, Wallet, AlertTriangle, ChevronRight, TrendingUp } from "lucide-react";
import React from 'react';

const steps = [
    {
        id: "01",
        title: "Deposit Capital",
        desc: "Full project funds are secured in a neutral, interest-bearing escrow account before site mobilization.",
        icon: Send,
        color: "text-primary"
    },
    {
        id: "02",
        title: "Trustless Security",
        desc: "Money is protected by automated protocols. We hold the capital so neither party has leverage over the other.",
        icon: Lock,
        color: "text-emerald-500"
    },
    {
        id: "03",
        title: "Milestone Audit",
        desc: "Our engineers verify every milestone against strict BOQ standards before any payment release is triggered.",
        icon: CheckCircle2,
        color: "text-cyan-500"
    },
    {
        id: "04",
        title: "Auto-Payout",
        desc: "Verified work triggers instant fund release to the design firm, ensuring continuous operational cash flow.",
        icon: Wallet,
        color: "text-emerald-500"
    },
    {
        id: "05",
        title: "Reform & Penalize",
        desc: "Standardized accountability with automatic penalties for delays or quality breaches built into the contract.",
        icon: AlertTriangle,
        color: "text-amber-500"
    }
];

export default function EscrowSection() {
    return (
        <section id="how-it-works" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 px-4">
                    <div className="space-y-6 animate-in slide-in-from-left-20 fade-in duration-1000 fill-mode-both">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
                            Risk Mitigation
                        </div>
                        <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                            How Escrow <br />
                            <span className="text-primary italic">Actually Works</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium max-w-xl">
                            We use a trustless escrow protocol to ensure funds are only released when milestones are verified. No more chasing payments or worrying about delivery.
                        </p>
                    </div>

                    <div className="relative group animate-in slide-in-from-right-20 fade-in duration-1000 delay-300 fill-mode-both">
                        <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="rounded-[2.5rem] overflow-hidden border-2 border-primary/20 shadow-2xl relative bg-card">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
                                alt="Verified Payments"
                                className="w-full h-[300px] lg:h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <div className="flex items-center gap-3 bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-primary/30">
                                    <div className="bg-primary/20 p-2 rounded-lg">
                                        <TrendingUp className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black uppercase tracking-widest leading-none">Status: Secured</div>
                                        <div className="text-[10px] font-bold text-muted-foreground mt-1 text-primary">PROJECT FUNDS RELEASED ON VERIFICATION</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Steeper (Timeline) with Arrows */}
                <div className="relative px-4 animate-in slide-in-from-bottom-20 fade-in duration-1000 delay-500 fill-mode-both">
                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2">
                        {steps.map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="flex-1 w-full lg:w-auto h-full min-h-[220px]">
                                    <div className="h-full bg-card/40 backdrop-blur-xl border border-border/50 p-6 rounded-[2.5rem] hover:border-primary/40 transition-all duration-700 group hover:translate-y-[-8px] hover:shadow-2xl flex flex-col">
                                        <div className={`${step.color} font-black text-3xl mb-4 group-hover:scale-110 transition-transform origin-left flex items-center justify-between`}>
                                            {step.id}
                                            <step.icon className="h-5 w-5 opacity-40" />
                                        </div>
                                        <h3 className="text-lg font-black mb-3 uppercase tracking-tight leading-tight">{step.title}</h3>
                                        <p className="text-muted-foreground text-[10px] leading-relaxed font-medium">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="flex items-center justify-center py-2 lg:py-0">
                                        <ChevronRight className="h-6 w-6 text-primary/30 rotate-90 lg:rotate-0" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
