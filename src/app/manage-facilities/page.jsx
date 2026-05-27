"use client";

import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";
import FacilityCard from "@/components/FacilityCard";

const ManageFacilities = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/my-facilities/${(user.email)}`)
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, [user?.email]);

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-wide text-green-600">
            Manage My Facilities
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            My Added Facilities
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Here you can see the facilities added by your account.
          </p>
        </div>

        {facilities.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
            No facilities found.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ManageFacilities;