import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import MyPDFs from "./pages/MyPDFs";
import History from "./pages/History";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/chat"
        element={<Chat />}
      />

      <Route
        path="/mypdfs"
        element={<MyPDFs />}
      />

      <Route
        path="/history"
        element={<History />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

    </Routes>
  );
}

export default App;