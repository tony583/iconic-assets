import { motion } from "framer-motion";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/Js4zFsRjwKf4X1Zk0Wnw";

const investmentCards = [
  { tag: "Strategy", title: "Investment Strategy Review", desc: "A comprehensive review of your client's current investment strategy — identifying gaps, risks and opportunities." },
  { tag: "Implementation", title: "Strategy Implementation", desc: "End-to-end implementation of approved investment strategies, managed through our strategic partner network." },
  { tag: "Portfolio", title: "Portfolio Construction & Governance", desc: "Disciplined portfolio construction with ongoing governance oversight — built for performance and compliance." },
  { tag: "Ongoing", title: "Ongoing Portfolio Review", desc: "Regular reviews of portfolio performance, asset allocation and alignment with client objectives." },
  { tag: "Second Opinion", title: "2nd Opinion Service", desc: "An independent, expert second opinion on investment strategies — giving your clients added confidence." },
  { tag: "Trading", title: "Cost Efficient Securities Trading", desc: "Access to a global securities trading and reporting platform — purpose-built for HNW clients." },
];

const riskCards = [
  { tag: "General Advice", title: "Life Risk Insurance", desc: "Life risk insurance services delivered through general advice — creating pathways to personal advice relationships and broader financial planning engagements." },
  { tag: "Assessment", title: "Risk Needs Assessment", desc: "Comprehensive assessment of your clients' life, TPD, income protection and trauma insurance needs — ensuring appropriate cover is in place." },
  { tag: "Portfolio Review", title: "Insurance Portfolio Review", desc: "Regular review of existing insurance portfolios to ensure cover remains appropriate and competitive as client circumstances evolve." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ServiceCard({ tag, title, desc, bgClass = "bg-card" }: { tag: string; title: string; desc: string; bgClass?: string }) {
  return (
    <motion.div variants={fadeUp} className={`${bgClass} rounded-xl p-6 border border-border`}>
      <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2.5 py-1 rounded mb-3">{tag}</span>
      <h4 className="text-base font-bold text-foreground font-sans mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function SpecialistSection() {
  return (
    <section id="specialist-services" className="bg-card">
      {/* Header */}
      <div className="py-20 md:py-28 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">Specialist Services</p>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">Specialist Services Offered</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">Beyond our core Licensee Services offering, the Iconic Investors group provides access to specialist services through our joint venture and strategic partners — adding further value to your practice and meeting the needs of your clients.</p>
        </div>
      </div>

      {/* Investment */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-2">Investment</p>
          <h3 className="text-2xl sm:text-3xl font-serif text-foreground mb-3">Investment Management</h3>
          <p className="text-base text-muted-foreground max-w-3xl mb-8">Custom investment strategies and portfolio solutions — designed for SMSFs, non-profits and high-net-worth professionals.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.06 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {investmentCards.map((c) => <ServiceCard key={c.title} {...c} />)}
          </motion.div>
        </div>
      </div>

      {/* Life Risk Insurance */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-2">Risk Insurance</p>
          <h3 className="text-2xl sm:text-3xl font-serif text-foreground mb-3">Life Risk Insurance Services</h3>
          <p className="text-base text-muted-foreground max-w-3xl mb-8">Life risk insurance delivered through general advice — generating personal advice clients and adding value across your practice.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.06 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {riskCards.map((c) => <ServiceCard key={c.title} {...c} bgClass="bg-secondary" />)}
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-lg text-base hover:opacity-90 transition-opacity">
            Talk to Us →
          </a>
          <a href="#licensee-services" className="border-2 border-primary text-primary font-bold px-7 py-3.5 rounded-lg text-base hover:bg-primary hover:text-primary-foreground transition-colors">
            View Licensee Services
          </a>
        </div>
      </div>
    </section>
  );
}
