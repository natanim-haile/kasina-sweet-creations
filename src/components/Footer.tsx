import { Link } from "react-router-dom";
import { Phone, MapPin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-warm-brown text-primary-foreground">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Kasina Sweets" className="h-10 w-10 rounded-full" />
            <span className="font-display text-xl font-bold">Kasina Sweets</span>
          </div>
          <p className="font-body text-sm opacity-80">Turning passion into pastries. Premium cakes, catering, and baking education in Addis Ababa.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Cakes", "Classes", "Gallery", "Contact"].map((label) => (
              <Link key={label} to={label === "Home" ? "/" : `/${label.toLowerCase()}`} className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm opacity-80">
              <Phone size={16} />
              <span>+251 985104343</span>
            </div>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <Phone size={16} />
              <span>+251 938422605</span>
            </div>
            <div className="flex items-start gap-2 text-sm opacity-80">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Megenagna, Siti Mall, Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
          <a
            href="https://youtube.com/@kasinasweets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            <Youtube size={20} />
            <span>YouTube Channel</span>
          </a>
          <p className="text-sm opacity-60 mt-3">Join our 40k+ community</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
        <p className="font-body text-sm opacity-60">© {new Date().getFullYear()} Kasina Sweets & Catering PLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
