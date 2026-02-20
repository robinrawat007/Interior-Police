import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
    initialType?: 'client' | 'design';
    onToggle?: (type: 'client' | 'design') => void;
}

export default function ContactForm({ initialType = 'client', onToggle }: ContactFormProps) {
    const [type, setType] = useState<'client' | 'design'>(initialType);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        setType(initialType);
    }, [initialType]);

    const handleToggle = (newType: 'client' | 'design') => {
        setType(newType);
        if (onToggle) onToggle(newType);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // NOTE: These IDs should be replaced with actual ones from EmailJS dashboard
            // For now, we'll simulate a successful submission if IDs are missing
            const serviceId = "YOUR_SERVICE_ID";
            const templateId = "YOUR_TEMPLATE_ID";
            const publicKey = "YOUR_PUBLIC_KEY";

            if (serviceId === "YOUR_SERVICE_ID") {
                console.log("Form submission simulated (EmailJS IDs not configured)");
                await new Promise(resolve => setTimeout(resolve, 1500));
            } else {
                await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
            }

            setIsSuccess(true);
            formRef.current?.reset();
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error("Failed to send email:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 bg-[#0C0F16] relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-stretch">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-12 animate-in slide-in-from-left-20 fade-in duration-1000 fill-mode-both">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
                                <MessageSquare className="h-4 w-4" />
                                Get in Touch
                            </div>
                            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                                Let's Start <br />
                                <span className="text-primary italic">Talking</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-md">
                                {type === 'client'
                                    ? "Starting a project? We're ready to bring accountability to your interior journey."
                                    : "Looking to enlist? Join our professional ecosystem of verified design firms."}
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email Us", value: "ilarcstudio.in@gmail.com" },
                                { icon: Phone, label: "Call Us", value: "+91 96501 04661" },
                                { icon: MapPin, label: "Our Base", value: "Gurugram, HR, India" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="bg-card border border-border/50 p-4 rounded-2xl group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">{item.label}</div>
                                        <div className="text-lg font-bold">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The Form */}
                    <div className="animate-in slide-in-from-right-20 fade-in duration-1000 delay-300 fill-mode-both">
                        {/* Form Toggle */}
                        <div className="flex bg-card/40 border-2 border-border/50 p-1.5 rounded-2xl mb-8 backdrop-blur-md w-fit mx-auto lg:mx-0">
                            <button
                                onClick={() => handleToggle('client')}
                                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${type === 'client' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                            >
                                I am a Client
                            </button>
                            <button
                                onClick={() => handleToggle('design')}
                                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${type === 'design' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                            >
                                I am a Firm
                            </button>
                        </div>

                        <div className="bg-card/40 border-2 border-border/50 p-12 rounded-[3.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden group min-h-[600px] flex flex-col justify-center">
                            {/* Inner Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

                            {isSuccess ? (
                                <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
                                    <div className="bg-emerald-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500/30">
                                        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-black uppercase tracking-tighter">Message Sent!</h3>
                                        <p className="text-muted-foreground font-medium">We'll get back to you within 24 hours.</p>
                                    </div>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-primary text-sm font-black uppercase tracking-widest hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10 transition-all duration-500">
                                    <input type="hidden" name="form_type" value={type} />
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                                                {type === 'client' ? 'Full Name' : 'Firm Name'}
                                            </label>
                                            <input
                                                required
                                                name="from_name"
                                                type="text"
                                                placeholder={type === 'client' ? 'John Doe' : 'Acme Designs'}
                                                className="w-full bg-background/50 border-2 border-border/50 focus:border-primary/50 rounded-2xl px-6 py-4 outline-none transition-all font-medium"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                            <input
                                                required
                                                name="reply_to"
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-background/50 border-2 border-border/50 focus:border-primary/50 rounded-2xl px-6 py-4 outline-none transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                                        <textarea
                                            required
                                            name="message"
                                            rows={4}
                                            placeholder={type === 'client' ? 'Tell us about your project...' : 'Tell us about your firm and services...'}
                                            className="w-full bg-background/50 border-2 border-border/50 focus:border-primary/50 rounded-2xl px-6 py-4 outline-none transition-all font-medium resize-none"
                                        />
                                    </div>
                                    <button
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-[0_20px_40px_rgba(0,194,255,0.3)] hover:translate-y-[-4px] active:translate-y-0 disabled:opacity-50 disabled:translate-y-0 group"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                Sending...
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
