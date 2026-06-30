import {
  Bell,
  Search,
  Workflow,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useAuth";

function Topbar() {
  const navigate = useNavigate();

  const { data: user } = useCurrentUser();

  const logout = () => {
  localStorage.removeItem("authToken");
  navigate("/", { replace: true });
};

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-8 md:ml-64">

      <div>

        <h1 className="text-2xl font-bold">
          RepoPilot
        </h1>

      </div>

      <div className="flex items-center gap-5">

        <div className="relative hidden lg:block">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search..."
            className="w-72 rounded-xl border border-gray-200 py-2 pl-10 pr-4 outline-none focus:border-black"
          />

        </div>

        <button className="transition hover:text-black">

          <Bell size={22} />

        </button>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-2">

          <Workflow size={18} />

          <span className="hidden md:block">
            {user?.username ?? "GitHub"}
          </span>

        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-red-600 transition hover:bg-red-100"
        >

          <LogOut size={18} />

          <span className="hidden md:block">
            Logout
          </span>

        </button>

      </div>

    </header>
  );
}

export default Topbar;