"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AddFacilityPage = () => {
    const { data: session } = authClient.useSession();
  const user = session?.user;
const email = user?.email || "";
  // console.log(user)
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const facility = Object.fromEntries(formData);

    const newFacility = {
      ...facility,
      price_per_hour: Number(facility.price_per_hour),
      capacity: Number(facility.capacity),
      available_slots: facility.available_slots
        .split(",")
        .map((slot) => slot.trim()),
      booking_count: 0,
    };

    try {
      const res = await fetch("http://localhost:5000/facilities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFacility),
      });

      const data = await res.json();

      if (data.insertedId) { 
        toast.success("Facility added successfully!");
        e.target.reset();
        router.push("/");
      } else {
        toast.error("Failed to add facility");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

 
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 text-slate-900 shadow-xl md:p-10">
        <h1 className="mb-10 text-center text-3xl font-bold text-green-600">
          Add Facility
        </h1>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Facility Name */}
            <div className="md:col-span-2">
              <TextField name="name" isRequired>
                <Label className={"mb-2 block text-sm font-semibold text-slate-800"}>Facility Name</Label>

                <Input
                  placeholder="Green Arena Football Turf"
                  className={"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"}
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>
            </div>

            {/* Facility Type */}
            <div>
              <label className={"mb-2 block text-sm font-semibold text-slate-800"}>Facility Type</label>

              <select
                name="facility_type"
                required
                defaultValue=""
                className={"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"}
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
              </select>
            </div>

            {/* Location */}
            <div>
              <TextField name="location" isRequired>
                <Label className={"mb-2 block text-sm font-semibold text-slate-800"}>Location</Label>

                <Input placeholder="Mirpur, Dhaka" className={"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"} />

                <FieldError className="text-sm text-red-500" />
              </TextField>
            </div>

            {/* Price Per Hour */}
            <div>
              <TextField name="price_per_hour" type="number" isRequired>
                <Label className={"mb-2 block text-sm font-semibold text-slate-800"}>Price Per Hour</Label>

                <Input
                  type="number"
                  placeholder="1200"
                  className={"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"}
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>
            </div>

            {/* Capacity */}
            <div>
              <TextField name="capacity" type="number" isRequired>
                <Label className={"mb-2 block text-sm font-semibold text-slate-800"}>Capacity</Label>

                <Input type="number" placeholder="20" className={"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"} />

                <FieldError className="text-sm text-red-500" />
              </TextField>
            </div>

            {/* Available Time Slots */}
            <div className="md:col-span-2">
              <TextField name="available_slots" isRequired>
                <Label className={"mb-2 block text-sm font-semibold text-slate-800"}>Available Time Slots</Label>

                <Input
                  placeholder="09:00 AM - 10:00 AM, 10:00 AM - 11:00 AM"
                  className={"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"}
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>


            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="image" isRequired>
                <Label className={"mb-2 block text-sm font-semibold text-slate-800"}>Image URL</Label>

                <Input
                  type="url"
                  placeholder="https://example.com/facility.jpg"
                  className={"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"}
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>
            </div>

            {/* Owner Email */}
            <div className="md:col-span-2">
              <TextField value={email} name="owner_email" isRequired>
                <Label className={"mb-2 block text-sm font-semibold text-slate-800"}>Owner Email</Label>

                <Input
                  type="email"
                  placeholder="owner@example.com"
                  className={"w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"}
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className={"mb-2 block text-sm font-semibold text-slate-800"}>Description</Label>

                <TextArea
                  placeholder="Write a short description about this facility..."
                  className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600 min-h-32 resize-none`}
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>
            </div>
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-green-600 text-lg font-semibold text-white hover:bg-green-700"
          >
            Add Facility
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AddFacilityPage;