import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Home, FlaskConical, Monitor, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TEAM_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663328515444/yZRALyiVibTsRqii.png";
const MASCOT = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663328515444/BfegzZZcswCAUekz.png";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/model", label: "Model", icon: FlaskConical },
  { path: "/software", label: "Software", icon: Monitor },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-['Space_Grotesk',sans-serif]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src={TEAM_LOGO} 
              alt="AFMU-China Logo" 
              className="h-10 w-10 object-contain rounded-full bg-white p-0.5 shadow-md group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-primary">AFMU-China</span>
              <span className="text-sm text-muted-foreground ml-2">iGEM 2026</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "gap-2 font-medium",
                      isActive && "bg-primary text-primary-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
            <a 
              href="https://igem.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button variant="outline" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                iGEM.org
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-card border-t border-border py-4">
            <div className="container flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.path;
                return (
                  <Link 
                    key={item.path} 
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={cn(
                        "w-full justify-start gap-3",
                        isActive && "bg-primary text-primary-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Info */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src={TEAM_LOGO} 
                  alt="Team Logo" 
                  className="h-12 w-12 object-contain rounded-full bg-white p-0.5"
                />
                <div>
                  <h3 className="font-bold text-foreground">AFMU-China</h3>
                  <p className="text-sm text-muted-foreground">iGEM 2026</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Advancing synthetic biology for cancer immunotherapy
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mascot */}
            <div className="flex flex-col items-center gap-3">
              <img 
                src={MASCOT} 
                alt="Team Mascot" 
                className="h-24 w-auto object-contain animate-float"
              />
              <p className="text-xs text-muted-foreground">Our Team Mascot</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 AFMU-China iGEM Team. Licensed under{" "}
              <a 
                href="https://creativecommons.org/licenses/by/4.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CC BY 4.0
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
