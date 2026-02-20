import { Shield } from "lucide-react";

interface NavbarProps {
    onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
    const scrollToSection = (id: string) => {
        if (id === 'contact') {
            onContactClick();
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="bg-primary/20 p-2 rounded-lg">
                            <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">Interior Police</span>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { name: "Solution", id: "solution" },
                            { name: "For Clients", id: "for-clients" },
                            { name: "For Design Firms", id: "for-design-firms" },
                            { name: "How It Works", id: "how-it-works" }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,194,255,0.3)]"
                        >
                            Talk to Us
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
