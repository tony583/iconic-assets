import { motion } from "framer-motion";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/Js4zFsRjwKf4X1Zk0Wnw";

export function MidCTA() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-serif text-primary-foreground mb-5"
        >
          Ready to build a practice with real backing?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-primary-foreground/60 mb-8"
        >
          Speak with our team — no obligation, no sales pitch. Just an honest conversation about your practice.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground font-bold px-7 py-3.5 rounded-lg text-base hover:opacity-90 transition-opacity">
            Talk to Us →
          </a>
          <a href="#licensee-services" className="border-2 border-primary-foreground/30 text-primary-foreground font-bold px-7 py-3.5 rounded-lg text-base hover:bg-primary-foreground/10 transition-colors">
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-forest-light py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-serif text-primary-foreground mb-5"
        >
          Your practice deserves a better AFSL home.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-primary-foreground/60 mb-8"
        >
          Whether you're starting fresh, transitioning from another boutique specialist licensee, or simply looking for more support — we'd love to have an honest conversation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-primary-foreground text-primary font-bold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity shadow-lg">
            Talk to Us →
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm text-primary-foreground/40"
        >
          Get in touch: <a href="mailto:connect@iconicinvestors.com.au" className="text-accent hover:underline">connect@iconicinvestors.com.au</a>
        </motion.p>
      </div>
    </section>
  );
}
