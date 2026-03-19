/*
 * Home Page — Organic Modernism Design
 * Hero with parallax, services cards, about preview, CTA
 * Warm sand/forest green palette, Playfair Display headings
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Leaf, Heart, Brain, Apple, ChevronRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0, 0, 0.2, 1] as const },
  }),
};

const services = [
  {
    title: "Acupuncture",
    description:
      "Experience relief from stress, anxiety, chronic pain, insomnia, migraines, and muscle pain through targeted acupuncture therapy.",
    icon: Leaf,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443315081/oLxYoAknacFRRAG6UfnzBo/acupuncture-service-dckVjiXfXBoyGek3h4DhC9.webp",
    slug: "acupuncture",
  },
  {
    title: "Chiropractic",
    description:
      "A non-invasive approach to realigning and strengthening the spine, reducing pain and inflammation for lasting relief.",
    icon: Heart,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443315081/oLxYoAknacFRRAG6UfnzBo/chiropractic-service-L2WNyNepiyiJWoobkFejou.webp",
    slug: "chiropractic",
  },
  {
    title: "Applied Kinesiology",
    description:
      "A unique advanced approach that identifies imbalances and instabilities throughout the body for targeted treatment.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    slug: "applied-kinesiology",
  },
  {
    title: "Nutrition",
    description:
      "Improve your wellbeing by finding and adjusting your nutrition based on what your body truly needs to thrive.",
    icon: Apple,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443315081/oLxYoAknacFRRAG6UfnzBo/nutrition-service-gzzAhcGr2TN6sY7NXxft58.webp",
    slug: "nutrition",
  },
];

const benefits = [
  {
    stat: "300+",
    label: "Hours of Advanced Training",
    detail: "In acupuncture, nutrition, rehabilitation, and applied kinesiology",
  },
  {
    stat: "1000+",
    label: "Patients Helped",
    detail: "Years of experience in pain management and holistic care",
  },
  {
    stat: "4",
    label: "Specialized Disciplines",
    detail: "Chiropractic, acupuncture, applied kinesiology, and nutrition",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663443315081/oLxYoAknacFRRAG6UfnzBo/hero-wellness-abstract-i2vzx4VEYjejJo7pXiCx6T.webp"
            alt="Holistic healing touch"
            className="w-full h-full object-cover"
          />
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663443315081/oLxYoAknacFRRAG6UfnzBo/hero-overlay-clean-g2ubbhpxM9GxVXy9Spq3cX.webp" alt="Holistic wellness overlay" className="absolute inset-0 w-full h-full object-cover opacity-75" />
        </div>

        {/* Organic blob decoration */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-forest/10 rounded-full blur-3xl" />

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white font-medium tracking-widest uppercase text-sm mb-4 drop-shadow-lg"
            >
              Holistic Health &middot; Charlotte, NC
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 drop-shadow-lg"
            >
              Unlock Your
              <br />
              <span className="italic text-white">Full Potential</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-lg drop-shadow-md"
            >
              Dr. Matthew Budavich specializes in facing your health challenges
              head-on with personalized chiropractic, acupuncture, and nutrition
              plans designed to treat the whole you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://drbudavich.janeapp.com/#staff_member/1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-terracotta text-cream px-8 py-4 rounded-full font-semibold text-lg hover:bg-terracotta/90 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta/20 hover:-translate-y-0.5"
              >
                Book an Appointment
                <ArrowRight size={20} />
              </a>
              <Link href="/services">
                <span className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  Our Services
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-forest py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-forest-light/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="font-serif text-4xl md:text-5xl text-clay mb-2">{item.stat}</p>
                <p className="text-cream font-semibold text-lg mb-1">{item.label}</p>
                <p className="text-cream/60 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={0}
            className="max-w-2xl mb-16"
          >
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              Comprehensive Holistic Care
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              We take a whole-body approach to your health, combining multiple
              disciplines to create a personalized care plan tailored to your
              individual goals and needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                          <service.icon size={20} className="text-forest" />
                        </div>
                        <h3 className="font-serif text-2xl text-charcoal group-hover:text-forest transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-charcoal/60 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-terracotta font-medium text-sm group-hover:gap-2 transition-all">
                        Learn More <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-28 bg-sand relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-clay/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663443315081/oLxYoAknacFRRAG6UfnzBo/dr-budavich-portrait_ce6d25b9.webp"
                  alt="Dr. Matthew Budavich"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-forest/15 rounded-full blur-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-3">
                Meet Dr. Budavich
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
                Your Partner in
                <br />
                <span className="italic">Holistic Wellness</span>
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Dr. Matthew Budavich received his degree from the University of
                Pittsburgh and pursued his dream of becoming a doctor at the
                National University of Health Sciences in Chicago. With over 300
                hours of advanced training in acupuncture, nutrition, and applied
                kinesiology, he brings a comprehensive approach to every patient.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                His core passion is to see people achieve their full potential
                through optimizing body systems using nutrition, chiropractic,
                and lifestyle changes. He genuinely sees improvement in quality
                of life as more than just pain management.
              </p>
              <Link href="/about">
                <span className="inline-flex items-center gap-2 bg-forest text-cream px-8 py-4 rounded-full font-semibold hover:bg-forest-light transition-all duration-300 hover:shadow-lg hover:shadow-forest/20 hover:-translate-y-0.5">
                  Learn More About Dr. B
                  <ArrowRight size={18} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Can You Benefit Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              custom={0}
            >
              <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-3">
                Is Holistic Care Right For You?
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
                Can You Benefit from
                <br />
                <span className="italic">Holistic Health Care?</span>
              </h2>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              custom={1}
              className="text-charcoal/70 text-lg leading-relaxed mb-12"
            >
              You understand your body more than anyone. When you feel that
              you've reached the end of the road, or are stuck on the
              traditional medicine path, consider finding a practitioner who
              will do the following:
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Understand You",
                  text: "Gain a better understanding of your unique health challenges and history.",
                },
                {
                  title: "Personalize Care",
                  text: "Create a tailored health care plan designed for your individual goals and needs.",
                },
                {
                  title: "Optimize Naturally",
                  text: "Optimize your natural systems through quality nutritional supplementation.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-2xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-xl text-forest font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              custom={5}
            >
              <a
                href="https://drbudavich.janeapp.com/#staff_member/1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-terracotta text-cream px-10 py-4 rounded-full font-semibold text-lg hover:bg-terracotta/90 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta/20 hover:-translate-y-0.5"
              >
                Begin Your Journey Today
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
