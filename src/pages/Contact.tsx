import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto">
            <SectionHeader title="Contact Us" subtitle="We'd love to hear from you. Reach out for orders, inquiries, or class enrollment." />

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-foreground">Get in Touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary shrink-0" size={20} />
                      <span className="font-body text-muted-foreground">Megenagna, Siti Mall, Addis Ababa, Ethiopia</span>
                    </div>
                    <a href="tel:+251985104343" className="flex items-center gap-3 hover:text-primary transition-colors">
                      <Phone className="text-primary shrink-0" size={20} />
                      <span className="font-body text-muted-foreground">+251 985104343</span>
                    </a>
                    <a href="tel:+251938422605" className="flex items-center gap-3 hover:text-primary transition-colors">
                      <Phone className="text-primary shrink-0" size={20} />
                      <span className="font-body text-muted-foreground">+251 938422605</span>
                    </a>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                  <iframe
                    title="Kasina Sweets Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.8!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMegenagna%2C+Addis+Ababa!5e0!3m2!1sen!2set!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
                  <h3 className="font-display text-2xl font-semibold text-foreground">Send a Message</h3>
                  <div>
                    <label className="font-body text-sm font-bold text-foreground block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-bold text-foreground block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+251 ..."
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-bold text-foreground block mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Tell us about your order or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-bold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
