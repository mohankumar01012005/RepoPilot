import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import RepositoriesHeader from "../components/repositories/RepositoriesHeader";
import RepositoryStats from "../components/repositories/RepositoryStats";
import RepositoryGrid from "../components/repositories/RepositoryGrid";

import ConnectRepositoryModal from "../components/modals/ConnectRepositoryModal";

function Repositories() {
  const [openModal, setOpenModal] =
    useState(false);

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Sidebar />

      <Topbar />

      <main className="md:ml-64 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-8">

          <RepositoriesHeader
            onConnect={() =>
              setOpenModal(true)
            }
          />

          <RepositoryStats />

          <RepositoryGrid
            onConnect={() =>
              setOpenModal(true)
            }
          />

        </div>
      </main>

      <ConnectRepositoryModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
      />

    </div>
  );
}

export default Repositories;