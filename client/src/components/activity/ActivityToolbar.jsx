import {
  Search,
  Filter,
  Calendar,
  Download,
  RefreshCw,
} from "lucide-react";

function ActivityToolbar() {
  return (
    <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-4 top-3.5 text-gray-400"
          />

          <input
            placeholder="Search activity..."
            className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-black"
          />

        </div>

        <div className="flex flex-wrap gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50">

            <Filter size={18} />

            Filter

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50">

            <Calendar size={18} />

            Today

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50">

            <RefreshCw size={18} />

            Refresh

          </button>

          <button className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white">

            <Download size={18} />

            Export

          </button>

        </div>

      </div>

    </section>
  );
}

export default ActivityToolbar;