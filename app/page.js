"use client";
import Image from "next/image";
import Layout from "../components/layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:mt-2 md:w-2/5 flex items-center justify-center">
            <Image
              src="/pedro.jpg"
              alt=""
              width={288}
              height={288}
              className="rounded-full shadow-2xl"
            />
          </div>
          <div className="md:mt-2 md:w-1/2 md:ml-12 max-md:text-center">
            <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-6xl">
              Hey, I&#39;m Pedro!
            </h1>
            <p className="text-lg mt-4 mb-1 md:text-2xl">
              I&#39;m a{" "}
              <span className="font-semibold text-teal-600">
                Software Engineer{" "}
              </span>
              with experience in web development, mostly{" "}
              <span className="font-semibold text-teal-600">frontend</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
