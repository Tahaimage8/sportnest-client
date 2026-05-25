"use client";

import { Button } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const EditModal = ({ facility }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const {
    _id,
    name,
    facility_type,
    image,
    location,
    price_per_hour,
    capacity,
    available_slots,
    description,
    owner_email,
  } = facility || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedFacility = Object.fromEntries(formData);

    const finalUpdatedFacility = {
      ...updatedFacility,
      price_per_hour: Number(updatedFacility.price_per_hour),
      capacity: Number(updatedFacility.capacity),
      available_slots: updatedFacility.available_slots
        .split(",")
        .map((slot) => slot.trim()),
    };

    try {
      const res = await fetch(`http://localhost:5000/facilities/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalUpdatedFacility),
      });

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Facility updated successfully!");
        setOpen(false);
        router.refresh();
      } else {
        toast.error("No changes updated");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Button
        type="button"
        onPress={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
      >
        <BiEdit />
        Edit
      </Button>

      {open && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 px-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Edit Facility
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Update facility information and save changes.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-700 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Facility Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    defaultValue={name}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Facility Type
                  </label>
                  <select
                    name="facility_type"
                    required
                    defaultValue={facility_type}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  >
                    <option value="" disabled>
                      Select facility type
                    </option>
                    <option value="Football Turf">Football Turf</option>
                    <option value="Cricket Net">Cricket Net</option>
                    <option value="Badminton Court">Badminton Court</option>
                    <option value="Tennis Court">Tennis Court</option>
                    <option value="Swimming Lane">Swimming Lane</option>
                    <option value="Basketball Court">Basketball Court</option>
                    <option value="Table Tennis">Table Tennis</option>
                    <option value="Volleyball Court">Volleyball Court</option>
                    <option value="Futsal Court">Futsal Court</option>
                    <option value="Cricket Ground">Cricket Ground</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Location
                  </label>
                  <input
                    name="location"
                    type="text"
                    defaultValue={location}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Price Per Hour
                  </label>
                  <input
                    name="price_per_hour"
                    type="number"
                    defaultValue={price_per_hour}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Capacity
                  </label>
                  <input
                    name="capacity"
                    type="number"
                    defaultValue={capacity}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Available Time Slots
                  </label>
                  <input
                    name="available_slots"
                    type="text"
                    defaultValue={available_slots?.join(", ")}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Image URL
                  </label>
                  <input
                    name="image"
                    type="url"
                    defaultValue={image}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Owner Email
                  </label>
                  <input
                    name="owner_email"
                    type="email"
                    defaultValue={owner_email}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={description}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                </div>
              </div>

              <div className="sticky bottom-0 flex flex-col gap-3 bg-white pt-4 sm:flex-row">
                <Button
                  type="submit"
                  className="h-12 flex-1 rounded-xl bg-green-600 text-base font-semibold text-white hover:bg-green-700"
                >
                  Update Facility
                </Button>

                <Button
                  type="button"
                  onPress={() => setOpen(false)}
                  className="h-12 rounded-xl border border-slate-300 bg-white px-8 text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};