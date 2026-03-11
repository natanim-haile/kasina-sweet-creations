import { motion } from "framer-motion";

interface CakeCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

const CakeCard = ({ image, title, description, delay = 0 }: CakeCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card overflow-hidden group cursor-pointer"
  >
    <div className="overflow-hidden aspect-square">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="font-body text-sm text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

export default CakeCard;
