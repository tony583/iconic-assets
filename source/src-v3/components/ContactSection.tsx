import { motion } from "framer-motion";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/Js4zFsRjwKf4X1Zk0Wnw";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-primary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">Get in Touch</p>
        <h2 className="text-3xl sm:text-4xl font-serif text-primary-foreground mb-4">Talk to Our Team</h2>
        <p className="text-lg text-primary-foreground/60 max-w-3xl mb-14">No obligation, no sales pitch. Just an honest conversation about your practice and how we can help.</p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <a href="mailto:connect@iconicinvestors.com.au" className="text-primary-foreground text-base hover:text-accent transition-colors">connect@iconicinvestors.com.au</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🌐</span>
                <a href="https://www.iconicinvestors.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground text-base hover:text-accent transition-colors">iconicinvestors.com.au</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <span className="text-primary-foreground/75 text-base">Forestville NSW 2087</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/40 mb-8">AFSL 450822 | ACN 167 051 470</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold px-7 py-3.5 rounded-lg text-base hover:opacity-90 transition-opacity">
              📅 Book a Call Directly →
            </a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-foreground font-sans mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-muted-foreground mb-1.5">Full Name</label>
                  <input type="text" placeholder="Your full name" className="w-full px-4 py-3 border border-border rounded-lg bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-muted-foreground mb-1.5">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 border border-border rounded-lg bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-muted-foreground mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="04xx xxx xxx" className="w-full px-4 py-3 border border-border rounded-lg bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-muted-foreground mb-1.5">State</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40">
                    <option value="">Select state</option>
                    <option>VIC</option><option>NSW</option><option>QLD</option><option>WA</option><option>SA</option><option>TAS</option><option>ACT</option><option>NT</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-muted-foreground mb-1.5">Tell us about your practice</label>
                <textarea rows={4} placeholder="Brief description of your practice and what you're looking for..." className="w-full px-4 py-3 border border-border rounded-lg bg-secondary text-foreground text-sm resize-y focus:outline-none focus:ring-2 focus:ring-accent/40" />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-lg text-base hover:opacity-90 transition-opacity">
                Send Message →
              </button>
              <p className="text-center text-xs text-muted-foreground">We respond within 1 business day.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
