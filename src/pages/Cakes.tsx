import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakeCard from "@/components/CakeCard";
import SectionHeader from "@/components/SectionHeader";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeCustom from "@/assets/cake-custom.jpg";
import cakeCupcakes from "@/assets/cake-cupcakes.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const cakes = [
  { image: cakeWedding, title: "Classic Ivory Wedding Cake", description: "Five-tier white fondant cake adorned with handcrafted pink sugar roses. Perfect for elegant ceremonies." },
  { image: cakeBirthday, title: "Rainbow Sprinkle Birthday", description: "A colorful celebration cake loaded with rainbow sprinkles and buttercream. Kids and adults love it!" },
  { image: cakeCustom, title: "Rose Garden Custom Cake", description: "Intricate scroll piping with cascading sugar roses in autumn colors. Made-to-order artistry." },
  { image: cakeCupcakes, title: "Assorted Gourmet Cupcakes", description: "Pink, vanilla, and chocolate frosted cupcakes — perfect for party platters and dessert tables." },
  { image: gallery1, title: "Chocolate Drip Indulgence", description: "Rich chocolate layer cake with ganache drip, truffles, and gold leaf accents. A chocolate lover's dream." },
  { image: gallery2, title: "Pink Ombre Rose Cake", description: "Delicate pink gradient buttercream with fresh rose topper. Ideal for bridal showers and engagements." },
  { image: gallery3, title: "Catering Dessert Collection", description: "Mini petit fours, cake pops, and macarons for elegant event catering. Customizable selections." },
  { image: gallery4, title: "Rustic Berry Naked Cake", description: "Two-layer naked cake with fresh cream and seasonal berries. Natural, rustic, and delicious." },
];

const Cakes = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader
            title="Our Cakes & Menu"
            subtitle="Browse our handcrafted collection. Every cake can be customized to match your event, theme, and taste."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cakes.map((cake, i) => (
              <CakeCard key={cake.title} {...cake} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center space-y-4">
          <h2 className="font-display text-3xl font-bold text-primary-foreground">Want to Place a Custom Order?</h2>
          <p className="font-body text-primary-foreground/80">Call us or visit our shop at Megenagna, Siti Mall.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+251985104343" className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground font-body font-bold rounded-lg hover:opacity-90 transition-opacity">
              Call +251 985104343
            </a>
            <a href="tel:+251938422605" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-body font-bold rounded-lg hover:bg-primary-foreground/10 transition-colors">
              Call +251 938422605
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Cakes;
