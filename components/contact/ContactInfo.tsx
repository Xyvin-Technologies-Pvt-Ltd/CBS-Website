"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock 
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

const CONTACT_INFO = [
  {
    icon: faMapMarkerAlt,
    title: "Visit Us",
    details: ["Office 534, 5th Floor", "Maktabi Building , Wattayah", "Muscat, Oman"],
  },
  {
    icon: faPhone,
    title: "Call Us",
    details: ["+968-78788268", "+968 24400777"],
  },
  {
    icon: faEnvelope,
    title: "Email Us",
    details: ["enquiry@continuityoman.com", "support@continuityoman.com"],
  },
  {
    icon: faClock,
    title: "Working Hours",
    details: ["Sunday - Thursday", "8:00 AM - 5:00 PM"],
  },
];

export default function ContactInfo() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTACT_INFO.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary text-3xl mb-4">
                <FontAwesomeIcon icon={info.icon} />
              </div>
              <h3 className="text-xl font-semibold text-heading mb-3">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail) => (
                  <p key={detail} className="text-muted">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
} 