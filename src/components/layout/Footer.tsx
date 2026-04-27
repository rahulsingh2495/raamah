import { Building2, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-[#1a4d2e] text-white rounded-t-[60px] overflow-hidden relative z-50 shadow-2xl">
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#b89b5e]/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-black/40 blur-[140px]" />
        <div className="absolute top-[10%] right-[20%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-[#b89b5e]/10 blur-[80px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {/* Column 1: About */}
          <div className="space-y-8">
            <div className="flex flex-col items-start leading-none group">
              <Building2 className="w-8 h-8 text-[#b89b5e] mb-2 transition-transform group-hover:scale-110" />
              <div className="flex flex-col items-start">
                <span className="text-3xl font-serif font-bold text-white tracking-tight leading-none">Raamah</span>
                <span className="text-[9px] uppercase tracking-[0.5em] font-black text-[#b89b5e] mt-1">Group</span>
              </div>
            </div>
            <p className="text-white/60 font-light leading-relaxed text-sm">
              Crafting timeless spaces for modern living. We redefine architectural excellence through sustainable innovation and functional artistry.
            </p>
          </div>

          {/* Column 2: Address */}
          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-[#b89b5e]">Address</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start group">
                <MapPin size={18} className="text-[#b89b5e] shrink-0 mt-1" />
                <span className="text-white/60 font-light text-sm group-hover:text-white transition-colors">
                  123 Architecture Lane, <br /> Vadodara, Gujarat, India
                </span>
              </li>
              <li className="flex gap-4 items-center group">
                <Phone size={18} className="text-[#b89b5e] shrink-0" />
                <span className="text-white/60 font-light text-sm group-hover:text-white transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Mail size={18} className="text-[#b89b5e] shrink-0" />
                <span className="text-white/60 font-light text-sm group-hover:text-white transition-colors">hello@raamah.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-[#b89b5e]">Company</h4>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { label: "Home", id: "home" },
                { label: "Projects", id: "ongoing" },
                { label: "Studio", id: "about" },
                { label: "Sustainability", id: "home" },
                { label: "Contact", id: "contact" }
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(item.id);
                      window.scrollTo(0, 0);
                    }}
                    className="text-white/60 hover:text-[#b89b5e] transition-all font-light text-sm tracking-wide flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#b89b5e] group-hover:w-4 transition-all duration-300" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-[#b89b5e]">Newsletter</h4>
            <div className="space-y-4">
              <p className="text-white/60 font-light text-sm">Subscribe to receive updates on our latest projects and architectural insights.</p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#b89b5e] transition-colors w-full text-white placeholder:text-white/30"
                />
                <button className="bg-[#b89b5e] hover:bg-[#c9ad71] text-white rounded-xl px-6 py-4 text-xs uppercase tracking-widest font-bold transition-all active:scale-95 shadow-lg shadow-[#b89b5e]/20">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Divider & Socials */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center gap-8">
          <div className="flex gap-6">
            {[Instagram, Facebook, Linkedin, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#b89b5e] hover:text-white transition-all duration-500 text-white/60">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#b89b5e]">
            <Building2 size={24} />
          </div>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold text-center">
            © 2026 Raamah Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
