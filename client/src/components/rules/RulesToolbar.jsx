import {
  Search,
  Filter,
  ArrowUpDown,
} from "lucide-react";

function RulesToolbar() {
  return (
    <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-4 top-3.5 text-gray-400"
          />

          <input
            placeholder="Search rules..."
            className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-black"
          />

        </div>

        <div className="flex flex-wrap gap-3">

          <div className="flex rounded-xl border border-gray-200">

            <button className="rounded-l-xl bg-black px-5 py-3 text-white">
              All
            </button>

            <button className="px-5 py-3 hover:bg-gray-100">
              Active
            </button>

            <button className="rounded-r-xl px-5 py-3 hover:bg-gray-100">
              Disabled
            </button>

          </div>

          <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 hover:bg-gray-100">

            <Filter size={18} />

            Filter

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 hover:bg-gray-100">

            <ArrowUpDown size={18} />

            Sort

          </button>

        </div>

      </div>

    </section>
  );
}

export default RulesToolbar;