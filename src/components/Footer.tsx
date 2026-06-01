import React from "react";
import {
  
  Link ,
  CircleFadingPlus,
  Mail,
  Laptop,
  ArrowRight,
  GitGraph,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-slate-800/50 bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <Laptop className="w-6 h-6 text-cyan-400" />
              </div>

              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Miuyses
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              Redefining portable computing through innovative LCD technology,
              premium engineering, and immersive 3D experiences.
            </p>

            <div className="flex items-center gap-3">
              
              <SocialIcon
                href="#"
                label="Instagram"
                icon={<CircleFadingPlus size={18} />}
              />
              <SocialIcon
                href="#"
                label="LinkedIn"
                icon={<Link size={18} />}
              />
              <SocialIcon
                href="#"
                label="GitHub"
                icon={<GitGraph size={18} />}
              />
              <SocialIcon
                href="#"
                label="Email"
                icon={<Mail size={18} />}
              />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Explore
            </h4>

            <ul className="space-y-3">
              <FooterLink href="#">New Arrivals</FooterLink>
              <FooterLink href="#">Best Sellers</FooterLink>
              <FooterLink href="#">Gaming Laptops</FooterLink>
              <FooterLink href="#">Ultrabooks</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Support
            </h4>

            <ul className="space-y-3">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Warranty</FooterLink>
              <FooterLink href="#">Returns & Refunds</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Newsletter
            </h4>

            <p className="text-slate-400 text-sm mb-4">
              Subscribe and receive exclusive offers, product launches, and
              technology updates.
            </p>

            <div className="flex overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />

              <button className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-white font-medium transition-all hover:scale-105">
                Join
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Miuyses. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialIcon = ({ href, icon, label }: SocialIconProps) => (
  <a
    href={href}
    aria-label={label}
    className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <a
      href={href}
      className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
    >
      {children}
    </a>
  </li>
);

export default Footer;