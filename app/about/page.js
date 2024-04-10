"use client";
import Layout from "../../components/layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <p className="text-lg text-center mt-4 mb-1 md:text-2xl">
          Hi, I&#39;m Pedro! I am a{" "}
          <span className="font-semibold text-teal-600">
            Software Engineer{" "}
          </span>
          with a passion for developing web applications that make a positive
          impact on peoples lives.
        </p>
        <p className="text-lg text-center mt-4 mb-1 md:text-2xl">
          In addition to coding and learning new tech, I enjoy cooking, drinking
          coffee, playing sports, and hanging with my friends. Get in touch!
        </p>
      </motion.div>
    </Layout>
  );
}
