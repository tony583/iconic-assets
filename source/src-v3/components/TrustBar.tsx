import { motion } from "framer-motion";

const stats = [
  { icon: "⏱", value: "30+", label: "Years Combined Experience" },
  { icon: "🏛️", value: "AFSL 450822", label: "Licensed & Regulated" },
  { icon: "⚡", value: "2–4 Weeks", label: "Fast Onboarding" },
  { icon: "💰", value: "Flat Fee", label: "All Inclusive" },
];

export default function TrustBar() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-3xl mb-2">{s.icon}</div>
            <div className="text-2xl md:text-3xl font-extrabold text-primary-foreground">{s.value}</div>
            <div className="text-sm text-primary-foreground/50 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
