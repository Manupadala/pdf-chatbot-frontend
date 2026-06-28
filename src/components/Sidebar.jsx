import { Link, useNavigate } from "react-router-dom";
import { usePDF } from "../context/PDFContext";
function Sidebar() {

  const navigate = useNavigate();
  const { selectedPDF, selectPDF } = usePDF();

  const logout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("selectedPDF");

  selectPDF("");

  navigate("/");
};
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white p-5 flex flex-col justify-between">
      <div className="p-6 text-2xl font-bold">
        PDF Chatbot
      </div>

      <div className="flex-1 px-4">

        <Link
          to="/chat"
          className="block p-3 rounded hover:bg-slate-700"
        >
          💬 Chat
        </Link>

        <Link
          to="/MyPDFs"
          className="block p-3 rounded hover:bg-slate-700"
        >
          📚 My PDFs
        </Link>

        <Link
          to="/history"
          className="block p-3 rounded hover:bg-slate-700"
        >
          🕒 History
        </Link>

      </div>

      <div className="border-t border-slate-700 p-4">

  <div className="mb-4 bg-slate-800 p-3 rounded">

    <p className="text-xs text-gray-400">
      Current PDF
    </p>

    <p className="text-sm font-semibold break-all mt-1">
      {selectedPDF || "No PDF Selected"}
    </p>

  </div>

  <Link
    to="/profile"
    className="block p-3 rounded hover:bg-slate-700"
  >
    👤 Profile
  </Link>

  <button
    onClick={logout}
    className="w-full mt-2 bg-red-600 p-3 rounded hover:bg-red-700"
  >
    🚪 Logout
  </button>

</div>
       
    </div>
  );
}

export default Sidebar;