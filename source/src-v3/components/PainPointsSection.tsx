import { motion } from "framer-motion";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/Js4zFsRjwKf4X1Zk0Wnw";

const painPoints = [
  { q: "My boutique specialist licensee takes a cut of everything I earn", a: "Iconic charges one flat fee. No revenue share. No percentages. You keep 100% of what you earn." },
  { q: "I can't get anyone on the phone when I need compliance help", a: "You'll have a direct line to our team. Not a ticket system. Not a shared inbox. Real people, fast responses." },
  { q: "I'm terrified of an AFCA complaint and being left on my own", a: "We stand beside you. Our compliance team supports you through the full AFCA process — you're never navigating a complaint alone." },
  { q: "My AFSL doesn't support me properly — I feel like I'm on my own", a: "Iconic is boutique by design. You'll have supervision, guidance and support that's built around your practice — not a generic one-size template." },
  { q: "I'm not getting the commissions and fee structures I deserve", a: "We help you structure your fee model and remuneration correctly — so you're earning what your expertise is worth, compliantly." },
  { q: "I specialise in SMSFs but my boutique specialist licensee doesn't understand my clients", a: "We're built for SMSF specialists. Our compliance framework is designed around the complexity of self-managed super — not retrofitted for it." },
  { q: "I want to grow but I don't have the systems or support to scale", a: "We provide technology, marketing support and referral partnerships to help you build a practice that's efficient, profitable and growing." },
  { q: "I'm thinking about selling my practice but don't know where to start", a: "We help you structure, value and exit your practice — at the right time, at the right price, on your own terms." },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PainPointsSection() {
  return (
    <section id="pain-points" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">We Understand Your Challenges</p>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">Sound familiar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">These are the challenges financial advisers bring to us every day. If any of these resonate, we should talk.</p>
        </div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.08 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {painPoints.map((p) => (
            <motion.div key={p.q} variants={item} className="bg-secondary rounded-xl p-6 border border-border border-l-4 border-l-accent">
              <div className="text-3xl text-accent font-black leading-none mb-3">"</div>
              <p className="text-base font-bold text-foreground leading-snug mb-3">{p.q}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.a}</p>
            </motion.div>
          ))}
          {/* CTA card */}
          <motion.div variants={item} className="bg-primary rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-extrabold text-primary-foreground mb-4">If any of these sound like you — let's talk.</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity">
              Book a Free Call →
            </a>
            <p className="text-xs text-primary-foreground/40 mt-3">No obligation. No sales pitch.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
