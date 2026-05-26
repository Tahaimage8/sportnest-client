/* eslint-disable @next/next/no-img-element */
import { Button, Card, Chip, CloseButton } from "@heroui/react";
import Link from "next/link";

import React from "react";
import { MdPageview } from "react-icons/md";
import BookingCancelAlert from "./BookingCancelAlert";
import { BadgeDollarSign, CalendarDays, Clock, MapPin, User } from "lucide-react";

const BookingCard = ({ booking }) => {

  const {
    name,
    description,
    selectedSlot,
    price_per_hour,
    image,
    location,
    facility_type,
    bookingDate,
    facilityId,
    userEmail
  } = booking;
  

    console.log(booking);
  return (
    <div className="mx-auto max-w-7xl p-2 my-5">
      <Card className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

        <div className="absolute right-4 top-4 z-10  ">
          <BookingCancelAlert booking={booking} />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
  
          <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 md:h-44 md:w-56">
            <img
              alt={name}
              className="h-full w-full object-cover"
              loading="lazy"
              src={image}
            />

            <div className="absolute left-3 top-3">
              <Chip color="success" className="font-semibold">
                {facility_type}
              </Chip>
            </div>
          </div>


          <div className="flex flex-1 flex-col justify-between pr-0 md:pr-28">
            <div>
              <h2 className="text-xl font-bold text-slate-900">{name}</h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Clock size={17} className="text-green-600" />
                    Selected Slot
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{selectedSlot}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CalendarDays size={17} className="text-green-600" />
                    Booking Date
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {new Date(bookingDate).toLocaleString("en-US", {
                      year: "numeric",
                      day: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
                                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <User size={17} className="text-green-600" />
                    UserEmail
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{booking?.userEmail}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <BadgeDollarSign size={17} className="text-green-600" />
                  Price: ${price_per_hour}/perHour
                </p>

                <p className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin size={15} className="text-green-600" />
                  Location: {location}
                </p>
              </div>

              <Link
                href={`/facilities/${facilityId}`}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                <MdPageview />
                View
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookingCard;
