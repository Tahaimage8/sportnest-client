/* eslint-disable @next/next/no-img-element */



import BookingActions from "@/components/BookingActions";
import DeleteDialog from "@/components/DeleteDialog";
import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import { MapPin, Users, Clock, Mail, BadgeDollarSign } from "lucide-react";
import { BiEdit } from "react-icons/bi";


const FacilitiesDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/facilities/${id}`, {
    cache: "no-store",
  });

  const facility = await res.json();

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
  } = facility;

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Image */}
          <div className="h-fit overflow-hidden my-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <img
              src={image}
              alt={name}
              className="h-70 w-full object-cover md:h-90 lg:h-105"
            />
          </div>

          {/* Details */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                {facility_type}
              </span>

              <span>
        <div className="flex gap-2">
               <EditModal  facility={facility}/>
               <DeleteDialog facility={facility}/>
        </div>
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              {name}
            </h1>

            <p className="mt-4 leading-7 text-slate-600">{description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MapPin size={18} className="text-green-600" />
                  Location
                </p>
                <p className="mt-2 text-slate-600">{location}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Users size={18} className="text-green-600" />
                  Capacity
                </p>
                <p className="mt-2 text-slate-600">{capacity} people</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <BadgeDollarSign size={18} className="text-green-600" />
                  Price Per Hour
                </p>
                <p className="mt-2 text-slate-600">৳{price_per_hour} / hour</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Mail size={18} className="text-green-600" />
                  Owner Email
                </p>
                <p className="mt-2 break-all text-slate-600">{owner_email}</p>
              </div>
            </div>

            {/* Available Slots */}
            {/* Booking Button */}

        <BookingActions facility={facility}/>
                

          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesDetailsPage;