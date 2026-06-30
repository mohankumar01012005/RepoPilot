import { Workflow, CheckCircle2 } from "lucide-react";

function GitHubIntegration() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
            <Workflow size={24} />
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              GitHub Integration
            </h2>

            <p className="mt-1 text-gray-500">
              Connected to
              {" "}
              <span className="font-semibold">
                mohankumar01012005
              </span>
            </p>

          </div>

        </div>

        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">

          <CheckCircle2 size={16} />

          Active

        </span>

      </div>

      <div className="mt-6 flex gap-4">

        <button className="rounded-lg border border-gray-200 px-5 py-2 hover:bg-gray-100">
          Manage Access
        </button>

        <button className="rounded-lg text-red-600 hover:underline">
          Disconnect
        </button>

      </div>
    </section>
  );
}

export default GitHubIntegration;