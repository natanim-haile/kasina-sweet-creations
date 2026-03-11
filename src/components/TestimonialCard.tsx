import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  delay?: number;
}

const TestimonialCard = ({ name, text, rating, delay = 0 }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card p-6 space-y-4"
  >
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={16} className="fill-gold text-gold" />
      ))}
    </div>
    <p className="font-body text-sm text-muted-foreground italic">"{text}"</p>
    <p className="font-display text-sm font-semibold text-foreground">— {name}</p>
  </motion.div>
);

export default TestimonialCard;
