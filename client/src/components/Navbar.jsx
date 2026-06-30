import { useNavigate } from "react-router-dom";
import { loginWithGithub } from "../services/authService";
function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-10">

          <h1 className="text-2xl font-black tracking-tight">
            RepoPilot
          </h1>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#documentation"
              className="text-sm font-medium text-gray-600 transition hover:text-black"
            >
              Documentation
            </a>

            <a
              href="#features"
              className="text-sm font-medium text-gray-600 transition hover:text-black"
            >
              Features
            </a>

            <a
              href="#support"
              className="text-sm font-medium text-gray-600 transition hover:text-black"
            >
              Support
            </a>

          </nav>

        </div>

        {/* Right Side */}

        <button
          className="
          rounded-xl
          bg-black
          px-5
          py-2.5
          text-sm
          font-semibold
          text-white
          transition
          hover:scale-105
          hover:bg-gray-900
          "
          onClick={loginWithGithub}
        >
          Sign in with GitHub
        </button>

      </div>
    </header>
  );
}

export default Navbar;