/*
 * About Page — Organic Modernism Design
 * Dr. Budavich's background, credentials, and philosophy
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, BookOpen, GraduationCap, Stethoscope } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0, 0, 0.2, 1] as const },
  }),
};

const credentials = [
  {
    icon: Stethoscope,
    title: "Chiropractor of the Charlotte U.S. Department of Veteran's Affairs",
  },
  {
    icon: GraduationCap,
    title: "Instructor of Anatomy and Physiology at Central Piedmont Community College",
  },
  {
    icon: Award,
    title: "Certified Exercise Specialist (CES) & Performance Enhancement Specialist (PES)",
  },
  {
    icon: BookOpen,
    title: "Published in chiropractic medical journals for research on spinal joint motion",
  },
];

export default function About() {
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
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-cream leading-tight"
          >
            Meet Dr. Budavich
          </motion.h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Photo Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl sticky top-32">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663443315081/oLxYoAknacFRRAG6UfnzBo/dr-budavich-portrait_ce6d25b9.webp"
                  alt="Dr. Matthew Budavich"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/15 rounded-full blur-2xl" />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
                Dr. Matthew Budavich
              </h2>
              <p className="text-forest font-medium text-lg mb-8">DC, CES, PES</p>

              <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed">
                <p>
                  Dr. Matthew Budavich received a bachelor's degree from the
                  University of Pittsburgh and, following graduation, decided to
                  volunteer with a Christian ministry where he traveled to Africa.
                  He then pursued his dream of becoming a doctor by attending
                  National University of Health Sciences (NUHS) in Chicago.
                </p>
                <p>
                  With years of experience in pain management, Dr. Budavich has
                  helped countless patients find relief from back and neck pain,
                  headaches, migraines, disc bulges, and more. He has collaborated
                  with physical therapists on many difficult cases and continues
                  to expand his expertise through ongoing education.
                </p>
                <p>
                  He has completed over 300 hours of training to perform
                  acupuncture using both the five-element and biomedical models,
                  and over 300 hours in the subjects of nutrition, rehabilitation,
                  and applied kinesiology.
                </p>
                <p>
                  His core passion is to see people achieve their full potential,
                  which he does by optimizing systems in the body using nutrition,
                  chiropractic, and lifestyle changes. He genuinely sees
                  improvement in the quality of life as more than just pain
                  management.
                </p>
                <p>
                  When Dr. Budavich is not in the office, he enjoys spending time
                  with his wife, Brieanna, and their three children. He enjoys
                  running, reading books, and learning how to become a better
                  leader in the Charlotte community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 md:py-28 bg-sand relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-forest/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="max-w-2xl mb-16"
          >
            <p className="text-terracotta font-medium tracking-widest uppercase text-sm mb-3">
              Credentials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Experience & Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                  <cred.icon size={22} className="text-forest" />
                </div>
                <p className="text-charcoal/80 text-lg leading-relaxed">{cred.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional credentials list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={5}
            className="mt-12 bg-white p-10 rounded-2xl shadow-sm"
          >
            <h3 className="font-serif text-2xl text-charcoal mb-6">
              Additional Training & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Collaborating with physical therapists on many difficult cases",
                "Years of pain management for back & neck pain, headaches, migraines, disc bulges",
                "Completed 300+ hours of acupuncture training (five-element and biomedical models)",
                "Completed 300+ hours in nutrition, rehabilitation, and applied kinesiology",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-terracotta mt-2.5 shrink-0" />
                  <p className="text-charcoal/70 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-light/20 rounded-full blur-3xl" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
              Ready to Start Your
              <br />
              <span className="italic text-clay">Healing Journey?</span>
            </h2>
            <p className="text-cream/70 text-lg max-w-xl mx-auto mb-10">
              Dr. Budavich provides the individualized care you need and will
              spend the time it takes to find the best plan for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drbudavich.janeapp.com/#staff_member/1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-terracotta text-cream px-10 py-4 rounded-full font-semibold text-lg hover:bg-terracotta/90 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta/30 hover:-translate-y-0.5"
              >
                Book an Appointment
                <ArrowRight size={20} />
              </a>
              <Link href="/contact">
                <span className="inline-flex items-center justify-center gap-2 border-2 border-cream/30 text-cream px-10 py-4 rounded-full font-semibold text-lg hover:bg-cream/10 transition-all duration-300">
                  Contact Us
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
