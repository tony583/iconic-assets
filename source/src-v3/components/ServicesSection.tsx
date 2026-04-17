import { motion } from "framer-motion";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/Js4zFsRjwKf4X1Zk0Wnw";

const featured = [
  { num: "01", title: "Transition Management & Onboarding", desc: "We collaborate with your team to ensure a smooth, structured transition into the Iconic Partners network — minimising downtime and protecting your clients." },
  { num: "02", title: "Compliance & Risk Management", desc: "Guidance to establish and maintain a strong compliance and risk framework from day one — so you're always ahead of your ASIC obligations." },
  { num: "03", title: "Advice Management & Supervision", desc: "A tailored supervision and monitoring program designed specifically around your practice — not a one-size-fits-all approach." },
];

const tiles = [
  { icon: "🛡️", title: "AFSL Licensing & Advice Options", desc: "Comprehensive, limited and general advice options under our AFSL. We handle the complexity so you can focus on your clients." },
  { icon: "📈", title: "Strategic Business Development", desc: "Specific strategies for practice efficiency and optimised client engagement — built around your growth goals." },
  { icon: "💻", title: "Digital Operations & Solutions", desc: "A fully digital approach to your advice delivery, operations and administration — efficient, compliant and built for scale." },
  { icon: "💰", title: "Simple Flat Fee Structure", desc: "One all-inclusive fee. No hidden costs, no add-ons, no surprises — everything you need to operate and grow." },
  { icon: "🤝", title: "Advice Collective", desc: "A network of like-minded planners sharing knowledge, referrals and operational resources. Real peer value." },
  { icon: "🚪", title: "Exit Strategies", desc: "Expert advice on planning and executing your practice exit — on your own terms, your own timeline." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="licensee-services" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">Licensee Services</p>
        <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">Everything you need, from day one.</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-14">AFSL-backed support designed to empower your financial advisory practice — structured, practical and built around you.</p>

        {/* Featured */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-3 gap-5 mb-10"
        >
          {featured.map((f) => (
            <motion.div key={f.num} variants={fadeUp} className="bg-card rounded-xl p-7 border border-border border-l-4 border-l-primary shadow-md shadow-primary/5">
              <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-accent mb-3">{f.num}</div>
              <h3 className="text-lg font-bold text-foreground font-sans mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tiles */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {tiles.map((t) => (
            <motion.div key={t.title} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border">
              <div className="text-2xl mb-3">{t.icon}</div>
              <h3 className="text-base font-bold text-foreground font-sans mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-lg text-base hover:opacity-90 transition-opacity">
          Talk to Us →
        </a>
      </div>
    </section>
  );
}
