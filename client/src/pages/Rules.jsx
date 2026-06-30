import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import RulesToolbar from "../components/rules/RulesToolbar";
import RulesGrid from "../components/rules/RulesGrid";
import { useState } from "react";
import CreateRuleModal from "../components/modals/CreateRuleModal";
function Rules() {
  const [openModal, setOpenModal] =
  useState(false);
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <Topbar />

      <main className="md:ml-64">
        <div className="mx-auto max-w-7xl px-8 py-8">

          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h1 className="text-4xl font-black">
                Automation Rules
              </h1>

              <p className="mt-2 text-gray-500">
                Manage and monitor your automated GitHub workflows and triggers.
              </p>

            </div>

            <button
    onClick={() =>
      setOpenModal(true)
    }
    className="rounded-xl bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
>
    + Create New Rule
</button>

          </div>

          <RulesToolbar />

          <RulesGrid />

        </div>
      </main>
      <CreateRuleModal
    open={openModal}
    onClose={() =>
      setOpenModal(false)
    }
/>  
    </div>
  );
}

export default Rules;