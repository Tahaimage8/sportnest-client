import Link from "next/link";
import { SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-950">
      <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-900/40">
          <SearchX size={34} />
        </div>

        <h1 className="mt-6 text-5xl font-extrabold text-slate-900 dark:text-white">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
          The page you are looking for does not exist or may have been moved.
          Please go back to the home page.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;