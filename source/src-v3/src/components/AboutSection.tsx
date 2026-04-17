import { motion } from "framer-motion";

const aboutStats = [
  { value: "30+", label: "Years Combined Experience" },
  { value: "AFSL", label: "450822 Licensed" },
  { value: "Flat", label: "Fee — All Inclusive" },
];

const values = [
  { icon: "🏛️", title: "Independence First", desc: "We are not aligned to any product provider or institution. Our only obligation is to the advisers in our network and their clients." },
  { icon: "💰", title: "Flat Fee. Always.", desc: "One all-inclusive annual fee. No revenue share, no hidden charges, no percentages. You keep what you earn." },
  { icon: "✅", title: "SMSF Expertise", desc: "We understand the SMSF space deeply. Our compliance framework and support is built around the complexity of self-managed super." },
  { icon: "⚡", title: "Fast Onboarding", desc: "We know that every week without an AFSL costs you. We move fast — most advisers are authorised and operating within 2–4 weeks." },
  { icon: "🤝", title: "Boutique Support", desc: "You will know our name. You will have a direct line. We are not a ticket number in a corporate machine." },
];

const team = [
  {
    initials: "AA",
    name: "Antonio Albuquerque",
    role: "Managing Director",
    bio: "Antonio brings 24 years of financial services experience and 16 years as a registered tax agent. A specialist in serving doctors and high-net-worth individuals, Antonio has spent his career helping fellow financial advisers build stronger practices — improving systems, technology, marketing, compliance and client communication.",
  },
  {
    initials: "TZ",
    name: "Tony Zulli",
    role: "Director",
    bio: "Tony is the founder and Director of Iconic Investors Group, and the Responsible Manager of the Iconic Partners licence. He has operated a number of licensee businesses, including Accountable Financial Solutions which he founded and operated for 8 years before selling the business. Tony brings more than 30 years of broad financial services experience across advice businesses, senior management roles in wealth management, SMSFs and life risk insurance.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">About Iconic Partners</p>
        <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-5">A boutique specialist licensee built by an adviser,<br className="hidden sm:block" /> for advisers.</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-14">
          Iconic Partners (AFSL 450822) is a boutique specialist licensee providing experienced financial advisers with the licence, compliance framework and strategic support to build thriving, sustainable advisory practices.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {aboutStats.map((s) => (
            <div key={s.value} className="bg-primary rounded-xl p-7 text-center">
              <div className="text-3xl md:text-4xl font-black text-accent">{s.value}</div>
              <div className="text-xs text-primary-foreground/50 uppercase tracking-widest mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"
        >
          {values.map((v) => (
            <motion.div key={v.title} variants={fadeUp} className="bg-secondary rounded-xl p-7 border border-border">
              <div className="text-2xl mb-3">{v.icon}</div>
              <h3 className="text-lg font-bold text-foreground font-sans mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team */}
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">The Team</p>
        <h2 className="text-2xl sm:text-3xl font-serif text-foreground mb-8">Meet Iconic Partners</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg shadow-primary/5"
            >
              <div className="bg-gradient-to-br from-primary to-forest-light h-24 flex items-center justify-center">
                <span className="text-3xl font-black text-primary-foreground/20">{t.initials}</span>
              </div>
              <div className="p-7">
                <div className="text-xl font-extrabold text-foreground">{t.name}</div>
                <div className="text-xs font-bold uppercase tracking-[0.1em] text-accent mt-1 mb-4">{t.role}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
