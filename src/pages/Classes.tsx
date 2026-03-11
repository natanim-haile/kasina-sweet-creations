import { motion } from "framer-motion";
import { BookOpen, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import bakingClass from "@/assets/baking-class.jpg";

const features = [
  { icon: BookOpen, title: "Hands-On Learning", desc: "Practice real techniques with professional tools and ingredients." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Weekend and weekday classes available to fit your schedule." },
  { icon: Users, title: "Small Groups", desc: "Intimate class sizes ensure personalized attention from instructors." },
  { icon: Award, title: "Certificate", desc: "Receive a completion certificate to showcase your new skills." },
];

const upcomingClasses = [
  { title: "Beginner Cake Baking", date: "Every Saturday", duration: "3 hours", desc: "Learn the fundamentals of baking perfect sponge cakes, layering, and basic frosting techniques." },
  { title: "Advanced Cake Decorating", date: "1st & 3rd Sunday", duration: "4 hours", desc: "Master fondant work, sugar flowers, piping techniques, and creative cake design." },
  { title: "Cupcake & Pastry Workshop", date: "2nd & 4th Sunday", duration: "3 hours", desc: "Create gourmet cupcakes, éclairs, and pastries with professional-level frosting and fillings." },
];

const Classes = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-pastel-pink/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h1 className="section-title">Learn the Art of Baking</h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Join our in-person baking and cake decorating classes at Kasina Sweets. Whether you're a complete beginner or looking to refine your skills, our expert instructors will guide you through every step.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-body font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact to Enroll
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={bakingClass} alt="Baking class" className="rounded-xl shadow-lg w-full" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader title="Why Learn With Us?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center space-y-3"
              >
                <f.icon className="mx-auto text-primary" size={32} />
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <SectionHeader title="Upcoming Classes" subtitle="Reserve your spot by contacting us. Spaces fill up quickly!" />
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingClasses.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 space-y-3"
              >
                <h3 className="font-display text-xl font-semibold text-foreground">{c.title}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground font-body">
                  <span>📅 {c.date}</span>
                  <span>⏱ {c.duration}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Classes;
