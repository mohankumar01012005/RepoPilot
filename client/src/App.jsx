import { Routes, Route } from "react-router-dom";
import Activity from "./pages/Activity";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Repositories from "./pages/Repositories";
import Settings from "./pages/Settings";
import Rules from "./pages/Rules";
import AuthSuccess from "./pages/AuthSuccess";
function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
      />
      <Route
    path="/rules"
    element={<Rules />}
/>

<Route
  path="/auth/success"
  element={<AuthSuccess />}
/>

      <Route
    path="/settings"
    element={<Settings />}
/>

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/repositories"
        element={<Repositories />}
      />
      <Route
    path="/activity"
    element={<Activity />}
/>

    </Routes>
  );
}

export default App;