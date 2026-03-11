import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeCustom from "@/assets/cake-custom.jpg";
import cakeCupcakes from "@/assets/cake-cupcakes.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import bakingClass from "@/assets/baking-class.jpg";

const images = [
  { src: cakeWedding, alt: "Wedding cake with pink roses" },
  { src: gallery1, alt: "Chocolate drip cake with gold leaf" },
  { src: cakeBirthday, alt: "Sprinkle birthday cake" },
  { src: gallery2, alt: "Pink ombre rose cake" },
  { src: cakeCustom, alt: "Custom rose garden cake" },
  { src: gallery3, alt: "Catering dessert spread" },
  { src: cakeCupcakes, alt: "Assorted cupcakes" },
  { src: gallery4, alt: "Rustic berry cake" },
  { src: bakingClass, alt: "Baking class in action" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto">
            <SectionHeader title="Gallery" subtitle="A glimpse into our creations — every cake tells a story." />
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="break-inside-avoid cursor-pointer"
                  onClick={() => setSelected(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full rounded-lg hover:shadow-lg transition-shadow duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 text-primary-foreground" onClick={() => setSelected(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
