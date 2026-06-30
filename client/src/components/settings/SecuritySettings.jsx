import { ShieldCheck } from "lucide-react";
import { useState } from "react";

function SecuritySettings() {
  const [enabled, setEnabled] =
    useState(true);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
          <ShieldCheck size={22} />
        </div>

        <h2 className="text-2xl font-bold">
          Security
        </h2>

      </div>

      <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-5">

        <div>

          <h3 className="font-bold">
            Webhook Verification
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Verify GitHub webhook signatures using
            X-Hub-Signature-256.
          </p>

        </div>

        <button
          onClick={() =>
            setEnabled(!enabled)
          }
          className={`relative h-7 w-14 rounded-full transition ${
            enabled
              ? "bg-black"
              : "bg-gray-300"
          }`}
        >

          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
              enabled
                ? "left-8"
                : "left-1"
            }`}
          />

        </button>

      </div>

    </section>
  );
}

export default SecuritySettings;