"use client";

import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <p className="font-semibold uppercase tracking-wide text-green-600">
            How It Works
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Book in Three Simple Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A simple process to help users find and reserve sports facilities
            faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="text-4xl font-extrabold text-green-600">01</span>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Browse Facilities
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Explore available sports facilities with price, capacity,
              location, and facility type.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="text-4xl font-extrabold text-green-600">02</span>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Choose a Time Slot
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Open a facility details page and select an available time slot
              that matches your schedule.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="text-4xl font-extrabold text-green-600">03</span>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Confirm Booking
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Book your preferred facility and manage your bookings from your
              account dashboard.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;