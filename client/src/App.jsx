import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Repositories from "./pages/Repositories";
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";
import AuthSuccess from "./pages/AuthSuccess";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/auth/success"
        element={<AuthSuccess />}
      />

      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/repositories"
        element={
          <ProtectedRoute>
            <Repositories />
          </ProtectedRoute>
        }
      />

      <Route
        path="/activity"
        element={
          <ProtectedRoute>
            <Activity />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;