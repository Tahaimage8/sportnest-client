"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const FacilityCard = ({ facility }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
    >
      <img
        src={facility.image}
        alt={facility.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          {facility.facility_type}
        </span>

        <h2 className="mt-4 text-xl font-bold text-slate-900">
          {facility.name}
        </h2>

        <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={17} />
          {facility.location}
        </p>

        <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
          <Users size={17} />
          Capacity: {facility.capacity} people
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="font-bold text-slate-900">
            ৳{facility.price_per_hour}
            <span className="text-sm font-normal text-slate-500"> / hour</span>
          </p>

          <Link
            href={`/facilities/${facility._id}`}
            className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FacilityCard;