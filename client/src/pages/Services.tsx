/*
 * Services Page — Organic Modernism Design
 * Detailed service descriptions for Acupuncture, Chiropractic, Applied Kinesiology, Nutrition
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowRight, Leaf, Heart, Brain, Apple, ExternalLink } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0, 0, 0.2, 1] as const },
  }),
};

const servicesData = [
  {
    slug: "acupuncture",
    title: "Acupuncture",
    icon: Leaf,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443315081/oLxYoAknacFRRAG6UfnzBo/acupuncture-service-dckVjiXfXBoyGek3h4DhC9.webp",
    subtitle: "Ancient Healing, Modern Results",
    description:
      "Acupuncture is a time-tested therapy that stimulates specific points on the body to promote natural healing and improve overall function. Dr. Budavich has completed over 300 hours of training to perform acupuncture using both the five-element and biomedical models.",
    benefits: [
      "Stress and anxiety relief",
      "Chronic pain management",
      "Improved sleep quality",
      "Migraine and headache relief",
      "Muscle pain reduction",
      "Enhanced immune function",
    ],
  },
  {
    slug: "chiropractic",
    title: "Chiropractic",
    icon: Heart,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443315081/oLxYoAknacFRRAG6UfnzBo/chiropractic-service-L2WNyNepiyiJWoobkFejou.webp",
    subtitle: "Restore Movement, Reduce Pain",
    description:
      "Chiropractic care focuses on restoring normal movement and function in the spine, pelvis, cranium, jaw, and all other joints and bones in the body, with the goal of allowing the nervous system to work better. Dr. Budavich has years of experience relieving patients from back and neck pain, headaches, migraines, disc bulges, and more.",
    benefits: [
      "Back and neck pain relief",
      "Spinal realignment",
      "Reduced inflammation",
      "Improved nervous system function",
      "Enhanced mobility and flexibility",
      "Non-invasive treatment approach",
    ],
  },
  {
    slug: "applied-kinesiology",
    title: "Applied Kinesiology",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    subtitle: "Identify Imbalances, Restore Harmony",
    description:
      "Applied kinesiology is a unique advanced approach that allows identification of imbalances and instabilities throughout the body. By evaluating structural, chemical, and mental aspects of health using manual muscle testing combined with other standard diagnostic methods, Dr. Budavich can pinpoint the root cause of your health challenges.",
    benefits: [
      "Comprehensive body assessment",
      "Identification of hidden imbalances",
      "Targeted treatment planning",
      "Integration with other therapies",
      "Structural and chemical evaluation",
      "Personalized health insights",
    ],
  },
  {
    slug: "nutrition",
    title: "Nutrition",
    icon: Apple,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443315081/oLxYoAknacFRRAG6UfnzBo/nutrition-service-gzzAhcGr2TN6sY7NXxft58.webp",
    subtitle: "Fuel Your Body, Transform Your Health",
    description:
      "Proper nutrition is paramount in the healing process. Dr. Budavich has counseled thousands of patients in nutritional methods which facilitate the correction of numerous ailments including fatigue, weight management, eating disorders, allergies, hormonal imbalances, osteoporosis, high cholesterol, high blood pressure, digestive disorders, and diabetes.",
    benefits: [
      "Personalized dietary plans",
      "Weight management support",
      "Hormonal balance optimization",
      "Digestive health improvement",
      "Allergy identification and management",
      "Scientific rationale for every change",
    ],
    extra: (
      <div className="mt-8 p-6 bg-forest/5 rounded-2xl border border-forest/10">
        <h4 className="font-serif text-xl text-charcoal mb-4">Order Supplements</h4>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://fullscript.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest text-cream px-6 py-3 rounded-full font-medium hover:bg-forest-light transition-all"
          >
            Fullscript <ExternalLink size={16} />
          </a>
          <a
            href="https://www.doctorssupplementstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-forest text-forest px-6 py-3 rounded-full font-medium hover:bg-forest/5 transition-all"
          >
            Supreme Nutrition (Code: MB3311) <ExternalLink size={16} />
          </a>
        </div>
      </div>
    ),
  },
];

export default function Services() {
  const params = useParams<{ service?: string }>();
  const serviceRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (params.service && serviceRefs.current[params.service]) {
      setTimeout(() => {
        serviceRefs.current[params.service!]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [params.service]);

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
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-cream leading-tight mb-6"
          >
            Comprehensive
            <br />
            <span className="italic text-clay">Holistic Care</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-cream/70 text-lg max-w-xl"
          >
            We take a whole-body approach to your health, combining multiple
            disciplines to create a personalized care plan.
          </motion.p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-sand-dark py-4 sticky top-[72px] z-40 border-b border-sand-dark">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {servicesData.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <span
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    params.service === s.slug
                      ? "bg-forest text-cream"
                      : "bg-white text-charcoal/70 hover:bg-forest/10 hover:text-forest"
                  }`}
                >
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {servicesData.map((service, index) => (
        <section
          key={service.slug}
          ref={(el) => { serviceRefs.current[service.slug] = el; }}
          className={`py-20 md:py-28 scroll-mt-32 ${
            index % 2 === 0 ? "bg-cream" : "bg-sand"
          }`}
        >
          <div className="container">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={index % 2 !== 0 ? "lg:col-start-2" : ""}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                  {/* Icon overlay */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                    <service.icon size={28} className="text-forest" />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}
              >
                <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-3">
                  {service.subtitle}
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
                  {service.title}
                </h2>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
                      <span className="text-charcoal/70">{benefit}</span>
                    </div>
                  ))}
                </div>

                {service.extra}

                <a
                  href="https://drbudavich.janeapp.com/#staff_member/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-forest text-cream px-8 py-4 rounded-full font-semibold hover:bg-forest-light transition-all duration-300 hover:shadow-lg hover:shadow-forest/20 hover:-translate-y-0.5 mt-4"
                >
                  Book {service.title} Session
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Info */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-forest-light/20 rounded-full blur-3xl -translate-x-1/2" />
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
                Appointment Information
              </h2>
              <p className="text-cream/70 text-lg mb-12">
                We offer personalized care plans tailored to your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={1}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <h3 className="font-serif text-2xl text-cream mb-2">New Patient</h3>
                <p className="text-clay text-4xl font-serif mb-4">$250</p>
                <p className="text-cream/60">
                  Comprehensive initial evaluation and personalized treatment plan
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={2}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <h3 className="font-serif text-2xl text-cream mb-2">Follow Up</h3>
                <p className="text-clay text-4xl font-serif mb-4">$110</p>
                <p className="text-cream/60">
                  Applied kinesiology for nutrition and chiropractic needs
                </p>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={3}
              className="mt-12"
            >
              <a
                href="https://drbudavich.janeapp.com/#staff_member/1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-terracotta text-cream px-10 py-4 rounded-full font-semibold text-lg hover:bg-terracotta/90 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta/30 hover:-translate-y-0.5"
              >
                Book Your Appointment
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
