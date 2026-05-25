"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Trophy, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "All Facilities", path: "/facilities" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Add Facility", path: "/add-facility" },
    { name: "Manage Facilities", path: "/manage-facilities" },
  ];

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-white shadow-md shadow-green-200">
            <Trophy size={24} strokeWidth={2.5} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Sport<span className="text-green-600">Nest</span>
            </h1>
            <p className="-mt-1 text-xs font-medium text-slate-500">
              Sports Booking
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`text-sm font-semibold transition ${
                pathname === path
                  ? "text-green-600"
                  : "text-slate-700 hover:text-green-600"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-xl border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-600 transition hover:bg-green-50"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-slate-200 p-2 text-slate-800 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5">
            {links.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                onClick={handleCloseMenu}
                className={`font-semibold transition ${
                  pathname === path
                    ? "text-green-600"
                    : "text-slate-700 hover:text-green-600"
                }`}
              >
                {name}
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="/login"
                onClick={handleCloseMenu}
                className="rounded-xl border border-green-600 px-5 py-2.5 text-center font-semibold text-green-600"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={handleCloseMenu}
                className="rounded-xl bg-green-600 px-5 py-2.5 text-center font-semibold text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
