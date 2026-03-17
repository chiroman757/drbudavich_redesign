/*
 * Contact Page — Organic Modernism Design
 * Contact info, location, hours, and booking CTA
 */

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0, 0, 0.2, 1] as const },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(757) 755-5565",
    href: "tel:7577555565",
    description: "Call us to schedule or inquire",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contactus@drbudavich.com",
    href: "mailto:contactus@drbudavich.com",
    description: "Send us a message anytime",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "10210 Prosperity Park Dr STE 400, Charlotte, NC 28269",
    href: "https://maps.google.com/?q=10210+Prosperity+Park+Dr+STE+400+Charlotte+NC+28269",
    description: "Located at Prosperity Chiropractic",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Saturday 7:00a - 3:00p",
    href: undefined,
    description: "Weekend appointments available",
  },
];

export default function Contact() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-forest py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-light/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="container relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-clay font-medium tracking-widest uppercase text-sm mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-cream leading-tight mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-cream/70 text-lg max-w-xl"
          >
            We'd love to hear from you. Reach out to schedule an appointment or
            ask any questions about our holistic health services.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-forest/10 flex items-center justify-center shrink-0 group-hover:bg-forest/20 transition-colors">
                        <item.icon size={26} className="text-forest" />
                      </div>
                      <div>
                        <p className="text-charcoal/50 text-sm font-medium uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        <p className="text-charcoal text-lg font-medium mb-1 group-hover:text-forest transition-colors">
                          {item.value}
                        </p>
                        <p className="text-charcoal/50 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-forest/10 flex items-center justify-center shrink-0">
                        <item.icon size={26} className="text-forest" />
                      </div>
                      <div>
                        <p className="text-charcoal/50 text-sm font-medium uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        <p className="text-charcoal text-lg font-medium mb-1">
                          {item.value}
                        </p>
                        <p className="text-charcoal/50 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map Embed */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.123!2d-80.7718!3d35.3168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a0e0e0e0e0e0%3A0x0!2s10210+Prosperity+Park+Dr+STE+400%2C+Charlotte%2C+NC+28269!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Budavich Office Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-sand">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-l-4 border-terracotta"
          >
            <h3 className="font-serif text-2xl text-charcoal mb-3">
              We Have Moved!
            </h3>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Please note that Dr. Budavich now practices out of{" "}
              <strong className="text-charcoal">Prosperity Chiropractic</strong>, located at{" "}
              <strong className="text-charcoal">
                10210 Prosperity Park Dr STE 400, Charlotte, NC 28269
              </strong>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Book Online CTA */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-light/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
                Ready to Book
                <br />
                <span className="italic text-clay">Your Appointment?</span>
              </h2>
              <p className="text-cream/70 text-lg mb-4">
                Schedule your visit online through our booking system. New
                patients and follow-up appointments are available.
              </p>
              <p className="text-cream/50 text-sm mb-10">
                New Patient: $250 &middot; Follow Up: $110
              </p>
              <a
                href="https://drbudavich.janeapp.com/#staff_member/1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-terracotta text-cream px-10 py-4 rounded-full font-semibold text-lg hover:bg-terracotta/90 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta/30 hover:-translate-y-0.5"
              >
                Book Online Now
                <ExternalLink size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
