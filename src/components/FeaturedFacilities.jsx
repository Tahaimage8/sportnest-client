import React from "react";
import FacilityCard from "./FacilityCard";
import Link from "next/link";

const FeaturedFacilities = async () => {
 let facilities = [];

  try {
    const res = await fetch("http://localhost:5000/facilities", {
      cache: "no-store",
    });

    if (res.ok) {
      facilities = await res.json();
    }
  } catch (error) {
    facilities = [];
  }

  const data = facilities.slice(0, 6);

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="font-semibold uppercase tracking-wide text-green-600">
              Featured Facilities
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Popular Sports Facilities
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Explore some of the top available facilities and book your
              preferred sports venue with ease.
            </p>
          </div>

          <Link
            href="/facilities"
            className="inline-flex rounded-xl border border-green-600 px-5 py-3 text-sm font-semibold text-green-600 transition hover:bg-green-50"
          >
            View All Facilities
          </Link>
        </div>

        {data.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
            No facilities found.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((facility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedFacilities;