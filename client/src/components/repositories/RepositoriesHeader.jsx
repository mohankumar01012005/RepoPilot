import { Link2 } from "lucide-react";

function RepositoriesHeader({
  onConnect,
}) {
  return (
    <section className="mb-10">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <h1 className="text-4xl font-black text-gray-900">
            Repositories
          </h1>

          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Manage your connected GitHub repositories and monitor webhook
            health, automation rules and repository activity from one place.
          </p>
        </div>

       <button
    onClick={onConnect} className="flex items-center gap-3 rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:opacity-90">
          <Link2 size={18} />

          Connect New Repository
        </button>
      </div>
    </section>
  );
}

export default RepositoriesHeader;