import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  if (!user) {
    redirect("/login");
  }
  const res = await fetch(`http://localhost:5000/booking/${user.id}`);

  const bookings = await res.json();

  // console.log(bookings);

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {bookings.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              No Booking Data Found
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
              You have not booked any facility yet. Explore available sports
              facilities and book your preferred time slot.
            </p>

            <Link
              href="/facilities"
              className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Book a Facility
            </Link>
          </div>
        ) : (
          <div>
            {bookings.map((booking) => (
              <BookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookingsPage;
