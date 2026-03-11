import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import bakingClass from "@/assets/baking-class.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-pastel-pink/20">
        <div className="container mx-auto">
          <SectionHeader title="Our Story" subtitle="From a simple passion for baking to one of Addis Ababa's most beloved bakery brands." />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Turning Passion Into Pastries</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Kasina Sweets & Catering PLC was born from a deep love for baking. What started as a small home kitchen experiment quickly turned into a thriving business, driven by the desire to bring world-class pastries and cakes to the heart of Addis Ababa.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Located at Megenagna, Siti Mall, we've become a go-to destination for stunning wedding cakes, creative birthday cakes, and delectable catering for events of all sizes.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                But we're more than just a bakery. We're educators, teaching aspiring bakers the art and science of cake decorating through our hands-on baking classes. Our community of over 40,000 followers on social media is a testament to the love and trust people have in our craft.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={gallery2} alt="Beautiful cake by Kasina Sweets" className="rounded-xl shadow-lg w-full" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionHeader title="What Drives Us" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality Ingredients", desc: "We use only the finest ingredients to ensure every bite is pure perfection." },
              { title: "Creative Design", desc: "Every cake is a canvas — our designs push boundaries and exceed expectations." },
              { title: "Community & Education", desc: "We share our knowledge freely, empowering the next generation of bakers in Ethiopia." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center space-y-3"
              >
                <h3 className="font-display text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="section-padding">
        <div className="container mx-auto text-center space-y-8">
          <SectionHeader title="Learn With Us" subtitle="Our baking classes bring together passionate learners in a warm, hands-on environment." />
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={bakingClass}
            alt="Baking class at Kasina"
            className="rounded-xl shadow-lg mx-auto max-w-3xl w-full"
            loading="lazy"
          />
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default About;
