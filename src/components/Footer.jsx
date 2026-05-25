import Link from "next/link";
import { Mail, MapPin, Phone, Trophy, ArrowRight } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "All Facilities", path: "/facilities" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Add Facility", path: "/add-facility" },
    { name: "Manage Facilities", path: "/manage-facilities" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      url: "https://github.com/your-github-username",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      url: "https://linkedin.com/in/your-linkedin-username",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={20} />,
      url: "https://facebook.com/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      url: "https://instagram.com/",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#16a34a,transparent_30%),radial-gradient(circle_at_bottom_right,#facc15,transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-950/30">
                <Trophy size={26} strokeWidth={2.5} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Sport<span className="text-green-400">Nest</span>
                </h2>
                <p className="-mt-1 text-xs font-medium text-slate-400">
                  Sports Booking
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              SportNest helps players discover, compare, and book sports
              facilities with a simple and reliable online booking experience.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ name, icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>

            <div className="mt-5 space-y-3">
              {quickLinks.map(({ name, path }) => (
                <Link
                  key={path}
                  href={path}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-green-400"
                >
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Facility Types</h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p>Football Turf</p>
              <p>Badminton Court</p>
              <p>Swimming Lane</p>
              <p>Tennis Court</p>
              <p>Cricket Net</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <p className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-green-400" />
                support@sportnest.com
              </p>

              <p className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-green-400" />
                +880 1234 567890
              </p>

              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-green-400" />
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-white">Ready to play?</p>
              <p className="mt-2 text-sm text-slate-400">
                Find your preferred facility and book your next game easily.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} SportNest. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-green-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
