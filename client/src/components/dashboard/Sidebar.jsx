import {
  LayoutDashboard,
  FolderGit2,
  Workflow,
  History,
  Settings,
  Plus,
  Terminal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const menus = [
    {
  title: "Dashboard",
  icon: <LayoutDashboard size={20} />,
  path: "/dashboard",
},
{
  title: "Repositories",
  icon: <FolderGit2 size={20} />,
  path: "/repositories",
},

{
  title: "Activity",
  icon: <History size={20} />,
  path: "/activity",
},
{
  title: "Settings",
  icon: <Settings size={20} />,
  path: "/settings",
},
  ];

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-gray-200 bg-white md:flex md:flex-col">
      <div className="flex items-center gap-4 border-b border-gray-200 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
          <Terminal size={20} />
        </div>

        <div>
          <h2 className="text-lg font-bold">RepoPilot</h2>

          <p className="text-xs text-gray-500">
            Pro Plan
          </p>
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="space-y-2">
          {menus.map((item) => {
            const active =
              window.location.pathname === item.path;

            return (
              <button
                key={item.title}
                onClick={() => {
                  if (item.path !== "#") {
                    navigate(item.path);
                  }
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                  active
                    ? "bg-blue-50 font-semibold text-black"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.icon}

                {item.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-gray-200 p-4">
       
      </div>
    </aside>
  );
}

export default Sidebar;