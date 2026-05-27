import FacilityCard from "@/components/FacilityCard";
import FacilitySearchFilter from "@/components/FacilitySearchFilter";

const facilitiesPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const type = params?.type || "";

  let facilities = [];

  try {
    const queryParams = new URLSearchParams();

    if (search) {
      queryParams.set("search", search);
    }

    if (type) {
      queryParams.set("type", type);
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities?${queryParams.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (res.ok) {
      facilities = await res.json();
    }
  } catch (error) {
    facilities = [];
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-wide text-green-600">
            All Facilities
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Explore Sports Facilities
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Browse available sports facilities and choose your preferred venue
            for practice, training, or friendly matches.
          </p>

          <FacilitySearchFilter defaultSearch={search} defaultType={type} />
        </div>

        {facilities.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
            No facilities found.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default facilitiesPage;