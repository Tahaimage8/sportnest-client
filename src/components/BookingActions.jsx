"use client";

import React, { useState } from "react";
import { Button, DateField, Label } from "@heroui/react";
import { Clock } from "lucide-react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const BookingActions = ({ facility }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    name,
    facility_type,
    image,
    location,
    price_per_hour,
    capacity,
    available_slots,
    description,
    owner_email,
    _id,
  } = facility;

  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  const handleBookNow = async () => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (!bookingDate) {
      toast.error("Please select a booking date");
      return;
    }

    if (!selectedSlot) {
      toast.error("Please select a time slot");
      return;
    }

    const bookingData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      userEmail: user.email,
      facilityId: _id,
      name,
      image,
      facility_type,
      location,
      price_per_hour,
      capacity,
      description,
      owner_email,
      selectedSlot,
      bookingDate : new Date(bookingDate),

    };

    console.log(bookingData)
    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Booking successful");
      } else {
        toast.error("Booking failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 rounded-2xl bg-slate-50 p-4">
      <DateField
        className="w-full max-w-xs"
        name="date"
        onChange={(date) => setBookingDate(date)}
      >
        <Label className="mb-2 block text-sm font-semibold text-slate-700">
          Booking Date
        </Label>

        <DateField.Group className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus-within:border-green-600">
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-700">
        <Clock size={18} className="text-green-600" />
        Available Time Slots
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {available_slots?.map((slot, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedSlot(slot)}
            className={`rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition  ${
              selectedSlot === slot
                ? "border-green-600 bg-green-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-green-600 hover:bg-green-50"
            }`}
          >
            {slot}
          </button>
        ))}
      </div>

      <Button
        type="button"
        onPress={handleBookNow}
        className="mt-5 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Book Now
      </Button>
    </div>
  );
};

export default BookingActions;