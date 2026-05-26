import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-950">
      <div className="flex flex-col items-center gap-4">

        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        <Spinner size="xl" />
          </h2>

          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Please wait while we prepare your data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Loading;