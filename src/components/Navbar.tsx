"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Laptop } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Laptop className="w-8 h-8 text-cyan-400 animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Miuyses
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#shop">Shop</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button className="relative">
              <ShoppingCart className="w-5 h-5 text-slate-300 hover:text-cyan-400 transition" />
              <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-slate-300">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 py-6">
          <div className="flex flex-col items-center gap-6">
            <MobileNavLink href="#home" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setMobileOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="#shop" onClick={() => setMobileOpen(false)}>Shop</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-slate-300 hover:text-cyan-400 transition font-medium relative group">
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all" />
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a href={href} onClick={onClick} className="text-slate-200 text-lg hover:text-cyan-400 transition">
    {children}
  </a>
);

export default Navbar;