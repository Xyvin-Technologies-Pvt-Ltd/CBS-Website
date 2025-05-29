"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHandshake, 
  faLightbulb, 
  faUsers, 
  faChartLine 
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

const VALUES = [
  {
    icon: faHandshake,
    title: "Integrity",
    description: "We maintain the highest standards of professionalism and ethics in all our dealings.",
  },
  {
    icon: faLightbulb,
    title: "Innovation",
    description: "We constantly seek new and better ways to serve our clients and solve challenges.",
  },
  {
    icon: faUsers,
    title: "Collaboration",
    description: "We believe in working together to achieve exceptional results for our clients.",
  },
  {
    icon: faChartLine,
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering quality solutions.",
  },
];

export default function Values() {
  return (
    <section className="section-padding">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold"
          >
            OUR VALUES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mt-2"
          >
            What Drives Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={value.icon} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-heading mb-4">{value.title}</h3>
              <p className="text-muted">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
} 