import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCard from "@/components/CakeCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeader from "@/components/SectionHeader";
import heroBg from "@/assets/hero-bg.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeCustom from "@/assets/cake-custom.jpg";
import cakeCupcakes from "@/assets/cake-cupcakes.jpg";
import bakingClass from "@/assets/baking-class.jpg";

const featuredCakes = [
  { image: cakeWedding, title: "Wedding Cakes", description: "Elegant multi-tier cakes crafted for your special day with premium fondant and sugar flowers." },
  { image: cakeBirthday, title: "Birthday Cakes", description: "Fun, colorful, and customizable cakes to make every birthday unforgettable." },
  { image: cakeCustom, title: "Custom Cakes", description: "Unique designs tailored to your vision — from sculpted art to themed masterpieces." },
  { image: cakeCupcakes, title: "Cupcakes & Desserts", description: "Bite-sized delights with gourmet frosting, perfect for events and everyday treats." },
];

const testimonials = [
  { name: "Hanna T.", text: "Kasina made the most beautiful wedding cake for us. Our guests couldn't stop talking about it! The taste was even better than the look.", rating: 5 },
  { name: "Daniel M.", text: "I took the baking class and learned so much in just one session. The instructor was patient and the recipes were amazing.", rating: 5 },
  { name: "Sara A.", text: "Best birthday cake my daughter has ever had. The attention to detail is incredible. Will definitely order again!", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Kasina Sweets bakery display" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/images/logo.png"
            alt="Kasina Sweets"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 shadow-lg"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4"
          >
            Kasina Sweets & Catering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-xl md:text-2xl text-primary-foreground/80 italic mb-8"
          >
            Turning passion into pastries
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/cakes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Order Cakes <ArrowRight size={18} />
            </Link>
            <Link
              to="/classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-body font-bold rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Join Our Classes
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader title="Our Signature Cakes" subtitle="Each cake is handcrafted with love, premium ingredients, and artistic precision." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCakes.map((cake, i) => (
              <CakeCard key={cake.title} {...cake} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-pastel-pink/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={bakingClass} alt="Baking class at Kasina Sweets" className="rounded-xl shadow-lg w-full" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="section-title">More Than Just a Bakery</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                At Kasina Sweets & Catering, we believe baking is an art form. From our humble beginnings in Addis Ababa, we've grown into a beloved brand with over 40,000 followers who share our passion for pastries.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We don't just bake — we teach, inspire, and create memorable experiences through our cakes, catering services, and hands-on baking classes.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 font-body font-bold text-primary hover:underline">
                Learn Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader title="What Our Customers Say" subtitle="We're proud to serve thousands of happy customers across Addis Ababa." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Order Your Dream Cake?</h2>
            <p className="font-body text-primary-foreground/80 max-w-xl mx-auto">
              Contact us today for custom cake orders, catering inquiries, or to enroll in our baking classes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-background text-foreground font-body font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
