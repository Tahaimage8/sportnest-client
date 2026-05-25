"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative flex min-h-[75vh] items-center bg-[url('/SportBG.png')] bg-cover bg-center bg-no-repeat text-white">

      <div className="absolute inset-0 bg-black/60" />


      <div className="relative mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-tight md:text-6xl"
          >
            Book Your Favorite Sports Facility Anytime
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-xl text-base leading-7 text-slate-200 md:text-lg"
          >
            Find and reserve football turfs, cricket nets, badminton courts,
            tennis courts, and more with a simple online booking experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              href="/facilities"
              className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-green-700"
            >
              Explore Facilities
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;