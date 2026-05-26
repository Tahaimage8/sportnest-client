"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Trophy, X } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import toast from "react-hot-toast";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const publicLinks = [
    { name: "Home", path: "/" },
    { name: "All Facilities", path: "/facilities" },
  ];

  const privateLinks = [
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Add Facility", path: "/add-facility" },
    { name: "Manage My Facilities", path: "/manage-facilities" },
  ];

  const links = [...publicLinks, ...privateLinks];

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logout successful");
    router.push("/login");
    router.refresh();
  };

  const handleDropdownAction = async (key) => {
    if (key === "logout") {
      await handleLogout();
      return;
    }

    router.push(key);
  };

  const getFallbackName = () => {
    if (!user?.name) return "U";

    return user.name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:bg-slate-950/90">
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

        {/* Desktop Auth/Profile */}
        <div className="hidden items-center gap-3 lg:flex">

            <ThemeToggle />
          {user ? (
            <Dropdown>
              <Button
                aria-label="Profile menu"
                variant="secondary"
                className="flex items-center gap-2 rounded-full  border-slate-200 bg-white py-5 text-slate-800 hover:bg-slate-50"
              >
                <Avatar>
                  <Avatar.Image
                    alt={user?.name || "User"}
                    src={user?.image || ""}
                  />
                  <Avatar.Fallback>{getFallbackName()}</Avatar.Fallback>
                </Avatar>

                <span className="max-w-28 truncate text-sm font-semibold">
                  {user?.name || "User"}
                </span>
              </Button>

              <Dropdown.Popover>
                <Dropdown.Menu onAction={handleDropdownAction}>
                  <Dropdown.Item id="/my-bookings" textValue="My Bookings">
                    <Label>My Bookings</Label>
                  </Dropdown.Item>

                  <Dropdown.Item id="/add-facility" textValue="Add Facility">
                    <Label>Add Facility</Label>
                  </Dropdown.Item>

                  <Dropdown.Item
                    id="/manage-facilities"
                    textValue="Manage My Facilities"
                  >
                    <Label>Manage My Facilities</Label>
                  </Dropdown.Item>

                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                  >
                    <Label>Logout</Label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
            <>
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
            </>
          )}
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
<div className=" flex justify-end p-3">
  
              <ThemeToggle />
</div>
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

            {user ? (
              <>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3">
                  <Avatar>
                    <Avatar.Image
                      alt={user?.name || "User"}
                      src={user?.image || ""}
                    />
                    <Avatar.Fallback>{getFallbackName()}</Avatar.Fallback>
                  </Avatar>

                  <div>
                    <p className="font-semibold text-slate-900">
                      {user?.name || "User"}
                    </p>
                    <p className="text-xs text-slate-500">{user?.email}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={async () => {
                    handleCloseMenu();
                    await handleLogout();
                  }}
                  className="rounded-xl bg-red-600 px-5 py-2.5 text-center font-semibold text-white"
                >
                  Logout
                </button>
              </>
            ) : (
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
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;