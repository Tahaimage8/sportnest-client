"use client";

import { CalendarCheck, ShieldCheck, Trophy } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const WhyChooseSportNest = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <p className="font-semibold uppercase tracking-wide text-green-600">
            Why Choose Us
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Built for Easy Sports Booking
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            SportNest helps players quickly discover, compare, and book sports
            facilities from a simple online platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white">
              <Trophy size={24} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Multiple Sports Options
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Find football turfs, cricket nets, badminton courts, tennis
              courts, and more in one place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white">
              <CalendarCheck size={24} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Easy Booking Experience
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Check available facilities and choose your preferred time slot
              without any hassle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white">
              <ShieldCheck size={24} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Reliable Facility Details
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              View location, price, capacity, and facility information before
              making a booking decision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSportNest;